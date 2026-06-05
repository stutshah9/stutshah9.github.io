---
title: "HybridDiff AR"
description: Hybrid generative modeling pipeline with faster inference and strong output quality
tags:
  - generative-ai
  - diffusion
  - autoregressive
---

<div class="project-detail-hero">
  <p class="project-eyebrow">Generative AI / Diffusion Models / Transformer Refinement</p>
  <p class="project-hero-copy">A hybrid image generation pipeline that combines diffusion-based coarse generation with autoregressive refinement for faster experimentation.</p>
  <div class="project-detail-meta">
    <span><strong>Focus</strong> Fast image generation</span>
    <span><strong>Models</strong> DDPM + transformer refinement</span>
    <span><strong>Result</strong> 250x faster inference benchmark</span>
  </div>
</div>

## Overview

Diffusion models can produce strong visual outputs, but iterative denoising makes inference expensive when many experiments need to be evaluated quickly. HybridDiff AR explores a faster design that preserves quality while making research iteration more practical.

The pipeline combines a 33M-parameter DDPM stage with transformer-based autoregressive refinement, allowing coarse structure and fine detail to be handled by complementary model components.

## Technical Work

- Implemented a DDPM-based generation stage for coarse image synthesis.
- Added transformer refinement to improve detail and reduce reliance on long diffusion sampling loops.
- Built repeatable training and evaluation workflows on CelebA 64x64.
- Compared output quality and runtime behavior across model checkpoints.
- Documented benchmark behavior, including a 250x faster inference result in the project setting.

## Outcome

- Preserved the quality benefits of diffusion while improving runtime behavior.
- Made image-generation experimentation faster and easier to repeat.
- Created a clear comparison setup for future architecture and checkpoint evaluation.

## Links

- GitHub: [diffusion-ar-hybrid](https://github.com/Rituraj003/diffusion-ar-hybrid)
- Report: [Diffusion_Autoregression_Hybrid_Model_for_Image_Generation.pdf](/static/attachments/Diffusion_Autoregression_Hybrid_Model_for_Image_Generation.pdf)
