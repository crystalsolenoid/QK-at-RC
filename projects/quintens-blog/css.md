---
title: CSS Breakdown
---

This is a breakdown of the CSS used on my website. Other details about the site can be found at the [website project page](/projects/quintens-blog).

## Goals

## Body text width, padding, and centering

For this section, I have tweaked Seirdy's [Line length](https://seirdy.one/posts/2020/11/23/website-best-practices/#line-length) code snippet so that the second selector works with my current HTML.

The other change I made is to add an auto-margin to the html selector. I'm not sure if this should be in the media query or outside of it, but I think it's okay for now.

```CSS
@media screen {
  html {
    max-width: 45em;
    padding: 0 3%;
    margin: auto;
  }

  article {
    margin: auto;
    max-width: 36em;
  }
}
```

### Print-friendliness

They remind us to use a media query for the width limits to avoid accidentally forcing printers to use the same width limits. Printers should probably use the full width of the page by default.

I print web pages sometimes to help my eyes, especially for things I intend to reference back to. Let me tell you, this mistake is really common! It's so frustrating to see a short two-page article attempt to hog ten pages of paper... all because someone forgot (or doesn't care about) my poor, tired eyes.

### Body text width

Seirdy claims that the line length (80 characters max) [recommended by WCAG)](https://www.w3.org/TR/WCAG22/#visual-presentation) is a tricky decision, because the reading preferences of individuals can vary on either end. I wonder if the subject matter can play a part, too. But in the end, they go for an `em` approximation of `80ch`.

Because of the WCAG, 80 characters is a very conventional design decision. This is a good thing for a website that focuses on readability of its content. If I ever run into problems, I can consider deviating then.

The decision to use `em` instead of `ch` has to do with niche browser compatibility concerns. That's something that I am not going to try to understand right now, but I do want to support those brave, neglected users of niche browsers [in this current Chrome-or-Safari world](https://gs.statcounter.com/browser-market-share). I imagine that this unit choice is helpful because focusing on older, core browser features when (all else is equal) means that it takes much less labor for a new browser engine to be developed that can render your page.

### Padding and centering

I've left in Seirdy's `padding: 0 3%;` line for the html selector. This, combined with the `max-width` means that the blank space on either edge of the content is fluid. It exists but is very small on narrow windows, and fills all the extra space on wide windows.

I've added a `margin: auto` line to the html selector so that the article element (and thus the body text) is centered.

My navigation links are outside of the article element, so they are able to occupy a bit of extra width, and jut out to the side. I am not worrying about if I want to keep this yet, but I do think it's kind of pleasant.
