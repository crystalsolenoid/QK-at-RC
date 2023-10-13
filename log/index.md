---
layout: layouts/collection.njk
title: Daily Log
override:tags: [navigation]
---

# Daily Log

{%- for entry in collections.log %}
* [{{ entry.page.date | postDate }}]({{ entry.page.url }})
{%- endfor %}
