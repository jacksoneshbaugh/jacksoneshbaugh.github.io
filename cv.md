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
    description: Learn about the teaching opportunities I've had.
---

<p class="cv-sub">Jackson Eshbaugh — Computer Science & French, Lafayette College ’27</p>
<p class="cv-contact">
  <a href="mailto:eshbaugj@lafayette.edu">eshbaugj@lafayette.edu</a> ·
  <a href="https://jacksoneshbaugh.github.io">jacksoneshbaugh.github.io</a> ·
  <a href="https://orcid.org/0009-0009-1806-2166">ORCID</a><br>
  <span>+1&nbsp;484.484.3326 · Bethlehem, PA, USA</span>
</p>

<nav class="cv-toc" aria-label="Contents">
  <h2>Contents</h2>
  <ol>
    <li><a href="#education">Education</a></li>
    <li><a href="#positions">Research Positions</a></li>
    <li><a href="#teaching">Teaching Positions</a></li>
    <li><a href="#publications">Publications &amp; Preprints</a></li>
    <li><a href="#talks">Talks &amp; Posters</a></li>
    <li><a href="#awards">Honors &amp; Awards</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#service">Service</a></li>
    <li><a href="#certifications">Certifications</a></li>
    <li><a href="#additional">Additional Information</a></li>
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
  <h2>Research Positions</h2>

  <div class="cv-row">
    <div class="cv-left">
      <strong>Independent Research — Neural Network Interpretability</strong><br>
      <span class="cv-meta">Lafayette College — Apr 2025–Present</span>
    </div>
    <div class="cv-right">
      <ul class="cv-bullets">
        <li>Investigate when linear surrogate models fail to faithfully represent neural networks.</li>
        <li>Design experiments comparing surrogate fidelity with task accuracy across regression tasks.</li>
        <li>Proposed the λ-score as a diagnostic metric and implemented a full ML pipeline.</li>
      </ul>
    </div>
  </div>
  <div class="cv-spacer"></div>

  <div class="cv-row">
    <div class="cv-left">
      <strong>EXCEL Scholar — Building Energy &amp; Generative AI</strong><br>
      <span class="cv-meta">Lafayette College — Jun 2025–Present</span>
    </div>
    <div class="cv-right">
      <ul class="cv-bullets">
        <li>Develop neural-network approaches to recommend energy-efficiency retrofits at neighborhood scale.</li>
        <li>Use EnergyPlus simulations and generative AI for urban building energy modeling.</li>
        <li>Co-author on the “Synthetic Homes” manuscript and related poster presentations.</li>
      </ul>
    </div>
  </div>
  <div class="cv-spacer"></div>

  <div class="cv-row">
    <div class="cv-left">
      <strong>Honors Thesis Research — Computational Linguistics</strong><br>
      <span class="cv-meta">Lafayette College — Feb 2025–Present</span>
    </div>
    <div class="cv-right">
      <ul class="cv-bullets">
        <li>Develop FRIdiom, an annotated corpus for detecting French idiomatic expressions.</li>
        <li>Apply back-translation and neural methods to figurative language in multilingual MT.</li>
        <li>Use interpretability techniques to probe language model representations.</li>
      </ul>
    </div>
  </div>
  <div class="cv-spacer"></div>

  <div class="cv-row">
    <div class="cv-left">
      <strong>ACL Manuscript Review Collaborator</strong><br>
      <span class="cv-meta">Lafayette College — Oct 2025–Present</span>
    </div>
    <div class="cv-right">
      <ul class="cv-bullets">
        <li>Serve as a secondary reviewer with Dr. Sofia Serrano for ACL Rolling Review submissions.</li>
        <li>Evaluate research methodology, experimental design, and the validity of scientific claims.</li>
      </ul>
    </div>
  </div>
  <div class="cv-spacer"></div>
</section>

<section id="teaching" class="cv-sec">
  <h2>Teaching Positions</h2>

  <div class="cv-row">
    <div class="cv-left">
      <strong>Teaching Assistant</strong><br>
      <span class="cv-meta">Dept. of Computer Science — Aug 2024–Present</span>
    </div>
    <div class="cv-right">
      <ul class="cv-bullets">
        <li>Assist professors during class meetings and lead review sessions and debugging labs.</li>
        <li>Praised by students for clear explanations and care for their learning.</li>
        <li>See the <a href="/teaching/">teaching page</a> for materials and sample activities.</li>
      </ul>
    </div>
  </div>
  <div class="cv-spacer"></div>

  <div class="cv-row">
    <div class="cv-left">
      <strong>Mentored Study Group Leader</strong><br>
      <span class="cv-meta">Academic Resource Hub — Aug 2024–Present</span>
    </div>
    <div class="cv-right">
      <ul class="cv-bullets">
        <li>Lead two weekly review sessions covering course content for introductory CS.</li>
        <li>Create worksheets, slides, and practice problems to support student learning.</li>
      </ul>
    </div>
  </div>
  <div class="cv-spacer"></div>
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
  <p><strong>Programming:</strong> Python, Java, JavaScript, C, Standard ML ·
     <strong>ML:</strong> PyTorch, TensorFlow, NumPy ·
     <strong>Tools:</strong> Git, VS Code, JetBrains IDEs, LaTeX</p>
</section>

<section id="service" class="cv-sec">
  <h2>Service</h2>
  <ul class="cv-list">
    <li><strong>Audio/Visual Specialist</strong> — Hope Alliance Church (Jul 2021–Present). Design weekly worship slides and sermon visuals; configure live stream and projection systems; troubleshoot AV issues; and reset the worship space after services.</li>
    <li><strong>Audio/Visual Specialist</strong> — Lafayette DiscipleMakers Christian Fellowship (Sep 2023–Present). Run slides and AV for weekly meetings and events, supporting worship through technical service.</li>
  </ul>
</section>

<section id="certifications" class="cv-sec">
  <h2>Certifications</h2>
  <ul class="cv-list">
    <li>Deep Learning Specialization (Jun 2025).</li>
  </ul>
</section>

<section id="additional" class="cv-sec">
  <h2>Additional Information</h2>
  <p><strong>Languages Spoken:</strong> English (native); French (fluent, professional competency).</p>
  <p><strong>Interests:</strong> Jazz vocals, trombone, piano, and composition; photography and photo editing; videography and video editing.</p>
</section>

<footer class="cv-updated">
  Last updated {{ "now" | date: "%B %Y" }} · <a href="/uploads/Jackson%20Eshbaugh%20CV.pdf">Download PDF</a>
</footer>
