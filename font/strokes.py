"""Stroke/ribbon utilities for building a monoline cursive script font.

Letters are designed as one or more "skeleton" strokes (sequences of cubic
bezier segments). Each skeleton is flattened to a polyline, then expanded
into a closed ribbon contour of constant width with rounded caps. A global
slant (shear) is applied for the cursive/italic look.
"""

import math

SLANT = 0.22          # horizontal shear per unit y (italic slant)
STROKE_WIDTH = 34      # ribbon width in font units
CAP_SEGMENTS = 8       # smoothness of round caps


def shear(pt, k=SLANT):
    x, y = pt
    return (x + k * y, y)


def cubic_points(p0, p1, p2, p3, n=14):
    pts = []
    for i in range(n + 1):
        t = i / n
        mt = 1 - t
        x = mt**3 * p0[0] + 3 * mt**2 * t * p1[0] + 3 * mt * t**2 * p2[0] + t**3 * p3[0]
        y = mt**3 * p0[1] + 3 * mt**2 * t * p1[1] + 3 * mt * t**2 * p2[1] + t**3 * p3[1]
        pts.append((x, y))
    return pts


def flatten(segments, n=14):
    """segments: list of (p0,p1,p2,p3) cubic beziers, chained end-to-end."""
    pts = []
    for i, seg in enumerate(segments):
        seg_pts = cubic_points(*seg, n=n)
        if i > 0:
            seg_pts = seg_pts[1:]
        pts.extend(seg_pts)
    # drop duplicate consecutive points
    out = [pts[0]]
    for p in pts[1:]:
        if abs(p[0] - out[-1][0]) > 1e-6 or abs(p[1] - out[-1][1]) > 1e-6:
            out.append(p)
    return out


def _normals(pts):
    n = len(pts)
    norms = []
    for i in range(n):
        if i == 0:
            dx, dy = pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]
        elif i == n - 1:
            dx, dy = pts[-1][0] - pts[-2][0], pts[-1][1] - pts[-2][1]
        else:
            dx, dy = pts[i + 1][0] - pts[i - 1][0], pts[i + 1][1] - pts[i - 1][1]
        length = math.hypot(dx, dy)
        if length == 0:
            length = 1
        norms.append((-dy / length, dx / length))
    return norms


def _arc_cap(center, p_from, p_to, segments=CAP_SEGMENTS):
    cx, cy = center
    a0 = math.atan2(p_from[1] - cy, p_from[0] - cx)
    a1 = math.atan2(p_to[1] - cy, p_to[0] - cx)
    if a1 < a0:
        a1 += 2 * math.pi
    r = math.hypot(p_from[0] - cx, p_from[1] - cy)
    pts = []
    for i in range(1, segments):
        t = i / segments
        a = a0 + (a1 - a0) * t
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return pts


def ribbon(segments, width=STROKE_WIDTH, n=14, start_cap=True, end_cap=True,
           start_width=None, end_width=None):
    """Build a closed ribbon polygon (list of points) around a skeleton path."""
    pts = flatten(segments, n=n)
    norms = _normals(pts)
    half = width / 2
    left = []
    right = []
    count = len(pts)
    for i, (p, nrm) in enumerate(zip(pts, norms)):
        w = half
        if start_width is not None and i == 0:
            w = start_width / 2
        elif end_width is not None and i == count - 1:
            w = end_width / 2
        elif start_width is not None or end_width is not None:
            t = i / (count - 1)
            sw = (start_width if start_width is not None else width) / 2
            ew = (end_width if end_width is not None else width) / 2
            w = sw + (ew - sw) * t
        left.append((p[0] + nrm[0] * w, p[1] + nrm[1] * w))
        right.append((p[0] - nrm[0] * w, p[1] - nrm[1] * w))

    contour = list(left)
    if end_cap:
        contour += _arc_cap(pts[-1], left[-1], right[-1])
    else:
        contour.append(right[-1])
    contour += list(reversed(right))
    if start_cap:
        contour += _arc_cap(pts[0], right[0], left[0])
    else:
        contour.append(left[0])
    return contour


def dot(center, r=22, segments=14):
    """A small round dot (e.g. for i, j)."""
    cx, cy = center
    pts = []
    for i in range(segments):
        a = 2 * math.pi * i / segments
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return pts


def shear_contour(pts, k=SLANT):
    return [shear(p, k) for p in pts]
