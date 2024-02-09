---
title: Conway's Game of Music
tags:
    - pico-8
    - demo
    - music
    - lua
layout: layouts/project-standard.njk
screenshots:
    - src: "playing.png"
      alt: "One large area split into quadrants has some randomly colored squares in the shape of two Conway's Game of Life gliders. Two separate smaller areas below have vertical bars and a square. Each area has a yellow rectangle highlighting some of the squares."
#github: 
#itch: https://qazlal.itch.io/tile-flip
#play: true
started: 2018-06-03T12:00:00-08:00
ended: 2018-06-10T12:00:00-08:00
status: Retired
summary: Dynamic PICO-8 music generation with a Conway's Game of Life implementation and multiple editable boards.
---

[Play and view source code](https://www.lexaloffle.com/bbs/?tid=31372)

## Release notes from [Lexaloffle](https://www.lexaloffle.com/bbs/?tid=31372)

I wanted to play with procedurally generated music, so here's a little game where you can listen to the little cells in Conway's Game of Life!

When music is paused, Z to toggle the aliveness of the cell at the cursor.
X to play a song of the current board and then load the new one according to Conway's Game of Life rules. You can now press X again to stop the music.
You can't spawn cells live during a song.
When the music is not playing, use arrows to move around a cursor. If you go over an alive cell, it will play its note.

I made use of [eruonna's music data structure example code](https://www.lexaloffle.com/bbs/?tid=2341)., as well as stat(20) and stat(24) to draw the yellow box. I didn't even have to touch the SFX menu, although I did select which channels play on which patterns by hand.

Pitch is controlled by how old a cell is. It's snapped to c-minor because that seems to be part of Pico-8's ~Aesthetic~.
Timing is controlled by position (as seen with the yellow box).

==CHANGELOG==
==Jun 10, 2018==
Cells are now color-coded by letter-note. In the future, you will be able to switch between this and the previous instrument color-coding:

C: 8
D: 9
E: 10
F: 11
G: 12
A: 13
B: 14

Sharps/flats are a checkered blend of the letter-notes they are located between.

There are now multiple boards. Had to rework most of my functions to support this, but now it's pretty easy to change the number of boards. The music is a little messed up, but in the future, the big board will control two sfx channels, and each little board will control its own sfx channel. Hopefully this will lead to more interesting repetition patterns in the music.

==Jun 5, 2018 Part 2 (Actually fun to mess around with now!)==
I added functionality to the cursor! Now you can press Z to kill or spawn a new cell at the cursor.
Randomly spawning cells is gone until I can get a better interface. Reset cart to get new random cells.
Modified the default effects, and added a feature to allow per-instrument volume adjustments. I think it sounds much more musical now!

==Jun 5, 2018==
Now it works! No more music bugs... I hope. This one was very embarrassing: I tried to refer to "sfxn" as "sfxm". I really need to go into a non-pico8 editor when doing serious debugging. I noticed right away after doing that.
Added cursor to preview the singing voices of each individual cell.

==Jun 4, 2018==
Aha! I added a function that allows you to easily print a character onto a cell. Hold <- to see the cells in deadlist, and -> to see cells in alivelist. It turns out that I was adding the same cell to alivelist multiple times (when pressing X) but when they died, only removing them once. Fixed now, so I think no more ghosts will be singing!

I wonder if it would be cool to have four small boards going at once, at different speeds. That way you could have repetition: maybe one instrument per board.

==Jun 3, 2018==
I can't seem to squash some big bugs. Sometimes after running for a while, music will play where things look dead. Ghosts? Maybe it has to do with how inexperienced I am with Lua's tables.

If I continute working on this, I'd like to add a simple editor so you can find out what a gilder sounds like.
I'd also like a ~pitch view mode~ where instead of color-coded instruments, it color-codes by the note that will play.
