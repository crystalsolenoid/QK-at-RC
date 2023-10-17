---
layout: layouts/collection.njk
title: Projects
override:tags: [navigation]
permalink: projects/
---

Overviews, excited ramblings, and in-depth discussion about things I've done, am doing, or want to do.

This section of the site will be organized and written more like [garden](https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/) than a blog.

{%- for entry in collections.project %}
* [{{ entry.data.title }}]({{ entry.page.url }})
{%- endfor %}
