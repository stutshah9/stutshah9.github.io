---
title: Multimodal Stock Forecasting
description: Probabilistic multimodal model with uncertainty calibration
tags:
  - machine-learning
  - nlp
  - forecasting
---

This project explores next-day post-earnings stock return forecasting in a setting where prediction confidence is as important as directional output. Market behavior after earnings calls is influenced by multiple interacting signals, and single-source approaches can look accurate in isolated cases while still producing unreliable confidence under distribution shifts. The goal here was to build a model that does more than output a number: it should also communicate how trustworthy that output is under varying market contexts.

I implemented a multimodal probabilistic pipeline that fuses earnings-call transcript features, financial indicators, and social sentiment through a cross-attention architecture designed for signal interaction rather than simple feature concatenation. The workflow included calibration-focused evaluation using ECE and conformal intervals so uncertainty could be measured directly and interpreted in decision-oriented terms. That made the project useful not only as a forecasting exercise, but also as a framework for evaluating confidence-aware behavior in event-driven financial modeling.

## Tech Stack

- Python
- Multimodal feature pipeline (text + numeric + sentiment)
- Cross-attention model architecture
- Probabilistic forecasting formulation
- ECE-based calibration analysis
- Conformal prediction intervals

## Links

- GitHub: [TODO - add repository link](https://github.com/TODO-stuti-shah/multimodal-stock-return-forecasting)
- Report: [TODO - add report link](https://example.com/TODO-multimodal-forecasting-report)
