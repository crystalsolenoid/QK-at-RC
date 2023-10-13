---
layout: layouts/collection.njk
title: Projects
override:tags: [navigation]
permalink: projects/
---

{%- for entry in collections.project %}
* [{{ entry.data.title }}]({{ entry.page.url }})
{%- endfor %}
