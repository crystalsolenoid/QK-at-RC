---
title: Pyx Rasterizer
tags:
    - python
    - graphics
    - collab
layout: layouts/project-standard.njk
languages:
    - python
screenshots:
  - src: "screenshots/cubes.png"
    alt: "Two low-resolution cubes are floating in space at different orientations. Each face is a different color."
  - src: "screenshots/zbuff.png"
    alt: "Two cubes with their faces covered in dense lines of repeating patterns of color. Faces closer to parallel with the screen have thicker lines."
  - src: "screenshots/down-tris.png"
    alt: "A smattering of low-resolution triangles overlap one another. They are varied in color and dimensions, but all have one side that is horizontal on top."
github: https://github.com/JohnEdChristensen/pyxel_playground/blob/main/src/3D.py
play: true
started: 2023-11-03T12:00:00-08:00
status: In progress
---

A triangle [rasterizer](https://en.wikipedia.org/wiki/Rasterisation) using [Pyxel](https://github.com/kitao/pyxel) as a graphics library.

The goal is to work our way up to what the graphics card does with triangles to render a 3D model. I got to do this in a class in college and had so much fun, but always wanted to see what it would be like to reimplement in a fantasy console with low-res constraints. John wanted to better understand what goes on behind the scenes in 3D rendering, so we have joined forces! Working on this with him weekly has been a highlight of my Recurse Center batch.
