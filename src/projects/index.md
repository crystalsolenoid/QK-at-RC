---
layout: layouts/collection.njk
title: Projects
override:tags: [navigation, home]
permalink: projects/
---

<p>
Overviews, excited ramblings, and in-depth discussion about things I've done, am doing, or want to do.
</p>

<p>
This section of the site will be organized and written more like <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">garden</a> than a blog.
</p>

<ul class=summary-directory>
{%- for entry in collections.project reversed %}
<li>
  <a href="{{ entry.page.url }}">{{ entry.data.title }}</a>
  {%- if entry.data.summary %}
  <p>
    {{ entry.data.summary }}
  </p>
  {%- endif %}
</li>
{%- endfor %}
</ul>
