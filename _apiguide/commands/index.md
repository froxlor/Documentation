---
layout: page
title: Commands
has_children: true
has_toc: false
---

# Commands

<!--
determine latest version
-->
{% assign sites = site.apiguide %}
{% for s in sites reversed %}
{% if s.api_entry %}
{% assign current_api = s.title %}
{% break %}
{% endif %}
{% endfor %}

List of API modules, current stable version {{ current_api }}

{% for s in sites -%}
{% if s.parent == current_api -%}
|  [{{ s.title }}]({{ s.url }})  |
{% endif %}
{%- endfor -%}
