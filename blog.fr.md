---
layout: page
title: Blog
permalink: /blog/
page_id: blog
lang: "fr"
---

## Une collection de mes pensées et expériences

{% for post in site.categories["blog"] %}
{% if post.lang == "fr" %}
<div class="blog-post">
    <a href="{{ post.url }}">
        {% if post.image %}
            <img src="{{ post.image }}" alt="{{ post.title }}" class="blog-image" />
        {% endif %}
        <h2>{{ post.title }}</h2>
    </a>
        <small>{{ post.listed-date }}</small>
    <!-- Pull out the first 200 words of the content -->
    <p>{{ post.content | strip_html | truncatewords: 200 }}...</p>
    <a href="{{ post.url }}" class="read-more">Read more</a>
</div>
<br />
{% endif %}
{% endfor %}
    