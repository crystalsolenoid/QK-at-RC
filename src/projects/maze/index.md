---
title: Rat Maze 3D Screensaver
tags:
    - picotron
    - screensaver
    - graphics
    - lua
layout: layouts/project-standard.njk
screenshots:
    - src: "3d-maze-rat.png"
      alt: "A cute, pixelated rat is standing in front of you in a hallway. The bright red brick walls shrink into the distance with perspective, until they end at a corner."
#github:
#itch:
play: false
started: 2024-04-03T12:00:00-08:00
#ended:
status: In progress
summary: A demake of the Win95 3D Maze screensaver for the Picotron fantasy desktop computer.
---

[Play and view source code](https://www.lexaloffle.com/bbs/?tid=141402)

## Notes from [Lexaloffle](https://www.lexaloffle.com/bbs/?tid=141402)

Okay, somebody has to do it. I'm going to try making a version of the 3D Maze.

Update: This is usable as a screensaver now! There are more features from the original to implement, but I think it's already pretty fun as-is.

### Controls

- Press a to toggle automatic mode (on by default).
- Out of automatic mode: Up/down keys to go forward/backward, left/right keys to turn, z/x keys to strafe.
- In either mode: Press m to toggle map view and raycast render. Press s to display CPU and RAM usage.

### Warning

[Picotron simulated] CPU usage is about 100%. The raycasting is expensive and I haven't felt like optimizing it yet because this project is for fun and that isn't where the fun is right now. I think it runs plenty smooth (60fps is overrated), but if your fantasy computer tends to overheat or you have big computations running in the background that you don't want your screensaver slowing down, watch out! :)

### Changelog

#### Version 1.3

Added a cute little rat that runs around the maze. See if you can spot it! (Are you a rat, too?)

#### Version 1.2

Performance improvements from like 120% to 100%. Mostly moving some things out of loops and caching repeated calculations. Also turned the player's position into a vector. This was a slightly anti-performance improvement, but non-raycasting CPU is at 5% so the code clarity is very worth it.

#### Version 1.1

Added random maze generation! Using a plain old [backtracking algorithm](https://professor-l.github.io/mazes/). (Let me know if you have any idea what algorithm the original rat maze used.) Fixed a bug where you got stuck in an infinite spin if initially facing the wall in a left-to-right hallway. You now start in a random position in the maze. Press "s" to pull up CPU and RAM stats. Press "m" to switch to an overhead view (was previously "enter").

#### Version 1.0

Changed textures and floor/ceiling to match the real screensaver. Added an automatic mode, which is on by default. This is the screensaver mode, where the player automatically follows the right wall in the maze. Added a maze, but it's always the same. Randomly generated mazes will come in a future update.

#### Version 0.5

Textured walls now pick their texture based on the map data.

#### Version 0.4

Implemented textured walls. It is very slow, but I haven't done any optimization yet so there's still hope. Changed movement to feel more natural in first-person mode.

    Currently drawing pixel by pixel because I need to learn how to draw only a vertical slice of a sprite (userdata). Does anyone know how? The userdata docs are a little over my head.

#### Version 0.3.1

Fixed an off-by-one bug that was causing some walls to be studded with spikes. What a relief.

#### Version 0.3

Calculate which wall is closer (vertical or horizontal). Add raycast view (press Enter to switch to it). I'm getting a weird spike artifact in the render. Colored vertical and horizontal walls differently, revealing that the incorrect wall is identified as "closer" during the spikes. I don't know what's causing that to happen. Finished Part 9 (drawing walls) of Permadi tutorial.

#### Version 0.2

First public version. Finished Part 7 (finding wall intersections) of Permadi tutorial.

    I'm going to start by working through [Permadi's 1996 Ray Casting Tutorial](https://permadi.com/1996/05/ray-casting-tutorial-table-of-contents/). It's really cool to be implementing such an old graphics tutorial. Anyone know of any other gems out there?

    Question for those with more PICO8 experience than me: Is it worth using bit shift operations instead of multiplication/division by a power of two? I'm keeping it as-is for now for readability reasons, but after the raycasting logic is finished, it might be fun to see if it speeds it up.
