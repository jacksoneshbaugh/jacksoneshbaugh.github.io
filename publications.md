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

{% assign talks_for_map = site.data.talks | sort: "date" | reverse %}

<section class="presentation-map" aria-labelledby="presentation-map-title">
  <h3 id="presentation-map-title">Research Dissemination Footprint</h3>
  <p>
    My research has been presented at conferences, workshops, and symposiums across the United States and internationally.
  </p>

  <div id="presentation-map" class="presentation-map-frame" role="img" aria-label="Interactive map showing research presentation locations listed in the presentations data below."></div>
</section>

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>
<script defer src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
  window.addEventListener("load", function () {
    const mapElement = document.getElementById("presentation-map");
    if (!mapElement || typeof L === "undefined") return;

    const presentationTalks = [
      {% for talk in talks_for_map %}
        {% if talk.lat and talk.long %}
          {% assign related_pub = nil %}
          {% if talk.publication %}
            {% assign related_pub = site.data.pubs | where: "id", talk.publication | first %}
          {% endif %}
          {
            id: {{ talk.id | jsonify }},
            label: {{ talk.map_label | default: talk.venue | jsonify }},
            title: {{ talk.title | jsonify }},
            city: {{ talk.city | jsonify }},
            venue: {{ talk.venue | jsonify }},
            date: {{ talk.date | date: "%b %Y" | jsonify }},
            lat: {{ talk.lat }},
            lng: {{ talk.long }},
            links: [
              {% if talk.links %}
                {% for link in talk.links %}
                  { label: {{ link.label | jsonify }}, url: {{ link.url | jsonify }} }{% unless forloop.last %},{% endunless %}
                {% endfor %}
              {% endif %}
              {% if related_pub %}
                {% if talk.links %},{% endif %}
                { label: "Related publication", url: {{ related_pub.doi | default: related_pub.arxiv | jsonify }} }
              {% endif %}
            ]
          }{% unless forloop.last %},{% endunless %}
        {% endif %}
      {% endfor %}
    ];

    const presentationLocations = Object.values(
      presentationTalks.reduce(function (locations, talk) {
        const key = talk.lat + "," + talk.lng;
        if (!locations[key]) {
          locations[key] = {
            city: talk.city,
            lat: talk.lat,
            lng: talk.lng,
            talks: []
          };
        }
        locations[key].talks.push(talk);
        return locations;
      }, {})
    );

    const map = L.map(mapElement, {
      scrollWheelZoom: false,
      dragging: true,
      tap: true,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const markerByTalkId = {};

    function escapeHtml(value) {
      return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function popupHtml(location) {
      const talkItems = location.talks.map(function (talk) {
        const links = talk.links.map(function (link) {
          return `<a href="${escapeHtml(link.url)}">${escapeHtml(link.label)}</a>`;
        }).join(" · ");

        return `
          <div class="presentation-map-popup-item">
            <strong>${escapeHtml(talk.label)}</strong><br>
            <span>${escapeHtml(talk.date)} · ${escapeHtml(talk.venue)}</span><br>
            <em>${escapeHtml(talk.title)}</em>
            ${links ? `<div class="presentation-map-popup-links">${links}</div>` : ""}
            <button type="button" class="presentation-map-focus-list" data-talk-id="${escapeHtml(talk.id)}">View details</button>
          </div>
        `;
      }).join("");

      return `
        <div class="presentation-map-popup">
          <h4>${escapeHtml(location.city)}</h4>
          ${talkItems}
        </div>
      `;
    }

    const markers = presentationLocations.map(function (location) {
      const marker = L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(popupHtml(location));

      location.talks.forEach(function (talk) {
        markerByTalkId[talk.id] = marker;
      });

      return marker;
    });

    window.presentationMap = {
      map: map,
      markerByTalkId: markerByTalkId,
      talksById: presentationTalks.reduce(function (talks, talk) {
        talks[talk.id] = talk;
        return talks;
      }, {})
    };

    if (markers.length > 0) {
      const group = L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.3), {
        maxZoom: 4
      });
    } else {
      map.setView([20, 0], 2);
    }

    requestAnimationFrame(function () {
      map.invalidateSize();
      if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.3), {
          maxZoom: 4
        });
      }
    });

    setTimeout(function () {
      map.invalidateSize();
    }, 500);

    window.addEventListener("resize", function () {
      map.invalidateSize();
    });
    document.addEventListener("click", function (event) {
      const mapButton = event.target.closest(".talk-map-button");
      if (mapButton) {
        const talkId = mapButton.getAttribute("data-talk-id");
        const talk = window.presentationMap.talksById[talkId];
        const marker = window.presentationMap.markerByTalkId[talkId];
        if (talk && marker) {
          map.setView([talk.lat, talk.lng], 8, { animate: true });
          marker.openPopup();
          mapElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }

      const listButton = event.target.closest(".presentation-map-focus-list");
      if (listButton) {
        const talkId = listButton.getAttribute("data-talk-id");
        const talkCard = document.getElementById("talk-" + talkId);
        if (talkCard) {
          talkCard.scrollIntoView({ behavior: "smooth", block: "center" });
          talkCard.classList.add("talk-card-highlight");
          setTimeout(function () {
            talkCard.classList.remove("talk-card-highlight");
          }, 1800);
        }
      }
    });
  });
