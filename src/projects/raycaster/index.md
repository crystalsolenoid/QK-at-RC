---
title: Rust Raycaster
tags:
    - rust
    - graphics
layout: layouts/project-standard.njk
languages:
    - rust
screenshots:
  - src: "flat-textures.png"
    alt: "Left: A raycast rendering of a room with silhouettes of cubes that are filled in with a gold brick texture. Right: An overhead view of the same room, with a cone of brown stopping at little golden squares, or the wall behind."
  - src: "column.png"
    alt: "Left: A distorted raycast rendering with flat colors. A gray column looms ahead in a dark room with bright golden walls. Right: An overhead view of a larger area, with a gray square casting a dramatic shadow in a cone of brown."
github: https://github.com/crystalsolenoid/rust-raycaster
play: false
started: 2023-11-24T14:00:00-08:00
status: In progress
summary: Learning how to use Rust by building a raycaster from scratch.
---

## About
I am curious about the history of early computer graphics. Recently it has been raycasters, especially [the screensaver I stared at for ages as a kid](https://en.wikipedia.org/wiki/3D_Maze). I am not the only one motivated by this experience. See also [Screensaver Subterfuge](https://poor-track-design.itch.io/screensaver-subterfuge) and [Maze 95 JS](https://maze95.js.org/).

To start writing this raycaster, I read [Dmitry V. Sokolov's Tiny Raycaster tutorial](https://github.com/ssloy/tinyraycaster/wiki/Part-0:-getting-started) to get inspired and get a head start on the algorithm. It was helpful to get some momentum, but I've found [F. Permadi's Ray-Casting Tutorial for Game Development and Other Purposes (1996)](https://permadi.com/1996/05/ray-casting-tutorial-table-of-contents/) to be very useful in actually understanding the math enough to write test cases.

While I'm still definitely in the prototype stage, things are coming together. I have learned a lot about writing Rust from this project. I'm not sure what I'll make out of it yet, but I hope to do something fun with it.

The color palette I'm using is [Rust Gold 8](https://lospec.com/palette-list/rust-gold-8). I like the atmosphere it brings.

## Other cool raycasters
- [Terminal Dungeon](https://github.com/salt-die/terminal_dungeon)
- [awkaster](https://blog.yjl.im/2016/01/awkaster-doom-like-shooter-in-gnu-awk.html)

<!--- ## What is the difference between a raycaster and a ray*tracer*? --->

