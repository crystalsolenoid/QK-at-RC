---
title: Resume Template
tags:
    - tool
    - post
layout: layouts/project-standard.njk
languages:
    - typst
screenshots:
  - src: "sample-resume.png"
    alt: "A short example resume with understated styling for a fictional character, Contemplate Mibbons. Lists one silly entry each for Selected Projects, Work Experience, and Education sections. Each entry has the date and location or language on a column on the right. Across the top are fake links with icons to mail, github, linkedin, and a portfolio."
github: https://github.com/crystalsolenoid/typst-resume-template
play: false
#started: 2024-10-25T12:00:00-08:00
ended: 2024-01-16T12:00:00-08:00
status: Finished
summary: My resume template for Typst
---

A Typst resume template for anyone who wants to use or modify it. I got started with Typst a couple of days before and threw this together based on my old LaTeX resume.

Since creating my resume in Typst, I've had to go back and update or customize it a few times. It has felt much less cumbersome to do so with this template (and in Typst in general) than it was when I was fighting LaTeX or MS Word.

## Usage

Define individual items in items.typ, add these items to the section lists in sections.typ, and customize the order of the sections in main.typ. If you open this in the [Typst web editor](https://typst.app/) and double-click on any of the text in the preview output, it will jump you to the point in the code to edit it.

I recommend making variables at the top of items.typ for things like schools and cities, if any of those repeat often in your resume data.

## Limitations

The positioning of the (optional) links in the projects section is a little weird. If your project titles are too long, you'll have to adjust the position manually. Suggestions welcome.

## Other Information

SVG's are from the free pack at [Font Awesome](https://fontawesome.com/download). I only included the ones I used.

Thank you to my wife for supplying Discworld trivia for the sample resume. I have no idea who Contemplate Mibbons is, but I like the idea that silly academia wizards do weather analysis in Rust.
