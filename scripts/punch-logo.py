#!/usr/bin/env python3
"""Punch the real Rubicon lion to a true transparent circle. Do not generate a new mark."""

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "logo-lion.png"
DESTS = [
    ROOT / "public" / "logo-lion.png",
    ROOT / "public" / "icon.png",
    ROOT / "app" / "icon.png",
    ROOT / "public" / "rubicon-brand-photos" / "logo-lion.png",
]


def punch(src: Path) -> Image.Image:
    im = Image.open(src).convert("RGBA")
    arr = np.array(im)
    h, w = arr.shape[:2]
    cy = (h - 1) / 2.0
    cx = (w - 1) / 2.0

    rgb = arr[:, :, :3].astype(np.int32)
    alpha = arr[:, :, 3]
    dark = (rgb.sum(axis=2) < 80) & (alpha > 200)
    ys, xs = np.where(dark)
    if len(xs) < 50:
        raise SystemExit(f"Could not find dark opaque pixels in {src}")

    yy, xx = np.ogrid[:h, :w]
    dist = np.sqrt((yy - cy) ** 2 + (xx - cx) ** 2)
    # Naive max() of dark pixels sits on AA specks outside the white halo.
    # The outer black ring is the largest radius whose 1px band is mostly dark.
    r_max_raw = float(dist[dark].max())
    r_ring = 0.0
    for r in range(int(r_max_raw) + 1):
        band = (dist >= r) & (dist < r + 1) & (alpha > 200)
        if int(band.sum()) < 100:
            continue
        frac = float(((rgb.sum(axis=2) < 80) & band).sum()) / float(band.sum())
        if frac >= 0.85:
            r_ring = float(r + 1)
    if r_ring < 20:
        r_ring = float(np.percentile(dist[dark], 95))
    radius = r_ring - 1.5

    arr[dist > radius, 3] = 0

    rim = (dist >= (radius - 6.0)) & (dist <= radius)
    near_white = (rgb[:, :, 0] > 200) & (rgb[:, :, 1] > 200) & (rgb[:, :, 2] > 200)
    arr[rim & near_white, 3] = 0

    ys2, xs2 = np.where(arr[:, :, 3] > 0)
    pad = 8
    box = (
        max(0, int(xs2.min()) - pad),
        max(0, int(ys2.min()) - pad),
        min(w, int(xs2.max()) + pad + 1),
        min(h, int(ys2.max()) + pad + 1),
    )
    out = Image.fromarray(arr, mode="RGBA").crop(box)
    print(
        f"src={src.name} {im.size} dark_r_raw={r_max_raw:.1f} ring={r_ring:.1f} mask_r={radius:.1f} "
        f"out={out.size} alpha={out.getextrema()[3]}"
    )
    return out


def main() -> None:
    out = punch(SRC)
    for dest in DESTS:
        dest.parent.mkdir(parents=True, exist_ok=True)
        out.save(dest, format="PNG", optimize=True)
        print(f"wrote {dest.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
