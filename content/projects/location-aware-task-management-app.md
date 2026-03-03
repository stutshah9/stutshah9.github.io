---
title: Location-Aware Task App
description: Android app with offline-first task workflows and location context
tags:
  - android
  - kotlin
  - mvvm
---

This project started from a common weakness in mobile productivity apps: many assume reliable connectivity and treat location as secondary metadata rather than part of task execution behavior. For real users, that causes friction when network quality drops or when task relevance is strongly tied to where they are. I wanted the app to feel responsive in offline conditions and still make location meaningful in day-to-day usage rather than as a decorative feature.

I implemented an Android MVVM app with Room-based local persistence, lifecycle-aware state management through LiveData and ViewModel, and task logic connected to geolocation context. The architecture was designed for predictable interaction speed and clean data flow so core CRUD actions remain stable even without backend round trips. This gave the project a practical product feel: low-latency behavior, maintainable structure, and a clear path for adding more context-aware workflows in future iterations.

## Tech Stack

- Kotlin
- Android SDK
- MVVM architecture
- Room (local persistence)
- LiveData and ViewModel
- Geolocation APIs

## Links

<!-- - GitHub: [TODO - add repository link](https://code.vt.edu/schamilton/location-aware-tasks) -->
- Report: [Location_Aware_Task_Management.pdf](/static/attachments/Location_Aware_Task_Management.pdf)
