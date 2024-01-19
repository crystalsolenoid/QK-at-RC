---
title: CSS Breakdown
summary: Discussion of my CSS decisions on this website in painstaking detail.
tags: web
---

This is a breakdown of the CSS used on my website. Other details about the site can be found at the [website project page](/projects/quintens-blog).

## Goals

## Body text width, padding, and centering

For this section, I have tweaked Seirdy's [Line length](https://seirdy.one/posts/2020/11/23/website-best-practices/#line-length) code snippet so that the second selector works with my current HTML.

The other change I made is to add an auto-margin to the html selector. I'm not sure if this should be in the media query or outside of it, but I think it's okay for now.

Instead of having zero padding for the top and bottom, I have added a little at the top, and a lot at the bottom. This is because I was encountering some problems with my header and footer navigation being too close to the edge of the screen on mobile. Either a browser footer covers my footer, or it's too close for comfortable tapping. I don't want buttons to be too close together, because it's an unnecessary barrier for people visiting the site.

```CSS
@media screen {
  html {
    max-width: 45em;
    margin: auto;
    padding-inline: 3%;

    padding-top: 1rem;
    padding-bottom: 4rem;
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

## Font and Line spacing

I'm going to use Seirdy's [Code snippet 4](https://seirdy.one/posts/2020/11/23/website-best-practices/#zoom-and-font-size) as a starting point for my font styles.

```css
html {
  font: 107.5%/1.5 sans-serif;
}
```

### Font size

In the past I've played around with [fluid typography](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/) to make my site as reader-friendly as possible at a variety of screen sizes. It can be useful, because the font size that's easy on our eyes on a phone screen is different from on a computer.

I think I will keep things simple this time, at least until I run into a problem. Seirdy suggests 107.5% in this snippet. When the default font size is the browser standard of 16px, a [font size converter](https://products.aspose.app/font/size-converter) says that will give us a resulting 17.2px font size.

There is only one piece of advice Seirdy gives regarding choosing a default font size: be consistent with other similar websites. This way, users won't have to zoom in or out just for you.

It is also important to be readable by default, though. Not everyone who uses the internet has the technical literacy to mess with default zoom settings. Someone might be borrowing a phone or using a library computer. I want my first impression to be a good one, so I care about those situations.

I'm not sure! I will leave it at 107.5% until I've formed a different opinion, if ever. The most important factor for font size according to the WCAG is that you be able to zoom to at least 200%, and be able to do it without making the site unusable.

### Font choice

Keeping it simple with sans-serif at the moment. Seirdy suggests that this is better than system-ui because sometimes [system fonts will do funny things](https://infinnie.github.io/blog/2017/systemui.html) (which I still need to read) depending on the system language. That's a big potential problem because I want my website to be welcoming to people whose computer isn't set to English.

I'm not satisfied with using sans-serif, though. I have my Firefox default font set to [APHont](https://www.fontspace.com/aphont-font-f4926) because I find it nice and readable. Before specifying a font on my website, it was rendering with APHont. After specifying sans-serif, it is now rendering as DejaVu Sans. It's fine, but it isn't respecting my preferences!

Looking into the extra dialogue box of "advanced" font settings, Firefox is informing me that it had APHont only set as the default *serif* font, without telling me. Disappointing! I guess this was on the browser end, but I wonder how common this problem is.

### Line spacing

Upping the default line spacing for paragraph text can make things more readable. Seirdy also points out that [spacing](https://seirdy.one/posts/2020/11/23/website-best-practices/#spacing) can be an important way to improve the size of [tap targets](https://seirdy.one/posts/2020/11/23/website-best-practices/#tap-targets).

For very large font sizes, 1.5 can be too much spacing, as demonstrated in [Using calc to figure out optimal line-height](https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/). It's an interesting article with great examples. I wish my site could address this. However I don't want to implement Jesús's proposed solution:

```css
line-height: calc(2px + 2ex + 2px);
```

because, as he points out, it is **font specific**. Different fonts have different ratios of the different aspects of height. I really care that my site isn't broken when someone switches fonts, so I don't think that the benefit here outweigh the risks.

## Lists

### List of links with summaries spacing

I've created a class `.summary-directory` for use in my [Log index](/log/) so that I can give an easy-to-understand amount of spacing for my long list of entries. Previously, this list was just a list of links with default spacing, which creates [tap targets](https://seirdy.one/posts/2020/11/23/website-best-practices/#tap-targets) which are way too close together. In order to increase the spacing of the tap targets and the legibility, I have two strategies:

First, I've added summaries to each entry, and have put these on a new line below each link on the index. This (non-link) text helps create a buffer between links even with no styling. It also really helps readability to see a preview of each entry, because my date-titles are cryptic.

Second, I've increased the spacing with the following CSS rule. Each entry summary, the thing being selected with `.summary-directory p` (`.summary-directory` is on the `<ul>`), gets a little space between it and its entry link, and a lot of space between it and the next entry link. This keeps it clear which link it is describing.

```css
.summary-directory p {
  margin-block: 0.5rem 1.5rem;
}
```
