---
title: CS Source JobHub
description: Backend services and API platform for role-based membership workflows
tags:
  - backend
  - flask
  - mysql
---

## Why I Cooked This

CS Source JobHub was built as a centralized platform to improve how employers connect with Virginia Tech computer science students. Instead of relying on scattered communication channels and manual coordination, the platform brings key workflows into one interface where employers can manage contacts, register for events, and send student announcements. The goal was to make employer engagement clearer and faster while improving the experience for both company representatives and students.

## Method

I worked on the platform update that introduced contact management, event signup integration, student announcement creation, and an improved employer login experience. The implementation used a Node.js, Express, and Flask-based approach to support flexible frontend/backend development and reliable CRUD operations on user and contact data. Team development was split across frontend, backend, and authentication/login responsibilities, and user testing feedback highlighted strong load performance, smooth navigation, and an intuitive workflow for common employer actions.

<div class="recipe-meta">
  <span><strong>Yield</strong> Employer engagement workflows</span>
  <span><strong>Primary signals</strong> Contacts, memberships, events</span>
  <span><strong>Technique</strong> REST APIs + relational modeling</span>
</div>

## Ingredients

- Python
- Node.js
- Express
- Flask
- MySQL
- REST API architecture
- Authentication and authorization flows
- RBAC and validation rules

## Serve With

- Report: [CS_Source_Jobhub.pdf](/static/attachments/CS_Source_Jobhub.pdf)
