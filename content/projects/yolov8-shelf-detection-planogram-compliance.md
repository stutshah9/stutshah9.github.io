---
title: YOLOv8 Shelf Detection
description: End-to-end shelf monitoring using object detection
tags:
  - computer-vision
  - yolo
  - ml
---

The core problem in this project was that many shelf analytics pipelines identify products but ignore empty shelf zones, which are often the more operationally important signal for restocking and compliance checks. If empty space is not modeled explicitly, downstream teams still need manual review to understand planogram gaps. I designed this project to bridge that gap by treating product presence and shelf emptiness as first-class outputs in the same detection workflow.

I built an end-to-end YOLOv8 pipeline with curated public datasets, class-aware training setup, and inference outputs formatted for shelf-level review rather than only bounding-box counts. The system was structured to support retraining as layout patterns or image distributions change, so it can evolve instead of becoming a one-time demo model. This made the output more actionable for compliance and restocking contexts and provided a cleaner foundation for expanding to additional categories or store conditions.

## Tech Stack

- Python
- YOLOv8
- Computer vision training/inference pipeline
- Dataset curation and label preparation
- Detection post-processing for shelf-level outputs
- Visual output review for compliance workflows

## Links

<!-- - GitHub: [out-of-stock-detection](https://github.com/yoonlee201/out-of-stock-detection)
- Report: [TODO - add report link](https://example.com/TODO-yolov8-report) -->
