---
title: Varvara Emulator
tags:
    - rust
    - tool
layout: layouts/project-standard.njk
languages:
    - rust
#screenshots:
#  - src: "screenshots/lit-porygon.png"
#    alt: "Porygon is rendered with flat lighting across each triangle: a red body, cyan accents, and dramatic dark blue shadows. The big eyes and tiny pupils stare blankly at you, but it's a little cute."
github: https://github.com/crystalsolenoid/quins_varvara
play: false
started: 2024-10-25T12:00:00-08:00
status: In progress
summary: My little attempt at a uxn computer emulator
---

The [Uxn virtual machine](https://wiki.xxiivv.com/site/uxntal.html) and its pretend hardware Varvara make up a fun little system. It's endearing to me because it feels very esoteric and yet at the same time was designed by people who [knew exactly what they wanted](https://100r.co/site/uxn_design.html).

I thought implementing my own version would be a fun way to demystify assembly and get more comfortable messing with bytes in Rust. I am loosely following [compudanzas' tutorial](https://compudanzas.net/uxn_tutorial.html) on how to *program* the varvara computer so that I have lots of nice little test cases.
