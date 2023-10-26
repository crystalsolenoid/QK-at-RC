---
layout: layouts/collection.njk
title: Daily Log
override:tags: [navigation, home]
permalink: log/
---

A daily development and study log.

{%- for entry in collections.log reversed %}
* [{{ entry.data.title }}]({{ entry.page.url }})
{%- endfor %}

[Atom Feed](/feed.xml)
