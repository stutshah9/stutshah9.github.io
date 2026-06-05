---
title: YOLOv8 Shelf Detection
description: End-to-end shelf monitoring using object detection
tags:
  - computer-vision
  - yolo
  - ml
---

<div class="project-detail-hero">
  <p class="project-eyebrow">Computer Vision / Object Detection / Retail Analytics</p>
  <p class="project-hero-copy">An object detection pipeline for shelf monitoring that identifies products and empty shelf spaces to support planogram compliance workflows.</p>
  <div class="project-detail-meta">
    <span><strong>Focus</strong> Shelf compliance</span>
    <span><strong>Signals</strong> Shelf imagery + planograms</span>
    <span><strong>Modeling</strong> YOLOv8 detection pipeline</span>
  </div>
</div>

## Overview

Many shelf analytics workflows identify products but miss empty shelf regions, which are often the more actionable signal for restocking and compliance. This project treats product presence and empty shelf space as first-class detection outputs.

I built an end-to-end YOLOv8 workflow with curated datasets, class-aware training, and inference outputs designed for shelf-level review rather than only bounding-box counts.

## Technical Work

- Curated and prepared shelf imagery for object detection training and validation.
- Configured YOLOv8 training for product and empty-space detection classes.
- Built an inference flow that formats detections for shelf-level compliance review.
- Structured the pipeline so additional categories and store layouts can be added through retraining.
- Reviewed visual outputs to validate detection quality and identify failure cases.

## Outcome

- Produced a more actionable shelf-monitoring workflow by modeling empty spaces explicitly.
- Reduced the need for manual review when identifying planogram gaps.
- Created a foundation for expanding detection coverage across additional retail categories.

## Links

- GitHub: [out-of-stock-detection](https://github.com/yoonlee201/out-of-stock-detection)
