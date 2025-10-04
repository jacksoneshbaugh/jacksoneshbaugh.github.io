---
layout: page
title: Curriculum Vitae
permalink: /cv/
page_id: cv
katex: true
related:
  - title: Research
    url: '/research/'
    description: Academic projects I have or am working on and collaborations.
  - title: Publications & Preprints
    url: '/publications/'
    description: A catalog of all of my publications, preprints, talks, and posters.
  - title: Teaching
    url: '/teaching/'
    description: Learn about the teaching opportunities I've had
---

<p class="cv-sub">Jackson Eshbaugh — Computer Science & French, Lafayette College ’27</p>
<p class="cv-contact">
  <a href="mailto:eshbaugj@lafayette.edu">eshbaugj@lafayette.edu</a> ·
  <a href="https://jacksoneshbaugh.github.io">jacksoneshbaugh.github.io</a> ·
  <a href="https://orcid.org/0009-0009-1806-2166">ORCID</a>
</p>

<nav class="cv-toc" aria-label="Contents">
  <h2>Contents</h2>
  <ol>
    <li><a href="#education">Education</a></li>
    <li><a href="#positions">Research & Teaching Positions</a></li>
    <li><a href="#publications">Publications & Preprints</a></li>
    <li><a href="#talks">Talks & Posters</a></li>
    <li><a href="#awards">Honors & Awards</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#service">Service</a></li>
  </ol>
</nav>

<section id="education" class="cv-sec">
  <h2>Education</h2>
  <div class="cv-row">
    <div class="cv-left"><strong>Lafayette College</strong></div>
    <div class="cv-right">
      B.S. Computer Science (expected 2027); A.B. French (expected 2027). GPA: 4.0/4.0.
    </div>
  </div>
</section>

<section id="positions" class="cv-sec">
  <h2>Research & Teaching Positions</h2>

  <div class="cv-row">
    <div class="cv-left">
      <strong>EXCEL Scholar</strong><br>
      <span class="cv-meta">Lafayette College — Jun 2025–Present</span>
    </div>
    <div class="cv-right">
      <ul class="cv-bullets">
        <li>Interpretable ML & energy equity; with Prof. Jorge Silveyra.</li>
        <li>Urban energy data; synthetic homes; retrofit recommendations.</li>
      </ul>
    </div>
  </div>

  <div class="cv-row">
    <div class="cv-left">
      <strong>Teaching Assistant</strong><br>
      <span class="cv-meta">CS Dept. — F24, S25, F25</span>
    </div>
    <div class="cv-right">
      <ul class="cv-bullets">
        <li>Led review sessions, practice sets, and debugging labs.</li>
        <li><a href="/teaching/">Teaching page</a> with materials.</li>
      </ul>
    </div>
  </div>
</section>

<section id="publications" class="cv-sec cv-break-avoid">
  <h2>Publications & Preprints</h2>

  <ol class="pubs">
    {% assign pubs = site.data.pubs | sort: "year" | reverse %}
    {% for p in pubs %}
      <li class="pub-item">
        {% assign authors = p.authors | join: ", " | replace: "Eshbaugh, J.", "<strong>Eshbaugh, J.</strong>" %}
        {{ authors }}.
        <span class="pub-title">“{{ p.title }}.”</span>
        {% if p.venue_note %}<span class="pub-venue">{{ p.venue_note }}</span>{% endif %}
        {% if p.year %}{{ p.year }}.{% endif %}
        {% if p.doi or p.arxiv %}
          <span class="pub-links">
            {% if p.pdf %}<a href="{{ p.pdf }}">PDF</a>{% endif %}
            {% if p.arxiv %}{% if p.pdf %} · {% endif %}<a href="https://arxiv.org/abs/{{ p.arxiv }}">arXiv</a>{% endif %}
            {% if p.doi %}{% if p.pdf or p.arxiv %} · {% endif %}<a href="{{ p.doi }}">DOI</a>{% endif %}
          </span>
        {% endif %}
      </li>
    {% endfor %}
  </ol>
</section>

<section id="talks" class="cv-sec">
  <h2>Talks & Posters</h2>
  <ol class="talks">
    {% assign talks = site.data.talks | sort: "date" | reverse %}
    {% for t in talks %}
      <li class="talk-item">
        <span class="talk-title">“{{ t.title }}.”</span>
        {{ t.kind | capitalize }}, <em>{{ t.venue }}</em>, {{ t.city }}.
        {% if t.date %} {{ t.date | date: "%b %Y" }}.{% endif %}
        {% if t.publication %}
          {% assign pub = site.data.pubs | where: "id", t.publication | first %}
          {% if pub %}
            <span class="talk-related"> Related: <a href="{{ pub.doi | default: pub.arxiv }}">{{ pub.title }}</a>.</span>
          {% endif %}
        {% endif %}
      </li>
    {% endfor %}
  </ol>
</section>

<section id="awards" class="cv-sec">
  <h2>Honors & Awards</h2>
  <ul class="cv-list">
    <li>Marquis Scholarship, Lafayette College (2023).</li>
    <li>Dean’s List — F23, S24, F24, S25.</li>
  </ul>
</section>

<section id="skills" class="cv-sec">
  <h2>Skills</h2>
  <p><strong>Languages:</strong> Python, Java, JavaScript, C ·
     <strong>ML:</strong> PyTorch, TensorFlow, scikit-learn ·
     <strong>Tools:</strong> Git, VS Code, JetBrains, LaTeX</p>
</section>

<section id="service" class="cv-sec">
  <h2>Service</h2>
  <ul class="cv-list">
    <li>Audio/Visual Specialist — Hope Alliance Church (2021–Present).</li>
    <li>Audio/Visual Specialist — Lafayette DiscipleMakers CF (2023–Present).</li>
  </ul>
</section>

<footer class="cv-updated">
  Last updated {{ "now" | date: "%B %Y" }} · <a href="/uploads/Jackson%20Eshbaugh%20CV.pdf">Download PDF</a>
</footer>
