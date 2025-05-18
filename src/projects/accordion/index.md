---
title: Accordion Task
tags:
    - rust
    - tool
    - post
layout: layouts/project-standard.njk
screenshots:
    - src: "accordion_prototype.png"
      alt: "A terminal user interface with timer and routine sections. The timer section has a progress bar at 40%. The routine section has a list of tasks: brush teeth (3 minutes), put on glasses (1 minute), turn on music (1 minute). Brush teeth is selected. None of the tasks' checkboses are checked."
github: https://github.com/crystalsolenoid/accordion_task
#play: true
started: 2024-01-15T12:00:00-08:00
#ended: 2024-01-25T12:00:00-08:00
status: In progress
summary: A TUI-based personal routine manager in Rust.
---

A personal routine scheduler with flexible timing. If something goes wrong, the scheduler should be able to adjust the rest of the task durations to accomodate. Written in Rust with [Ratatui](https://ratatui.rs/). A TUI was chosen to keep things distraction-free and hopefully low-latency, as these are essential features.

I am to the point where I am using this daily myself. It's really helpful to offload the getting-ready part of my brain when I'm groggy in the morning. By the time I'm done with the program guiding me through getting ready for the day, I feel much more awake. Right now I use the app [terminus](https://termius.com/) on my phone to SSH into my computer to run it. Eventually there will probably be a webapp version, especially once I'm ready to share with other users!


Routines are be stored as portable, human-editable CSV files. Log files are generated for every time a routine is run. The goal of that is to set things up in the future for additional UNIX-philosophy-style tools that can adjust the times budgeted for each task with whatever method the user desires.
