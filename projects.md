---
layout: page
title: Projects
permalink: /projects/
page_id: projects
---

I can get up to some interesting stuff! Here are some of the projects I've worked on in the past.

<div class="project-list">
    {% for post in site.categories["Projects"] %}
        {% if post.lang == "en" and post.featured == true %}
    <div class="project">
        <img class="project-img" src="{{ post.image }}" alt="{{ post.title }}">
        <div class="project-contents">
            <a class="timeline-title" href="{{ post.url }}">{{ post.title }}</a><br />
            <span class="project-meta">{{ post.domain }} &bull; {{ post.listed-date }}</span>
            <div class="project-authors">
                {% for author in post.authors %}
                <div class="project-author">
                    <img class="project-author-img" src="{{ author.image }}" alt="{{ author.name }}">
                    <a href="{{ author.github }}">{{ author.name }}</a>
                </div>
                {% endfor %}
            </div>
            <p class="project-description">{{ post.description }}</p>
        </div>
    </div>
{% endif %}
    {% endfor %}
</div>