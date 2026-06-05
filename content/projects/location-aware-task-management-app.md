---
title: Location-Aware Task App
description: Android app with offline-first task workflows and location context
tags:
  - android
  - kotlin
  - mvvm
---

<div class="project-detail-hero">
  <p class="project-eyebrow">Mobile Engineering / Offline-first UX / Local Persistence</p>
  <p class="project-hero-copy">An Android task management app designed for responsive local workflows with location-aware task context.</p>
  <div class="project-detail-meta">
    <span><strong>Focus</strong> Offline-first task workflows</span>
    <span><strong>Signals</strong> Location context + local storage</span>
    <span><strong>Architecture</strong> MVVM + Room persistence</span>
  </div>
</div>

## Overview

Many mobile productivity apps assume reliable connectivity and treat location as secondary metadata. This project focuses on responsive task handling when connectivity is limited and makes location part of how tasks are organized and used.

I implemented an Android MVVM app with Room-based local persistence, lifecycle-aware state management, and task logic connected to geolocation context.

## Technical Work

- Built Android screens and task workflows using an MVVM architecture.
- Used Room for local persistence so core CRUD actions remain available offline.
- Managed state with LiveData and ViewModel for predictable UI updates.
- Connected task behavior to geolocation context to make location relevant to task organization.
- Designed the data flow for low-latency interactions without depending on backend round trips.

## Outcome

- Created a responsive offline-first mobile experience for task creation, updates, and review.
- Improved task relevance by incorporating location context into the workflow.
- Established a maintainable foundation for adding more context-aware task features.

## Links

- Report: [Location_Aware_Task_Management.pdf](/static/attachments/Location_Aware_Task_Management.pdf)
