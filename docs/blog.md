---
layout: default
title: Blog
nav_order: 12
permalink: /blog/
description: "The SaveBuddy blog: guides on saving links, bookmarking, and building Chrome extensions."
image:
  path: "/assets/images/social/savebuddy-og.png"
  width: 1200
  height: 630
  alt: "SaveBuddy Blog - Guides on Saving Links"
keywords: "SaveBuddy blog, save links, Chrome extensions, bookmarking guides"
---

# Blog

Practical guides on saving links, managing bookmarks, and building Chrome extensions.

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url }})

{{ post.description }}

*Posted {{ post.date | date: "%B %d, %Y" }}*

{% endfor %}

---

*Want a guide on something else? [Open an issue](https://github.com/gautamkaran/SaveBuddy/issues) and we'll write it.*