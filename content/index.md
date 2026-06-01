---
title: Home
description: Personal portfolio for Stuti Shah
cssclasses:
  - scroll-home
---

<div class="cookbook-hero recipe-section" id="hero">
  <p class="kicker">Stuti Shah</p>
  <h1>Backend engineer building calm, production-ready systems with data and ML.</h1>
  <p class="lead">This homepage now works as a single scrolling portfolio: each section introduces a different part of my work, from experience and projects to technical strengths and how to reach me.</p>
  <div class="quick-links">
    <a href="mailto:stutishah2706@gmail.com">Email</a>
    <a href="https://www.linkedin.com/in/stuti-shah9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://github.com/stutshah9" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="/resumes">Resumes</a>
  </div>
  <div class="recipe-meta hero-stats">
    <span><strong>Current</strong>Master of Engineering in Computer Science, Virginia Tech</span>
    <span><strong>Focus</strong>Backend systems, ML integration, and developer tooling</span>
    <span><strong>Looking For</strong>Software engineering roles with strong product impact</span>
  </div>
  <div class="hero-notes">
    <span class="recipe-pill">Backend + APIs</span>
    <span class="recipe-pill">ML with calibration</span>
    <span class="recipe-pill">Kubernetes + GitOps</span>
    <span class="recipe-pill">Data-driven products</span>
  </div>
  <nav class="cookbook-nav">
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#extras">Extracurriculars</a>
    <a href="#contact">Contact</a>
  </nav>
  <a class="scroll-cue" href="#about">Discover more</a>
</div>

<section id="about" class="recipe-section recipe-card">
  <p class="section-kicker">About</p>
  <h2>About</h2>
  <div class="profile-grid">
    <div class="profile-row">
      <span>Focus</span>
      <strong>Backend systems, ML integration, and reliable delivery</strong>
    </div>
    <div class="profile-row">
      <span>Education</span>
      <strong>Virginia Tech, Computer Science (BS + MEng)</strong>
    </div>
    <div class="profile-row">
      <span>Now</span>
      <strong>Seeking software engineering roles with product impact</strong>
    </div>
    <div class="profile-row">
      <span>Interests</span>
      <strong>Applied ML, uncertainty-aware systems, cooking, badminton</strong>
    </div>
  </div>
  <p>I build backend systems and ML-enabled products that make messy signals usable. I like work where an API, a model, and a deployment pipeline all need to line up to deliver a reliable outcome.</p>
  <p>At Volvo Group I focused on distributed services and deployment automation, and I care a lot about reducing manual work and making releases predictable. I have also worked on AI-assisted testing and mobile product quality, which shaped how I think about reliability, fast feedback loops, and user-facing correctness.</p>
</section>

<section id="education" class="recipe-section recipe-card">
  <p class="section-kicker">Education</p>
  <h2>Education</h2>
  <div class="edu-grid">
    <div class="edu-card">
      <h3>Virginia Tech</h3>
      <p>Master of Engineering, Computer Science</p>
      <p><strong>Expected:</strong> May 2026</p>
    </div>
    <div class="edu-card">
      <h3>Virginia Tech</h3>
      <p>Bachelor of Science, Computer Science</p>
      <p><strong>Completed:</strong> May 2025</p>
    </div>
  </div>
</section>

<section id="experience" class="recipe-section recipe-card">
  <p class="section-kicker">Experience</p>
  <h2>Experience</h2>
  <div class="timeline">
    <div class="timeline-item">
      <p class="timeline-role"><strong>Software Engineering Intern</strong>, Volvo Group</p>
      <p class="timeline-meta">Greensboro, NC | May 2025 - Aug 2025</p>
      <ul>
        <li>Built distributed web applications using Python, Flask, PostgreSQL, and Kubernetes, and standardized deployment through GitOps with Argo CD so releases stayed reproducible and predictable.</li>
        <li>Designed and deployed automated engineering services that cut workflow execution from 4 hours to under 6 minutes, directly supporting $176,980 in annual operational savings and removing repetitive manual handoffs.</li>
        <li>Developed secure REST APIs to integrate high-volume vehicle test data with analytics workflows, enabling sub-second querying, stronger traceability across datasets, and faster turnaround for engineering investigations.</li>
        <li>Integrated machine learning models into product-facing workflows, including Random Forest-based component performance and emissions prediction, so teams could evaluate outcomes earlier from operational dashboards.</li>
      </ul>
    </div>
    <div class="timeline-item">
      <p class="timeline-role"><strong>AI Intern</strong>, AquaOrange</p>
      <p class="timeline-meta">Bangkok, Thailand | Jun 2024 - Aug 2024</p>
      <ul>
        <li>Automated AI-driven test case generation and execution for enterprise CRM systems, improving software quality metrics by 20% while increasing coverage on flows that were previously under-tested.</li>
        <li>Applied AI-powered testing tools across frontend and backend workflows to reduce regression risk and detect behavior drift before production rollouts.</li>
        <li>Integrated automated testing into CI pipelines to shorten feedback loops, surface failures earlier in development, and improve release reliability across distributed deployments.</li>
      </ul>
    </div>
    <div class="timeline-item">
      <p class="timeline-role"><strong>Solutions Associate</strong>, HERE! Wireless USA</p>
      <p class="timeline-meta">Dallas, TX | Jun 2023 - Jul 2024</p>
      <ul>
        <li>Ran structured alpha testing and root-cause analysis for Android and iOS applications, improving parental-control feature stability and reducing critical crash reports by 35% through tighter issue triage loops.</li>
        <li>Worked with product managers and engineers to convert customer feedback into actionable engineering requirements, which accelerated iteration cycles and improved alignment between release scope and user needs.</li>
        <li>Analyzed pricing, usage, and behavior data to inform product decisions, identify adoption bottlenecks, and support feature prioritization aimed at lowering churn risk.</li>
      </ul>
    </div>
    <div class="timeline-item">
      <p class="timeline-role"><strong>CS Undergraduate Teaching Assistant</strong>, Virginia Tech</p>
      <p class="timeline-meta">Aug 2024 - May 2025</p>
      <ul>
        <li>Mentored 200+ students on low-level systems topics, including processor architecture, memory behavior, and performance fundamentals, and helped translate complex concepts into practical debugging and implementation strategies.</li>
      </ul>
    </div>
  </div>
