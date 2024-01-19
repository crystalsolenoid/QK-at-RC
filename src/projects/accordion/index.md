---
title: Accordion Task
tags:
    - rust
    - tool
layout: layouts/project-standard.njk
screenshots:
    - src: "accordion_prototype.png"
      alt: "A terminal user interface with timer and routine sections. The timer section has a progress bar at 40%. The routine section has a list of tasks: brush teeth (3 minutes), put on glasses (1 minute), turn on music (1 minute). Brush teeth is selected. None of the tasks' checkboses are checked."
github: https://github.com/crystalsolenoid/accordion_task
#play: true
started: 2024-01-15T12:00:00-08:00
#ended: 2019-08-09T12:00:00-08:00
status: In progress
summary: A TUI-based personal routine manager in Rust.
---

A personal routine scheduler with flexible timing. If something goes wrong, the scheduler should be able to adjust the rest of the task durations to accomodate.

Currently just a protoype. Written in Rust with [Ratatui](https://ratatui.rs/). A TUI was chosen to keep things distraction-free and hopefully low-latency, as these are essential features. I am hoping it will work with [Termux](https://termux.dev/en/) on Android over SSH.

Routines will be stored as portable, human-editable CSV files.
