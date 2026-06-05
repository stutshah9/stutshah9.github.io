---
title: Multimodal Stock Forecasting
description: Probabilistic multimodal model with uncertainty calibration
tags:
  - machine-learning
  - nlp
  - forecasting
---

<div class="project-detail-hero">
  <p class="project-eyebrow">Machine Learning / NLP / Forecasting</p>
  <p class="project-hero-copy">A confidence-aware forecasting pipeline for next-day post-earnings stock returns, combining transcript, market, and social sentiment signals.</p>
  <div class="project-detail-meta">
    <span><strong>Focus</strong> Probabilistic forecasting</span>
    <span><strong>Signals</strong> Transcripts, indicators, sentiment</span>
    <span><strong>Modeling</strong> Cross-attention + conformal calibration</span>
  </div>
</div>

## Overview

Post-earnings markets are noisy, and I wanted a model that could communicate uncertainty instead of only returning a directional prediction. The project explores next-day return forecasting in a setting where confidence, calibration, and risk-aware interpretation matter as much as raw accuracy.

I built a multimodal pipeline that fuses earnings-call transcript features, financial indicators, and social sentiment through a cross-attention architecture. The workflow emphasized calibrated prediction intervals so model confidence could be measured and interpreted directly.

## Technical Work

- Encoded long earnings call transcripts with FinBERT using chunked text embeddings projected into a shared multimodal representation.
- Engineered structured features from earnings surprise, price momentum, implied volatility, Reddit sentiment, and message-volume signals.
- Implemented a PyTorch fusion model with multi-head attention across transcript, financial, and sentiment tokens.
- Trained quantile heads with pinball loss and applied conformalized quantile regression for 80%, 90%, and 95% prediction intervals.
- Evaluated multimodal and single-modality ablations using coverage, interval width, calibration error, MAE, RMSE, and directional accuracy.

## Outcome

- Treated uncertainty as a first-class model output rather than a post-processing detail.
- Used calibration analysis to distinguish useful confidence from brittle directional predictions.
- Built a comparison framework that made ablations and baseline performance easier to reason about.

## Links

- GitHub: [Stock-Return-Forecasting](https://github.com/stutshah9/Stock-Return-Forecasting)
