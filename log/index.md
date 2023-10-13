---
layout: layouts/collection.njk
title: Daily Log
override:tags: [navigation]
permalink: log/
---

# Daily Log

{%- for entry in collections.log %}
* [{{ entry.data.title }}]({{ entry.page.url }})
{%- endfor %}
