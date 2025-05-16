---
layout: page
title: Projets
permalink: /projets/
page_id: projects
lang: "fr"
---

Je peux faire des choses intéressantes ! Voici quelques-uns des projets sur lesquels j'ai travaillé par le passé.

<!-- TODO: Add a filter bar for filtering by subject -->
<div class="project-list">
    {% for post in site.categories["Projects"] %}
        {% if post.lang == "fr" and post.featured == true %}
    <div class="project">
        <img class="project-img" src="{{ post.image }}" alt="{{ post.title }}">
        <div class="project-contents">
            <a href="{{ post.url }}"><h3 class="project-title">{{ post.title }}</h3></a>
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