# Image-to-Video (I2V) AI Research — March 2026

## 1. Best Open-Source I2V Models

| Model | Params | Highlights | Min VRAM |
|-------|--------|-----------|----------|
| **Wan 2.2 I2V-A14B** | 14B (MoE) | Best overall quality; MoE architecture (high-noise + low-noise experts); improved motion, semantics, aesthetics over 2.1 | ~24GB+ |
| **Wan 2.1 I2V-14B-720P-Turbo** | 14B | 30% faster than base Wan 2.1; TeaCache acceleration; great quality/speed balance | ~24GB+ |
| **HunyuanVideo I2V** | 8.3B (v1.5) | Cinematic visuals; coherent motion; runs on 14GB VRAM with offloading | 14GB |
| **LTX-Video** | — | Fastest — real-time 30fps at 1216×704; supports T2V, I2V, V2V | 12GB |
| **SkyReels V1** | — | Fine-tuned on 10M+ film/TV clips; 33 expressions, 400+ movement combos; human-centric | ~24GB+ |
| **CogVideoX-5B** | 5B | Lightweight; 6-sec clips at 720×480; good for short-form | ~12GB |
| **Mochi 1** | — | Strong prompt alignment; Apache 2.0 license | ~24GB |

**Quick picks:**
- Best quality → Wan 2.2
- Fastest → LTX-Video / Wan 2.1 Turbo
- Low VRAM → LTX-Video (12GB) or HunyuanVideo (14GB)
- Best license → Mochi 1 (Apache 2.0)
- Human/character focus → SkyReels V1

All models available on Hugging Face and runnable via ComfyUI.

---

## 2. Running I2V Locally on Mac M4

### Recommended Setup: ComfyUI + Wan 2.2 GGUF

GGUF format is essential for Apple Silicon — the default diffusion model format doesn't work natively on Mac. GGUF reduces memory usage without significant quality loss.

**Steps:**
1. Install ComfyUI (via Git or Homebrew)
2. Install ComfyUI-GGUF custom node (by City96)
3. Download models:
   - `wan2.2_i2v_high_noise_14B_Q8_0.gguf` → `ComfyUI/models/unet/`
   - `wan2.2_i2v_low_noise_14B_Q8_0.gguf` → `ComfyUI/models/unet/`
   - `umt5_xxl_fp8_e4m3fn_scaled.safetensors` → `ComfyUI/models/text_encoders/`
   - Wan 2.1 VAE → `ComfyUI/models/vae/`
4. Use the I2V GGUF workflow; assign HighNoise to the first Unet Loader, LowNoise to the second

**Hardware requirements:**
- 32GB+ unified memory recommended for 14B model
- Wan 2.2 5B variant works on 8GB+ with ComfyUI native offloading
- Start at 320×320 to verify it runs, then scale up

**Known issues:**
- Slower than NVIDIA GPUs (significantly)
- KSampler may stall at high resolutions — reduce resolution/frames first
- M4 Max users report hangs at ~53% on KSampler — memory-related

**Alternative Mac options:**
- [LTX-Video for Mac](https://github.com/james-see/ltx-video-mac) — native macOS app optimized for Apple Silicon
- Draw Things — good for image gen, limited video support

---

## 3. Cheapest I2V API/Hosting Costs

### API Pricing Comparison

| Provider / Model | Cost | Format |
|-----------------|------|--------|
| **Wan 2.1 Turbo via SiliconFlow** | **$0.21/video** | Flat rate (~5 sec) |
| **Wan 2.2 via SiliconFlow** | $0.29/video | Flat rate (~5 sec) |
| **Wan via fal.ai** | $0.10/sec (~$0.50/5sec) | Per-second |
| **Hailuo 2.3 Pro via fal.ai** | $0.49/video | Flat rate |
| **Kling** | ~$0.07/sec (~$0.70/10sec) | Per-second |
| **Kling 3 Pro** | $0.224–$0.28/sec | Per-second |
| **Sora 2 via fal.ai** | $0.30–$0.50/sec | Per-second (premium) |
| **Renderful** | $0.13–$3.20/gen | Flat rate, 144+ models |

### Self-Hosting (Cheapest at Scale)

Running Wan on an NVIDIA A100 via cloud: ~$1–2/hour → 20–30 clips/hour → **~$0.05–0.10/video**

### Bottom Line

- **Lowest API cost**: SiliconFlow Wan 2.1 Turbo at **$0.21/video**
- **Lowest self-hosted cost**: ~$0.05–0.10/video on A100 cloud GPU
- **Best aggregator platforms**: fal.ai (cheapest), Replicate (better docs), Renderful (flat pricing, no minimums)

---

## Sources

- [Hyperstack: 7 Best Open Source Video Generation Models 2026](https://www.hyperstack.cloud/blog/case-study/best-open-source-video-generation-models)
- [Pixazo: Best Open Source AI Video Generation Models 2026](https://www.pixazo.ai/blog/best-open-source-ai-video-generation-models)
- [SiliconFlow: Top Open Source Video Generation Models](https://www.siliconflow.com/articles/en/best-open-source-video-generation-models-2025)
- [SiliconFlow: Cheapest Video & Multimodal AI Models 2026](https://www.siliconflow.com/articles/en/cheapest-video-multimodal-models)
- [ComfyUI + Wan 2.2 I2V Guide](https://papayabytes.substack.com/p/guide-comfyui-and-wan-22-image-to)
- [Wan 2.2 I2V with GGUF in ComfyUI](https://www.kombitz.com/2025/08/06/how-to-use-wan-2-2-image-to-video-with-gguf-in-comfyui/)
- [LTX-Video Mac (GitHub)](https://github.com/james-see/ltx-video-mac)
- [fal.ai Pricing](https://fal.ai/pricing)
- [AI API Pricing Comparison 2026 (TeamDay)](https://www.teamday.ai/blog/ai-api-pricing-comparison-2026)
- [Kevin Gabeci: Cost of Every AI Video API (Medium)](https://kgabeci.medium.com/i-compared-the-cost-of-every-ai-video-api-heres-what-each-clip-actually-costs-3984ef6553e9)
- [Renderful: AI API Pricing Comparison](https://renderful.ai/blog/ai-api-pricing-comparison)
