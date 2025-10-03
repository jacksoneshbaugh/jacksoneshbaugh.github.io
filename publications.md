---
layout: page
title: Publications
permalink: /publications/
page_id: publications
related:
  - title: Research
    url: '/research/'
    description: Academic projects I have or am working on and collaborations.
---

## Publications & Preprints

<div class="pub-list">
{% assign items = site.data.pubs | sort: "year" | reverse %}
{% for p in items %}
  <article class="pub-card" itemscope itemtype="https://schema.org/ScholarlyArticle">
    <div class="pub-meta">
      <span class="badge badge-{{ p.type | downcase }}">{{ p.type | upcase }}</span>
      <time itemprop="datePublished">{{ p.year }}</time>
    </div>
    <h3 class="pub-title" itemprop="headline">
      <a href="{{ p.doi | default: p.arxiv }}" itemprop="sameAs">{{ p.title }}</a>
    </h3>
    <div class="pub-authors" itemprop="author">
      {% assign list = p.authors | join: ", " | replace: "Eshbaugh, J.", "<strong>Eshbaugh, J.</strong>" %}
      {{ list }}
    </div>
    {% if p.venue_note %}<div class="pub-venue">{{ p.venue_note | replace: "Energy & Buildings", "<em>Energy & Buildings</em>" }}</div>{% endif %}
    {% if p.links %}
      <div class="pub-links">
        {% for l in p.links %}
          <a href="{{ l.url }}">{{ l.label }}</a>{% unless forloop.last %} · {% endunless %}
        {% endfor %}
      </div>
    {% endif %}
  </article>
{% endfor %}
</div>

## Posters & Presentations

<div class="talk-list">
{% assign talks = site.data.talks | sort: "date" | reverse %}
{% for t in talks %}
  <article class="talk-card">
    <div class="talk-meta">
      {{ t.kind | capitalize }} · {{ t.date | date: "%b %Y" }} · {{ t.city }}
    </div>
    <h3 class="talk-title">{{ t.title }}</h3>
    <div class="talk-venue"><em>{{ t.venue }}</em></div>
    {% if t.authors %}
      <div class="talk-authors">
        {% assign list = t.authors | join: ", " | replace: "Eshbaugh, J.", "<strong>Eshbaugh, J.</strong>" %}
        {{ list }}
      </div>
    {% endif %}
    {% if t.links %}
      <div class="talk-links">
        {% for l in t.links %}
          <a href="{{ l.url }}">{{ l.label }}</a>{% unless forloop.last %} · {% endunless %}
        {% endfor %}
      </div>
    {% endif %}
        {% if t.publication %}
          <div class="talk-related">
            <strong>Related Publication:</strong>
            {% assign pub = site.data.pubs | where: "id", t.publication | first %}
            {% if pub %}
              <a href="{{ pub.doi | default: pub.arxiv }}">{{ pub.title }}</a> ({{ pub.year }})
            {% else %}
              {{ t.publication }}
        {% endif %}
</div>
{% endif %}
  </article>
{% endfor %}
</div>