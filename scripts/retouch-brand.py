#!/usr/bin/env python3
"""Knock white studio boxes off the real Rubicon logo and fleet photos."""

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PHOTOS = ROOT / "public" / "rubicon-brand-photos"


def punch_logo(src: Path, dests: list[Path]) -> tuple[int, int]:
    im = Image.open(src).convert("RGBA")
    arr = np.array(im)
    rgb = arr[:, :, :3].astype(np.float32)
    luma = 0.299 * rgb[:, :, 0] + 0.587 * rgb[:, :, 1] + 0.114 * rgb[:, :, 2]
    sat = rgb.max(axis=2) - rgb.min(axis=2)
    white = (luma > 238) & (sat < 22)
    dark = ~white
    ys, xs = np.where(dark)
    if len(xs) < 100:
        raise SystemExit(f"Could not find badge pixels in {src}")
    cy = float(ys.mean())
    cx = float(xs.mean())
    r = float(np.percentile(np.sqrt((ys - cy) ** 2 + (xs - cx) ** 2), 99.6))
    r += 2.0
    h, w = arr.shape[:2]
    yy, xx = np.ogrid[:h, :w]
    dist = np.sqrt((yy - cy) ** 2 + (xx - cx) ** 2)
    alpha = np.clip((r + 1.2 - dist) / 2.4, 0, 1)
    arr[:, :, 3] = (alpha * 255).astype(np.uint8)
    ys2, xs2 = np.where(arr[:, :, 3] > 8)
    pad = 4
    box = (
        max(0, int(xs2.min()) - pad),
        max(0, int(ys2.min()) - pad),
        min(w, int(xs2.max()) + pad + 1),
        min(h, int(ys2.max()) + pad + 1),
    )
    out = Image.fromarray(arr).crop(box)
    out = out.convert("RGBA")
    for dest in dests:
        dest.parent.mkdir(parents=True, exist_ok=True)
        out.save(dest, format="PNG", optimize=True)
        print(f"logo -> {dest} {out.size} mode={out.mode}")
    return out.size


def vehicle_alpha(rgb: np.ndarray) -> np.ndarray:
    luma = 0.299 * rgb[:, :, 0] + 0.587 * rgb[:, :, 1] + 0.114 * rgb[:, :, 2]
    sat = rgb.max(axis=2) - rgb.min(axis=2)
    bg = (luma > 232) & (sat < 20)
    keep = ~bg
    # Feather
    from PIL import ImageFilter

    mask = Image.fromarray((keep.astype(np.uint8) * 255), mode="L")
    mask = mask.filter(ImageFilter.GaussianBlur(radius=1.6))
    a = np.array(mask).astype(np.float32) / 255.0
    a = np.clip((a - 0.08) / 0.84, 0, 1)
    return a


def asphalt(h: int, w: int) -> np.ndarray:
    yy = np.linspace(0, 1, h, dtype=np.float32)[:, None, None]
    xx = np.linspace(0, 1, w, dtype=np.float32)[None, :, None]
    sky = np.array([12.0, 12.0, 14.0], dtype=np.float32)
    mid = np.array([22.0, 22.0, 24.0], dtype=np.float32)
    ground = np.array([32.0, 33.0, 36.0], dtype=np.float32)
    horizon = 0.42
    t = np.clip(yy, 0, 1)
    above = np.clip(t / horizon, 0, 1)
    below = np.clip((t - horizon) / max(1 - horizon, 1e-6), 0, 1)
    canvas = (1 - above) * sky + above * mid
    canvas = np.where(t < horizon, canvas, (1 - below) * mid + below * ground)
    noise = (np.random.default_rng(7).random((h, w, 1)) - 0.5) * 7
    grain = np.sin(xx * 140) * 1.4
    canvas = np.clip(canvas + noise + grain, 0, 255)
    band = np.exp(-((t - horizon) ** 2) / (2 * 0.004**2))
    canvas = np.clip(canvas + band * np.array([8.0, 8.0, 9.0]), 0, 255)
    return canvas


def retouch_fleet(src: Path, dest: Path) -> tuple[int, int]:
    im = Image.open(src).convert("RGBA")
    arr = np.array(im)
    rgb = arr[:, :, :3].astype(np.float32)
    alpha = vehicle_alpha(rgb)
    # Cooler, slightly darker grade on the vehicle only
    graded = rgb * np.array([0.82, 0.86, 0.92])
    graded = np.clip(graded, 0, 255)
    ys, xs = np.where(alpha > 0.25)
    if len(xs) < 50:
        raise SystemExit(f"Could not isolate vehicle in {src}")
    pad_x = int((xs.max() - xs.min()) * 0.08)
    pad_y = int((ys.max() - ys.min()) * 0.10)
    left = max(0, int(xs.min()) - pad_x)
    top = max(0, int(ys.min()) - pad_y)
    right = min(arr.shape[1], int(xs.max()) + pad_x + 1)
    bottom = min(arr.shape[0], int(ys.max()) + int(pad_y * 1.35) + 1)
    # Extra headroom above for cinematic crop
    extra_top = int((bottom - top) * 0.12)
    top = max(0, top - extra_top)
    crop_rgb = graded[top:bottom, left:right]
    crop_a = alpha[top:bottom, left:right]
    h, w = crop_a.shape
    ground = asphalt(h, w)
    out = ground * (1 - crop_a[:, :, None]) + crop_rgb * crop_a[:, :, None]
    out_im = Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), mode="RGB")
    out_im.save(dest, format="PNG", optimize=True)
    print(f"fleet -> {dest} {out_im.size}")
    return out_im.size


def main() -> None:
    logo_src = PHOTOS / "logo-lion.png"
    w, h = punch_logo(
        logo_src,
        [
            ROOT / "public" / "logo-lion.png",
            ROOT / "public" / "icon.png",
            PHOTOS / "logo-lion.png",
            ROOT / "app" / "icon.png",
        ],
    )
    sizes = {"logo": (w, h)}
    for name in (
        "fleet-tesla-y-rear.png",
        "fleet-tesla-y-side.png",
        "fleet-ioniq5-front.png",
    ):
        sizes[name] = retouch_fleet(PHOTOS / name, PHOTOS / name)
    print("SIZES", sizes)


if __name__ == "__main__":
    main()
