import sys
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.colorLib.builder import buildCOLR, buildCPAL
from fontTools.ttLib.tables import otTables as ot

UPM = 1000

# Gold gradient: bright highlight -> warm gold -> deep bronze shadow
GOLD_PALETTE = [
    (1.0, 0.92, 0.62, 1.0),
    (1.0, 0.76, 0.22, 1.0),
    (0.55, 0.34, 0.05, 1.0),
]


def build(glyph_module, out_path, family="Michael Script", style="Regular"):
    glyphs_data = glyph_module.GLYPHS

    glyph_order = [".notdef"] + list(glyphs_data.keys())

    fb = FontBuilder(UPM, isTTF=True)
    fb.setupGlyphOrder(glyph_order)

    NAMED = {
        "space": 0x20, "exclam": 0x21, "apostrophe": 0x27,
        "comma": 0x2C, "hyphen": 0x2D, "period": 0x2E,
        "zero": 0x30, "one": 0x31, "two": 0x32, "three": 0x33, "four": 0x34,
        "five": 0x35, "six": 0x36, "seven": 0x37, "eight": 0x38, "nine": 0x39,
        "question": 0x3F,
    }

    cmap = {}
    for name in glyphs_data:
        if name in NAMED:
            cmap[NAMED[name]] = name
        elif len(name) == 1:
            cmap[ord(name)] = name
        elif name.startswith("uni"):
            cmap[int(name[3:], 16)] = name

    fb.setupCharacterMap(cmap)

    ttglyphs = {}

    # .notdef - simple box
    pen = TTGlyphPen(None)
    pen.moveTo((50, 0))
    pen.lineTo((450, 0))
    pen.lineTo((450, 700))
    pen.lineTo((50, 700))
    pen.closePath()
    ttglyphs[".notdef"] = pen.glyph()

    for name, data in glyphs_data.items():
        pen = TTGlyphPen(None)
        for contour in data["contours"]:
            if not contour:
                continue
            pts = [(round(x), round(y)) for x, y in contour]
            pen.moveTo(pts[0])
            for p in pts[1:]:
                pen.lineTo(p)
            pen.closePath()
        ttglyphs[name] = pen.glyph()

    fb.setupGlyf(ttglyphs)

    metrics = {}
    for name, data in glyphs_data.items():
        adv = data["advance"]
        if data["contours"]:
            xs = [p[0] for c in data["contours"] for p in c]
            lsb = round(min(xs)) if xs else 0
        else:
            lsb = 0
        metrics[name] = (adv, lsb)
    metrics[".notdef"] = (500, 50)

    fb.setupHorizontalMetrics(metrics)
    fb.setupHorizontalHeader(ascent=850, descent=-300)

    fb.setupNameTable({
        "familyName": family,
        "styleName": style,
        "uniqueFontIdentifier": f"{family}-{style}",
        "fullName": f"{family} {style}",
        "psName": f"{family.replace(' ', '')}-{style}",
        "version": "Version 1.0",
    })

    fb.setupOS2(sTypoAscender=850, sTypoDescender=-300, usWinAscent=850, usWinDescent=300)
    fb.setupPost()

    # COLR/CPAL gold gradient
    color_glyphs = {}
    for name, data in glyphs_data.items():
        if not data["contours"]:
            continue
        xs = [p[0] for c in data["contours"] for p in c]
        ys = [p[1] for c in data["contours"] for p in c]
        xmin, xmax = min(xs), max(xs)
        ymin, ymax = min(ys), max(ys)
        cx = (xmin + xmax) / 2
        height = ymax - ymin if ymax > ymin else 1
        color_glyphs[name] = {
            "Format": ot.PaintFormat.PaintGlyph,
            "Glyph": name,
            "Paint": {
                "Format": ot.PaintFormat.PaintLinearGradient,
                "ColorLine": {
                    "ColorStop": [
                        {"StopOffset": 0.0, "PaletteIndex": 0, "Alpha": 1.0},
                        {"StopOffset": 0.55, "PaletteIndex": 1, "Alpha": 1.0},
                        {"StopOffset": 1.0, "PaletteIndex": 2, "Alpha": 1.0},
                    ],
                    "Extend": "pad",
                },
                "x0": cx, "y0": ymax, "x1": cx, "y1": ymin,
                "x2": cx + height, "y2": ymax,
            },
        }

    fb.font["COLR"] = buildCOLR(color_glyphs, glyphMap=fb.font.getReverseGlyphMap())
    fb.font["CPAL"] = buildCPAL([GOLD_PALETTE])

    fb.save(out_path)
    print(f"Saved {out_path}")


if __name__ == "__main__":
    import glyphs_test
    build(glyphs_test, "/tmp/test.ttf")