</section>

<section id="projects" class="recipe-section recipe-card">
  <p class="section-kicker">Projects</p>
  <h2>Projects</h2>
  <div class="project-grid">
    <article class="project-card">
      <p class="project-card-title"><a class="project-card-link" href="/projects/multimodal-uncertainty-aware-stock-return-forecasting">Multimodal Uncertainty-Aware Stock Return Forecasting</a></p>
      <p class="project-card-desc">Forecasting system that treats confidence as a first-class output.</p>
      <div class="tag-row">
        <span class="tag">ML</span><span class="tag">NLP</span><span class="tag">Calibration</span><span class="tag">Cross-Attention</span>
      </div>
    </article>
    <article class="project-card">
      <p class="project-card-title"><a class="project-card-link" href="/projects/yolov8-shelf-detection-planogram-compliance">YOLOv8 Shelf Detection</a></p>
      <p class="project-card-desc">Computer vision pipeline that spots both products and empty shelves.</p>
      <div class="tag-row">
        <span class="tag">Vision</span><span class="tag">YOLOv8</span><span class="tag">Python</span>
      </div>
    </article>
    <article class="project-card">
      <p class="project-card-title"><a class="project-card-link" href="/projects/hybriddiff-ar-image-generation">HybridDiff AR</a></p>
      <p class="project-card-desc">Hybrid diffusion pipeline with faster inference and strong quality.</p>
      <div class="tag-row">
        <span class="tag">Generative AI</span><span class="tag">Diffusion</span><span class="tag">Transformer</span>
      </div>
    </article>
    <article class="project-card">
      <p class="project-card-title"><a class="project-card-link" href="/projects/location-aware-task-management-app">Location-Aware Task App</a></p>
      <p class="project-card-desc">Offline-first Android app with location-aware task handling.</p>
      <div class="tag-row">
        <span class="tag">Android</span><span class="tag">Kotlin</span><span class="tag">MVVM</span>
      </div>
    </article>
    <article class="project-card">
      <p class="project-card-title"><a class="project-card-link" href="/projects/cs-source-jobhub">CS Source JobHub</a></p>
      <p class="project-card-desc">Backend services for role-based membership workflows.</p>
      <div class="tag-row">
        <span class="tag">Flask</span><span class="tag">MySQL</span><span class="tag">RBAC</span>
      </div>
    </article>
  </div>
</section>

<section id="skills" class="recipe-section recipe-card">
  <p class="section-kicker">Skills</p>
  <h2>Skills</h2>
  <div class="pantry-grid">
    <div class="pantry-item">
      <h3>Backend + APIs</h3>
      <p>Python, Flask, REST APIs, SQLAlchemy, and clean data modeling.</p>
    </div>
    <div class="pantry-item">
      <h3>Data + ML</h3>
      <p>PyTorch, scikit-learn, calibration workflows, and practical evaluation.</p>
    </div>
    <div class="pantry-item">
      <h3>Cloud + Delivery</h3>
      <p>Docker, Kubernetes, GitOps with Argo CD, and reproducible environments.</p>
    </div>
    <div class="pantry-item">
      <h3>Analytics</h3>
      <p>PostgreSQL, Spark, dashboards in Power BI, and KPI-driven storytelling.</p>
    </div>
  </div>
</section>

<section id="extras" class="recipe-section recipe-card">
  <p class="section-kicker">Beyond Work</p>
  <h2>Extracurriculars</h2>
  <div class="extras-grid">
    <div class="extras-card">
      <h3>Division I Badminton Athlete</h3>
      <p>Singles runner-up in Division I collegiate competition, with multiple team championship finishes and nationals qualification.</p>
    </div>
    <div class="extras-card">
      <h3>Director of Finance, CS Careers @ VT</h3>
      <p>Managed budgeting and planning to support events, career initiatives, and student engagement activities.</p>
    </div>
  </div>
</section>

<section id="contact" class="recipe-section recipe-card">
  <p class="section-kicker">Contact</p>
  <h2>Get In Touch</h2>
  <p>If you want to talk about backend systems, ML integration, or collaboration, I would love to connect.</p>
  <div class="quick-links">
    <a href="mailto:stutishah2706@gmail.com">Email</a>
    <a href="https://www.linkedin.com/in/stuti-shah9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="/resumes">Resumes</a>
  </div>
</section>
