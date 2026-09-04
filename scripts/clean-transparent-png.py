"""Clear hidden RGB data without changing any visible pixels or alpha values.

Usage: python clean-transparent-png.py SOURCE.png OUTPUT.png
Requires Pillow and NumPy. SOURCE and OUTPUT must be different paths.
"""

import argparse
import hashlib
import json
from pathlib import Path

import numpy as np
from PIL import Image, PngImagePlugin


def clean(source: Path, output: Path) -> dict:
    if source.resolve() == output.resolve():
        raise ValueError("Write a candidate to a separate path before replacing the source.")
    with Image.open(source) as image:
        if image.format != "PNG" or image.mode != "RGBA":
            raise ValueError("Expected an RGBA PNG; do not convert the source illustration.")
        original = np.array(image)
        info = image.info.copy()

    cleaned = original.copy()
    transparent = original[:, :, 3] == 0
    residual = transparent & np.any(original[:, :, :3] != 0, axis=2)
    cleaned[transparent, :3] = 0

    # Preserve standard text and colour-profile metadata. Record the exact source
    # rather than carrying an obsolete C2PA signature onto modified file bytes.
    metadata = PngImagePlugin.PngInfo()
    for key, value in info.items():
        if isinstance(value, str):
            metadata.add_itxt(key, value)
    source_hash = hashlib.sha256(source.read_bytes()).hexdigest()
    metadata.add_itxt("SourceSHA256", source_hash)
    metadata.add_itxt(
        "Processing",
        "RGB cleared only where alpha is zero. All visible pixels and the entire alpha channel are unchanged.",
    )
    options = {key: info[key] for key in ("icc_profile", "dpi", "exif") if key in info}
    output.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(cleaned).save(output, pnginfo=metadata, optimize=True, **options)

    with Image.open(output) as image:
        result = np.array(image)
    assert result.shape == original.shape
    assert np.array_equal(result[:, :, 3], original[:, :, 3]), "Alpha changed"
    assert np.array_equal(result[~transparent], original[~transparent]), "Visible pixels changed"
    assert np.all(result[transparent] == 0), "Transparent colour residue remains"

    before = Image.fromarray(original)
    after = Image.fromarray(result)
    for background in ("#ffffff", "#172739", "#cee6f3"):
        canvas = Image.new("RGBA", before.size, background)
        assert np.array_equal(
            np.array(Image.alpha_composite(canvas, before)),
            np.array(Image.alpha_composite(canvas, after)),
        ), f"Appearance changed on {background}"

    return {
        "source": str(source),
        "output": str(output),
        "source_sha256": source_hash,
        "output_sha256": hashlib.sha256(output.read_bytes()).hexdigest(),
        "size": [original.shape[1], original.shape[0]],
        "cleared_hidden_pixels": int(residual.sum()),
        "visible_pixels_changed": 0,
        "alpha_values_changed": 0,
        "background_composites_identical": True,
        "before_bytes": source.stat().st_size,
        "after_bytes": output.stat().st_size,
    }


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    arguments = parser.parse_args()
    print(json.dumps(clean(arguments.source, arguments.output), indent=2))
