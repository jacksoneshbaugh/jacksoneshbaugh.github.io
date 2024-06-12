---
layout: page
title: Résumé
permalink: /resume/
page_id: resume
lang: "en"
---

<div class="center">
    <h2>Jackson Eshbaugh</h2>
    <p>Computer Science & French Student &bull; Lafayette College</p>
</div>

## Education

<div class="timeline">
    {% for post in site.categories["education"] %}
        {% if post.lang == "en" %}
    <div class="timeline-item">
        <div class="timeline-contents">
            <div class="timeline-date">{{ post.listed-date }}</div>
            <a class="timeline-title" href="{{ post.url }}">{{ post.title }}</a>
            <p>{{ post.location }}<br /><i>GPA: {{ post.gpa }}</i></p>
            <span class="timeline-dot"></span>
            <p>{{ post.description }}</p>
        </div>
    </div>
        {% endif %}
    {% endfor %}
</div>

## Honors & Awards

<div class="timeline">
    {% for post in site.categories["honors"] %}
        {% if post.lang == "en" %}
    <div class="timeline-item">
        <div class="timeline-contents">
            <div class="timeline-date">{{ post.listed-date }}</div>
            <a class="timeline-title" href="{{ post.url }}">{{ post.title }}</a>
            <p>{{ post.location }}</p>
            <span class="timeline-dot"></span>
            <p>{{ post.description }}</p>
        </div>
    </div>
        {% endif %}
    {% endfor %}
</div>

## Experience

<div class="timeline">
    {% for post in site.categories["experience"] %}
        {% if post.lang == "en" %}
    <div class="timeline-item">
        <div class="timeline-contents">
            <div class="timeline-date">{{ post.listed-date }}</div>
            <a class="timeline-title" href="{{ post.url }}">{{ post.title }}</a>
            <p>{{ post.location }}</p>
            <span class="timeline-dot"></span>
            <p>{{ post.description }}</p>
        </div>
    </div>
        {% endif %}
    {% endfor %}
</div>

## Skills

<div class="row">
    <div class="column">
        <h3>Programming Languages</h3>
        <ul class="skill-list">
            <li>Java</li>
            <li>HTML/CSS</li>
            <li>JavaScript (vanilla, Node)</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>PHP</li>
            <li>SQL</li>
        </ul>
    </div>
    <div class="column">
        <h3>Tools & Practices</h3>
        <ul class="skill-list">
            <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
            <li>JetBrains IDEs</li>
            <li>Eclipse</li>
            <li>Unit Testing</li>
            <li>JUnit</li>
            <li>Software Design</li>
        </ul>
    </div>
    <div class="column">
        <h3>Spoken Languages</h3>
        <ul class="skill-list">
            <li>English (Native tongue)</li>
            <li>French (Professional competence)</li>
        </ul>
    </div>
</div>

## Leadership

<div class="timeline">
    {% for post in site.categories["leadership"] %}
        {% if post.lang == "en" %}
    <div class="timeline-item">
        <div class="timeline-contents">
            <div class="timeline-date">{{ post.listed-date }}</div>
            <a class="timeline-title" href="{{ post.url }}">{{ post.title }}</a>
            <p>{{ post.location }}</p>
            <span class="timeline-dot"></span>
            <p>{{ post.description }}</p>
        </div>
    </div>
        {% endif %}
    {% endfor %}
</div>

## Activities

<div class="timeline">
    {% for post in site.categories["activities"] %}
        {% if post.lang == "en" %}
    <div class="timeline-item">
        <div class="timeline-contents">
            <div class="timeline-date">{{ post.listed-date }}</div>
            <a class="timeline-title" href="{{ post.url }}">{{ post.title }}</a>
            <p>{{ post.location }}</p>
            <span class="timeline-dot"></span>
            <p>{{ post.description }}</p>
        </div>
    </div>
        {% endif %}
    {% endfor %}
</div>