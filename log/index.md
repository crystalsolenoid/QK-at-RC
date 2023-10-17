---
layout: layouts/collection.njk
title: Daily Log
override:tags: [navigation]
permalink: log/
---

{%- for entry in collections.log reversed %}
* [{{ entry.data.title }}]({{ entry.page.url }})
{%- endfor %}
