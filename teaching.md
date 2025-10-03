---
layout: page
title: Teaching
permalink: /teaching/
page_id: teaching
---

<div class="teaching-intro">
  <p class="lede">Understanding is worth everything. I teach to help others pursue it.</p>
  <blockquote class="verse">
    The beginning of wisdom is this: Get wisdom. Though it cost all you have, get understanding.
    <span class="cite">(Proverbs 4:7, NIV)</span>
  </blockquote>
  <p class="blurb">
    I’ve served as a Teaching Assistant and MSG leader, focusing on clarity, confidence, and curiosity in computer science.
  </p>
</div>

## Courses & Materials

<div class="course-grid">
{% assign items = site.data.teaching %}
{% for c in items %}
  <article class="course-card">
    <header class="course-head">
      <h3 class="course-title">{{ c.course }}</h3>
      <span class="badge{% if c.status == 'active' %} status-active{% endif %}">{{ c.term }}</span>
    </header>
    <p class="course-meta">{{ c.institution }}</p>
    <p class="course-meta"><strong>Instructor:</strong> {{ c.instructor }}</p>
    <p class="course-summary">{{ c.summary }}</p>
    {% if c.links and c.links.size > 0 %}
      <div class="course-links">
        {% for l in c.links %}
          <a class="btn btn-outline" href="{{ l.url }}">{{ l.label }}</a>
        {% endfor %}
      </div>
    {% endif %}
  </article>
{% endfor %}
</div>

---

## Teaching Philosophy

In my instruction, I value the following:

<div class="philosophy-grid">

  <article class="philosophy-card">
    <h3>Casual depth</h3>
    <p>Come as you are—anyone can engage deeply. A relaxed tone lowers the barrier; depth comes from good questions.</p>
  </article>

  <article class="philosophy-card">
    <h3>Personalized learning</h3>
    <p>Meet learners where they are. When curiosity reaches beyond the syllabus, offer intuition and next steps.</p>
  </article>

  <article class="philosophy-card">
    <h3>Active classroom</h3>
    <p>Learning is social. I design sessions that prompt discussion, collaboration, and hands-on practice.</p>
  </article>

  <article class="philosophy-card">
    <h3>Clarity first</h3>
    <p>Start with intuition and examples, then layer abstraction. Concepts stick when they’re grounded.</p>
  </article>

  <article class="philosophy-card">
    <h3>Confidence building</h3>
    <p>Frequent low-stakes checks and visible progress help students trust themselves and keep momentum.</p>
  </article>

  <article class="philosophy-card">
    <h3>Curiosity-driven</h3>
    <p>Questions fuel learning. I model wonder, reward exploration, and encourage “why?” as much as “how?”.</p>
  </article>

  <article class="philosophy-card">
    <h3>Inclusive & accessible</h3>
    <p>All backgrounds and learning styles are welcome. Materials and pacing are designed to include everyone.</p>
  </article>

</div>