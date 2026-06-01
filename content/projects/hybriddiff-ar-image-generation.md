---
title: "HybridDiff AR"
description: Hybrid generative modeling pipeline with faster inference and strong output quality
tags:
  - generative-ai
  - diffusion
  - autoregressive
---

## Why I Cooked This

HybridDiff AR was built around a practical bottleneck in modern image generation: diffusion models can produce strong outputs, but iterative denoising steps make inference expensive when you need to evaluate many runs quickly. In research-style workflows, that latency slows every cycle of tuning, from architecture experiments to checkpoint comparisons, and makes it harder to test ideas at speed. I wanted a design that kept the visual quality benefits of diffusion while reducing end-to-end generation time enough to support rapid iteration and repeated evaluation.

## Method

The resulting pipeline combines a 33M-parameter DDPM stage with transformer-based autoregressive refinement, so coarse structure and fine detail are handled by components that are good at different parts of the generation process. I set up the training and evaluation flow to be repeatable on CelebA 64x64, with clear comparison checkpoints so changes could be validated rather than guessed. This architecture preserved output quality while dramatically improving runtime behavior, including **250x faster inference** in the project benchmark context, and made experimentation far more practical for future model work.

<div class="recipe-meta">
  <span><strong>Yield</strong> Fast, high-quality image samples</span>
  <span><strong>Primary signals</strong> Diffusion + autoregressive refinement</span>
  <span><strong>Technique</strong> DDPM + transformer pipeline</span>
</div>

## Ingredients

- Python
- PyTorch
- DDPM (diffusion model)
- Transformer refinement module
- GPU-based training and inference workflow
- CelebA 64x64 evaluation setup

## Serve With

- GitHub: [diffusion-ar-hybrid](https://github.com/Rituraj003/diffusion-ar-hybrid)
- Report: [Diffusion_Autoregression_Hybrid_Model_for_Image_Generation.pdf](/static/attachments/Diffusion_Autoregression_Hybrid_Model_for_Image_Generation.pdf)
