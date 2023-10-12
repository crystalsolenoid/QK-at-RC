---
title: Daily Log
override:tags: []
---

## Daily Log

{%- for entry in collections.log %}
* [{{ entry.page.date }}]({{ entry.page.url }})
{%- endfor %}
