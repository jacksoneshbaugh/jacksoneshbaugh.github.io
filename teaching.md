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
    I've served as a Teaching Assistant and Mentored Study Group (MSG) leader, focusing on clarity, confidence, and curiosity in computer science education. As a TA, I support students during class through debugging assistance, conceptual guidance, and discussion. As an MSG leader, I facilitate collaborative review sessions where students work through labs, assignments, and course concepts in an approachable and supportive environment. 
  </p>
</div>

---

## Teaching Philosophy

<p class="teaching-philosophy-intro">
Much of my teaching philosophy centers on what I think of as <em>casual depth</em>: the belief that profound learning does not require rigidity, performance, or intimidation. Some of the most formative intellectual experiences emerge through relaxed conversation, curiosity, and the freedom to explore ideas openly.
</p>

<div class="orbit-wrap" role="img" aria-label="Teaching philosophy diagram: casual depth at center, surrounded by six principles — clarity first, curiosity-driven, personalized, active classroom, confidence building, inclusive and accessible">

  <div class="orbit-ring"></div>
  <div class="orbit-ring-inner"></div>

  <div class="orbit-center">
    <span class="label">Casual depth</span>
    <span class="sub">Come as you are. Profound learning emerges through relaxed curiosity.</span>
  </div>

  <!-- 12 o'clock -->
  <div class="orbit-node" style="top:3%;left:50%;transform:translateX(-50%)">
    <p class="n-title">Clarity first</p>
    <p class="n-body">Intuition and examples before abstraction. Concepts stick when grounded.</p>
  </div>

  <!-- 2 o'clock -->
  <div class="orbit-node" style="top:14%;right:4%">
    <p class="n-title">Curiosity-driven</p>
    <p class="n-body">Questions fuel learning. I reward exploration and model wonder.</p>
  </div>

  <!-- 4 o'clock -->
  <div class="orbit-node" style="bottom:14%;right:4%">
    <p class="n-title">Personalized</p>
    <p class="n-body">Meet learners where they are. When curiosity reaches the syllabus edge, offer intuition and next steps.</p>
  </div>

  <!-- 6 o'clock -->
  <div class="orbit-node" style="bottom:3%;left:50%;transform:translateX(-50%)">
    <p class="n-title">Active classroom</p>
    <p class="n-body">Learning is social. Sessions prompt discussion, collaboration, and hands-on practice.</p>
  </div>

  <!-- 8 o'clock -->
  <div class="orbit-node" style="bottom:14%;left:4%">
    <p class="n-title">Confidence building</p>
    <p class="n-body">Low-stakes checks and visible progress help students trust themselves.</p>
  </div>

  <!-- 10 o'clock -->
  <div class="orbit-node" style="top:14%;left:4%">
    <p class="n-title">Inclusive &amp; accessible</p>
    <p class="n-body">Questions are welcomed, support is accessible, curiosity grows without fear.</p>
  </div>

</div>

<!-- Mobile fallback -->
<div class="orbit-stack">
  <div class="stack-center">
    <h3>Casual depth</h3>
    <p>Come as you are. Profound learning does not require rigidity or performance — it emerges through relaxed conversation, curiosity, and the freedom to explore ideas openly.</p>
  </div>
  <div class="stack-node"><h3>Clarity first</h3><p>Intuition and examples before abstraction. Concepts stick when grounded.</p></div>
  <div class="stack-node"><h3>Curiosity-driven</h3><p>Questions fuel learning. I reward exploration and model wonder.</p></div>
  <div class="stack-node"><h3>Personalized</h3><p>Meet learners where they are. When curiosity reaches the syllabus edge, offer intuition and next steps.</p></div>
  <div class="stack-node"><h3>Active classroom</h3><p>Learning is social. Sessions prompt discussion, collaboration, and hands-on practice.</p></div>
  <div class="stack-node"><h3>Confidence building</h3><p>Low-stakes checks and visible progress help students trust themselves.</p></div>
  <div class="stack-node"><h3>Inclusive &amp; accessible</h3><p>Questions are welcomed, support is accessible, curiosity grows without fear.</p></div>
</div>

---

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