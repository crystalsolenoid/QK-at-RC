---
title: HEXAWORM
tags:
    - glsl
    - demo
    - post
layout: layouts/project-standard.njk
screenshots:
    - src: "hexaworm.png"
      alt: "A blue chain of hexagons wobbles across the screen. It glows dramatically towards its head, and fades off at the tail into the gloom. It looks almost as if it were the wireframe of a 3D, hexagonal worm."
#play: true
#started: 2024-01-15T12:00:00-08:00
ended: 2023-12-08T12:00:00-08:00
status: Completed
summary: A GLSL shader creature.
---

[View live at Shadertoy](https://www.shadertoy.com/view/DtGBD1)

A nice little HEXAWORM swimming in a circle. Look at it go! Looks like it's from an alien planet, or perhaps it's like those pictures of viruses very close up. My inaugural non-hello-world glsl project.

## Source code
```GLSL
// thanks inigo
// https://iquilezles.org/articles/distfunctions2d/
float sdHexagon( in vec2 p, in float r )
{
    const vec3 k = vec3(-0.866025404,0.5,0.577350269);
    p = abs(p);
    p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p)*sign(p.y);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    
    vec2 st = (2. * uv - 1.) * vec2(iResolution.x / iResolution.y, 1.);

    // To mess with the signed distance function to make it glow
    float shine = 0.4 + 0.1 * pow(sin(0.600*iTime),2.);
    
    // To spin in place
    float a = .19 * iTime;
    mat2 post_rotation = mat2(-cos(a), sin(a),
                        sin(a) ,    cos(a));

    // Dist needs to be initialized outisde of for loop for scope
    // because we are composing multiple signed distance functions.
    float dist = 1.;
    // Make a bunch of hexagons:
    for (float i = 0.; i < 2.; i+=.1) { // TODO: make the loop conditions parameterized

        // To orbit center
        float b = i + iTime * 0.5;
        mat2 pre_rotation = mat2(-cos(b), sin(b),
                            sin(b) ,    cos(b));
        
        // Find the center of the hexagon:
        // Rotate about origin, offset, and change that offset depending on
        // the time and where you are in the worm, for that sweet undulating motion.
        vec2 p = st + vec2(.5 + 0.05 * sin(6. * i + iTime * 5.)) * pre_rotation;
        
        // Calculate the distance function for this hexagon.
        // The distance function is then taken to the shine'th power
        // (with a few tweaks for where you are in the worm).
        // This ends up giving the outline, but only if we use the magnitude of the
        // distance function as a threshold instead of the actual sign. (See below.)
        float segment_dist =  pow(sdHexagon(p * post_rotation, .1), 0.8 * i * shine);
        
        // Take the minimum of the current distance function and the old one to
        // compose the shapes.
        // Helpful link: https://numfactory.upc.edu/web/Geometria/signedDistances.html
        dist = min(dist,segment_dist);
    }
    
    // Decide on the g component depending on a hard threshold on the distance function.
    // This gives the crisp cyan of the hexagons.
    
    // If the condition on dist was dist == 0, nothing would show up.
    // Not sure entirely why! Do you know? 
    float g;
    if (dist < 0.1) {
        g = 1.;
    } else {
        g = 0.2;
    }
    
    // The b component instead depends on 1/dist, which gives the snazzy dark blue glow.
    float b = pow(0.4 / dist, 2.);
    
    // Output to screen
    fragColor = vec4(
        .0, g * 0.4 , b,1.
    );

}
```
