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
  <li><strong>Computational Linguistics</strong></li>
  <li><strong>Machine Learning Interpretability</strong></li>
  <li><strong>Theoretical Foundations of AI</strong></li>
</ul>

---

# Projects

<!-- Projects list -->
<div id="projects" class="project-list">
{% assign projects = site.data.projects %}
{% for p in projects %}
  <section class="project-item"
           data-title="{{ p.title | downcase }}"
           data-tags="{{ p.tags | join: ' ' | downcase }}"
           data-status="{{ p.status | downcase }}">
    <div class="meta-row">
      <span class="status status-{{ p.status | downcase }}">{{ p.status }}</span>
      <span class="dates">{{ p.dates }}</span>
    </div>
    <h3 class="project-title">{{ p.title }}</h3>
    <p class="project-summary">{{ p.summary }}</p>

    {% if p.collaborators %}
    <p class="project-collab">
      <strong>Collaborators:</strong>
      {% for c in p.collaborators %}
        <a href="{{ c.url }}">{{ c.name }}</a>{% unless forloop.last %}, {% endunless %}
      {% endfor %}
    </p>
    {% endif %}
    
    {% if p.advisors %}
    <p class="project-collab">
        <strong>Advisors:</strong>
        {% for c in p.advisors %}
            <a href="{{ c.url }}">{{ c.name }}</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
    </p>
    {% endif %}

    {% if p.related_pub_ids and site.data.pubs %}
      <div class="related-section">
        <h4>Related publications</h4>
        <div class="card-row">
          {% for id in p.related_pub_ids %}
            {% assign pub = site.data.pubs | where: "id", id | first %}
            {% if pub %}
              <article class="mini-card pub-card">
                <a class="mini-title" href="{{ pub.doi | default: pub.arxiv }}">{{ pub.title }}</a>
                <span class="mini-meta">{{ pub.year }}</span>
              </article>
            {% endif %}
          {% endfor %}
        </div>
      </div>
    {% endif %}

    {% if p.related_talk_ids and site.data.talks %}
    <div class="related-section">
      <h4>Related posters & talks</h4>
      <div class="card-row">
        {% for id in p.related_talk_ids %}
          {% assign talk = site.data.talks | where: "id", id | first %}
          {% if talk %}
            <article class="mini-card talk-card">
              <span class="mini-title">{{ talk.title }}</span>
              <span class="mini-meta">{{ talk.date | date: "%b %Y" }}</span>
            </article>
          {% endif %}
        {% endfor %}
      </div>
    </div>
    {% endif %}

    {% if p.links %}
    <div class="project-links">
      {% for l in p.links %}
        <a class="btn btn-outline" href="{{ l.url }}">{{ l.label }}</a>
      {% endfor %}
    </div>
    {% endif %}

    <footer class="project-tags">
      {% for t in p.tags %}
        <span class="chip" data-tag="{{ t | downcase }}">{{ t }}</span>
      {% endfor %}
    </footer>

  </section>
{% endfor %}
</div>

<script>
(function(){
  const $q = document.getElementById('q');
  const $only = document.getElementById('only-active');
  const $tags = Array.from(document.querySelectorAll('.tag'));
  const $items = Array.from(document.querySelectorAll('.project-item'));
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
    $items.forEach(item => {
      const inTitle = item.dataset.title.includes(q);
      const inTags = item.dataset.tags.includes(q);
      const matchesText = !q || inTitle || inTags;

      const itemTags = item.dataset.tags.split(/\s+/);
      const hasAllTags = !state.tags.size || [...state.tags].every(t => itemTags.includes(t));
      const statusOk = !state.only || item.dataset.status === 'active';
      const show = matchesText && hasAllTags && statusOk;
      item.style.display = show ? '' : 'none';
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