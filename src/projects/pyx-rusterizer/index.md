---
title: Pyx Rusterizer
tags:
    - rust
    - graphics
    - collab
layout: layouts/project-standard.njk
languages:
    - rust
screenshots:
  - src: "screenshots/lit-porygon.png"
    alt: "Porygon is rendered with flat lighting across each triangle: a red body, cyan accents, and dramatic dark blue shadows. The big eyes and tiny pupils stare blankly at you, but it's a little cute."
github: https://github.com/crystalsolenoid/pyx-rusterizer
play: false
started: 2024-06-15T12:00:00-08:00
status: In progress
summary: Low poly, low res, low color 3D rendering collab in Rust
---

A low-poly, low-res, low-color-depth 3D rendering toy.

This project is continued from [Pyx Rasterizer](/projects/pyx-rasterizer) after we decided to switch to Rust for ease of debugging and maintainability.

John and I work on it together (pair programming) most weekends. We both enjoy reinventing the wheel to understand it better, and this project stems from that ethos. The rendering is coded by hand, down to the pixel. Rendering the pixel buffer to the screen is handled by a library. We gave obj file parsing the same treatment, using one of my favorite websites [Paul Bourke's data formats: 3D, Audio, Image](http://www.paulbourke.net/dataformats/obj/) as a reference.

Most recently, we implemented some simple low-palette lighting. Our lighting-to-color algorithm is similar to that described in a [PICO-8 lighting tutorial](https://medium.com/hackernoon/pico-8-lighting-part-1-thin-dark-line-8ea15d21fed7). Now, we are working on allowing the user to specify the palette and color progression for different lit materials using [TOML](https://toml.io/en/) files. Eventually, we'd like to add a cool little UI.
