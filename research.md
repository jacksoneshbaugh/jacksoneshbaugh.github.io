---
layout: page
title: Research
permalink: /research/
page_id: research
related:
  - title: Publications & Preprints
    url: '/publications/'
    description: A catalog of all of my publications, preprints, talks, and posters.
---

<div class="research-intro">
  <p class="lede">
    I believe one of the greatest joys in life is to discover and build new things—contributing, in however small a way, to the ongoing conversation of science.
  </p>
  <blockquote class="verse">
    Great are the works of the Lord;<br/>
    they are pondered by all who delight in them...<br/>
    <span class="cite">(Psalm 111:2, NIV)</span>
  </blockquote>
</div>

## Research Interests

<ul class="bullets">
  <li><strong>Machine Learning Interpretability</strong></li>
  <li><strong>Computational Linguistics & Multilingual NLP</strong></li>
  <li><strong>Theoretical Foundations of AI</strong></li>
</ul>

---

## Projects

<!-- Filter toolbar -->
<div class="filters" data-js="filters">
  <input id="q" class="filter-input" type="search" placeholder="Search projects…" aria-label="Search projects"/>
  <div class="filter-tags">
    {% assign all_tags = "" | split: "" %}
    {% for p in site.data.projects %}
      {% assign all_tags = all_tags | concat: p.tags %}
    {% endfor %}
    {% assign uniq = all_tags | uniq | sort %}
    {% for t in uniq %}
      <button class="tag" data-tag="{{ t }}">{{ t }}</button>
    {% endfor %}
  </div>
  <label class="only-active">
    <input type="checkbox" id="only-active" /> Show active only
  </label>
</div>

<!-- Projects grid -->
<div id="projects" class="project-grid">
{% assign projects = site.data.projects %}
{% for p in projects %}
  <article class="project-card"
           data-title="{{ p.title | downcase }}"
           data-tags="{{ p.tags | join: ' ' | downcase }}"
           data-status="{{ p.status | downcase }}">
    <span class="card-date status-{{ p.status | downcase }}">{{ p.dates }}</span>
    <header class="card-head">
      <h3 class="card-title">{{ p.title }}</h3>
    </header>

    <p class="card-summary">{{ p.summary }}</p>

    {% if p.collaborators %}
    <p class="card-collab">
      <strong>Collaborators:</strong>
      {% for c in p.collaborators %}
        <a href="{{ c.url }}">{{ c.name }}</a>{% unless forloop.last %}, {% endunless %}
      {% endfor %}
    </p>
    {% endif %}

    {% if p.related_pub_ids and site.data.pubs %}
      <div class="related-pubs">
        <strong>Related publications:</strong>
        <ul>
          {% for id in p.related_pub_ids %}
            {% assign pub = site.data.pubs | where: "id", id | first %}
            {% if pub %}
              <li>
                <a href="{{ pub.doi | default: pub.arxiv }}">{{ pub.title }}</a>
                <span class="pub-meta">({{ pub.year }})</span>
              </li>
            {% endif %}
          {% endfor %}
        </ul>
      </div>
    {% endif %}

    {% if p.related_talk_ids and site.data.talks %}
    <div class="related-pubs">
    <strong>Related posters & talks:</strong>
    <ul>
    {% for id in p.related_talk_ids %}
    {% assign talk = site.data.talks | where: "id", id | first %}
    {% if talk %}
    <li>
    {{ talk.title }}
    <span class="pub-meta">({{ talk.date | date: "%b %Y" }})</span>
    </li>
    {% endif %}
    {% endfor %}
    </ul>
    </div>
    {% endif %}

    {% if p.links %}
    <div class="card-links">
      {% for l in p.links %}
        <a class="btn btn-outline" href="{{ l.url }}">{{ l.label }}</a>
      {% endfor %}
    </div>
    {% endif %}

    <footer class="card-tags">
      {% for t in p.tags %}
        <span class="chip" data-tag="{{ t | downcase }}">{{ t }}</span>
      {% endfor %}
    </footer>

  </article>
{% endfor %}
</div>

<script>
(function(){
  const $q = document.getElementById('q');
  const $only = document.getElementById('only-active');
  const $tags = Array.from(document.querySelectorAll('.tag'));
  const $cards = Array.from(document.querySelectorAll('.project-card'));
  const state = { query:'', tags:new Set(), only:false };

  // Read URL params (e.g., /research/?tag=nlp&only=1&q=interpret)
  const params = new URLSearchParams(location.search);
  const paramTags = params.getAll('tag');
  paramTags.forEach(t => state.tags.add(t.toLowerCase()));
  state.only = params.get('only') === '1';
  state.query = params.get('q') || '';

  if ($q) $q.value = state.query;
  if ($only) $only.checked = state.only;
  $tags.forEach(btn => {
    if (state.tags.has(btn.dataset.tag)) btn.classList.add('active');
  });

  function apply(){
    const q = state.query.trim().toLowerCase();
    $cards.forEach(card => {
      const inTitle = card.dataset.title.includes(q);
      const inTags = card.dataset.tags.includes(q);
      const matchesText = !q || inTitle || inTags;

      const cardTags = card.dataset.tags.split(/\s+/);
      const hasAllTags = !state.tags.size || [...state.tags].every(t => cardTags.includes(t));
      const statusOk = !state.only || card.dataset.status === 'active';
      const show = matchesText && hasAllTags && statusOk;
      card.style.display = show ? '' : 'none';
    });

    // Update URL (shareable filters)
    const p = new URLSearchParams();
    if (state.query) p.set('q', state.query);
    if (state.only) p.set('only', '1');
    state.tags.forEach(t => p.append('tag', t));
    history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p.toString() : ''));
  }

  if ($q) $q.addEventListener('input', () => { state.query = $q.value; apply(); });
  if ($only) $only.addEventListener('change', () => { state.only = $only.checked; apply(); });
  $tags.forEach(btn => btn.addEventListener('click', () => {
    const t = btn.dataset.tag;
    if (btn.classList.toggle('active')) state.tags.add(t); else state.tags.delete(t);
    apply();
  }));

  apply();
})();
</script>