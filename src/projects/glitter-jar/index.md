---
title: Glitter Jar
tags:
    - processing
    - java
    - graphics
    - opengl
    - demo
    - post
layout: layouts/project-standard.njk
screenshots:
    - src: "glitter-jar.png"
      alt: "Differently-shaped flakes of glitter tumble through a haze of purple liquid. There are stars, rectangles, triangles, and tiny round specks"
    - src: "glitter-texture.png"
      alt: "A repeating pattern of randomly placed white dots in the shape of a cylinder. In the corner is the same pattern of glitter, but flat and without repeat"
github: https://github.com/crystalsolenoid/GlitterJar
#play: true
video: "glitter-jar.webm"
started: 2019-03-07T12:00:00-08:00
ended: 2019-03-18T12:00:00-08:00
status: Completed
summary: Glitter jar using tricks instead of simulation to get a convincing effect.
---

[video]({{video}}) (framerate looks off, but you can get an idea)

This was my final project for Intro to Graphics. I was told I wasn't allowed to just turn the project into a physics simulation: most of the computation had to be graphics-related. We got to present our projects to a panel of local judges from industry, and I was given the award for "Best Smoke and Mirrors" due to all the tricks I used to make things convincing enough on a low computational budget.

Instead, I went through my physics textbooks to find inspiration to make something *look* convincing without actually having to *simulate* it. I found a description of the steady-state distribution of particles in a liquid due to gravity and statistical mechanics, and used that as a bias for my random glitter positioning.

I found that it didn't feel as busy as a real glitter jar with just the larger glitter particles (rendered with triangles) unless I had so many glitter particles on the screen that everything lagged. To solve this problem, I decided to render tiny glitter as little dots on a cylindrical texture.

To evoke the feeling of very lightweight glitter particles, I had these glitter dots do a meandering random walk (a gaussian distribution in velocity) that was calculated live. However I discovered that I could easily get away with having a smaller number of particles and tile them. The world of the glitter particle is a flat torus, which allows for convincing repeats in the texture. The repeats are visible when the texture is viewed by itself, but with the rest of the glitter it becomes much less obvious.
