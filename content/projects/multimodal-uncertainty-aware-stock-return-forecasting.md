---
title: Multimodal Stock Forecasting
description: Probabilistic multimodal model with uncertainty calibration
tags:
  - machine-learning
  - nlp
  - forecasting
---

Post-earnings markets are noisy, and I wanted a model that could say how sure it was, not just a direction. This project explores next-day post-earnings stock return forecasting in a setting where prediction confidence is as important as directional output. Market behavior after earnings calls is influenced by multiple interacting signals, and single-source approaches can look accurate in isolated cases while still producing unreliable confidence under distribution shifts.

I built a multimodal probabilistic pipeline that fuses earnings-call transcript features, financial indicators, and social sentiment through a cross-attention architecture designed for signal interaction rather than simple feature concatenation. The workflow emphasized calibration with ECE and conformal intervals so uncertainty could be measured directly and interpreted in decision-oriented terms. That made the project useful not only as a forecasting exercise, but also as a framework for evaluating confidence-aware behavior in event-driven financial modeling.

<div class="recipe-meta">
  <span><strong>Yield</strong> Confidence-aware forecasts</span>
  <span><strong>Primary signals</strong> Transcripts, indicators, sentiment</span>
  <span><strong>Technique</strong> Cross-attention + conformal calibration</span>
</div>

## Why I Cooked This

I wanted a forecasting system that treats uncertainty as a first-class output. In event-driven finance, a well-calibrated "I am not sure" is more useful than a confident but fragile prediction.

## Method

- Encoded long earnings call transcripts with FinBERT using 256-512 token chunks, cached frozen embeddings, and projected text into a shared multimodal embedding space.
- Engineered structured inputs from earnings surprise, price momentum, implied volatility, and Reddit sentiment using TextBlob polarity and log message-volume features.
- Implemented a PyTorch cross-modal fusion model with multi-head attention across transcript, financial, and sentiment tokens and quantile heads trained with pinball loss.
- Applied conformalized quantile regression with global, event-conditioned, and modality-disagreement-normalized calibration to generate 80%, 90%, and 95% prediction intervals.
- Evaluated multimodal and single-modality ablations against same-ticker historical baselines using coverage, interval width, calibration error, MAE, RMSE, and directional accuracy.

## Tasting Notes

- Calibration changed the conversation from accuracy to decision risk.
- Cross-attention helped align signals that were noisy on their own.
- Strong baselines and ablations kept the multimodal story honest.

## Ingredients

- Python
- Multimodal feature pipeline (text + numeric + sentiment)
- Cross-attention model architecture
- Probabilistic forecasting formulation
- ECE-based calibration analysis
- Conformal prediction intervals

## Serve With

- GitHub: [Stock-Return-Forecasting](https://github.com/stutshah9/Stock-Return-Forecasting)
<!-- - Report: [TODO - add report link](https://example.com/TODO-multimodal-forecasting-report) -->