</script>

<style>
  .presentation-map {
    margin: 1.5rem 0 2rem;
  }

  .presentation-map h3 {
    margin-bottom: 0.35rem;
  }

  .presentation-map p {
    margin-top: 0;
  }

  .presentation-map-frame {
    position: relative;
    display: block;
    width: 100%;
    height: 420px;
    min-height: 420px;
    margin-top: 1rem;
    border: 1px solid var(--border-color, #ddd);
    border-radius: 18px;
    overflow: hidden;
    background: #f5f7fa;
    isolation: isolate;
  }

  .presentation-map-frame .leaflet-container {
    width: 100%;
    height: 100%;
  }

  .presentation-map-frame .leaflet-pane,
  .presentation-map-frame .leaflet-top,
  .presentation-map-frame .leaflet-bottom {
    z-index: 1;
  }

  .presentation-map-frame .leaflet-tile-container img {
    max-width: none !important;
    max-height: none !important;
  }

  .presentation-map-popup h4 {
    margin: 0 0 0.5rem;
  }

  .presentation-map-popup-item {
    margin-top: 0.6rem;
  }

  .presentation-map-popup-item:first-of-type {
    margin-top: 0;
  }

  .presentation-map-popup-links {
    margin-top: 0.25rem;
  }

  .presentation-map-focus-list {
    margin-top: 0.4rem;
    border: 1px solid var(--border-color, #ddd);
    border-radius: 999px;
    padding: 0.25rem 0.65rem;
    background: var(--button-background, #fff);
    color: var(--text-color, #222);
    cursor: pointer;
    font: inherit;
    font-size: 0.85rem;
  }

  .talk-card {
    position: relative;
  }

  .talk-map-button {
    position: absolute;
    top: 0.9rem;
    right: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    border: 0;
    border-radius: 999px;
    padding: 0.22rem 0.6rem;
    background: color-mix(in srgb, var(--accent-color, #315f9f) 10%, transparent);
    color: var(--accent-color, #315f9f);
    cursor: pointer;
    font: inherit;
    font-size: 0.82rem;
    font-weight: 600;
    line-height: 1.2;
    z-index: 2;
  }

  .talk-map-button span[aria-hidden="true"] {
    font-size: 0.9rem;
    line-height: 1;
  }

  .presentation-map-focus-list:hover,
  .talk-map-button:hover {
    background: var(--accent-color, #315f9f);
    color: #fff;
  }

  .talk-map-button:focus-visible,
  .presentation-map-focus-list:focus-visible {
    outline: 2px solid var(--accent-color, #315f9f);
    outline-offset: 2px;
  }

  .talk-card-highlight {
    outline: 2px solid var(--accent-color, #315f9f);
    outline-offset: 6px;
    border-radius: 12px;
    transition: outline-color 0.2s ease;
  }

  .presentation-map-frame .leaflet-control-attribution {
    font-size: 0.7rem;
  }
</style>

<div class="talk-list">
{% assign talks = site.data.talks | sort: "date" | reverse %}
{% for t in talks %}
  <article class="talk-card" id="talk-{{ t.id }}">
    {% if t.lat and t.long %}
      <button type="button" class="talk-map-button" data-talk-id="{{ t.id }}" aria-label="Show {{ t.title | escape }} on the presentation map">
        <span aria-hidden="true">⌖</span>
        <span>Map</span>
      </button>
    {% endif %}
    <div class="talk-meta">
      {{ t.kind | capitalize }} · {{ t.date | date: "%b %Y" }} {% if t.upcoming %} <i>(upcoming)</i> {% endif %} · {{ t.city }}
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