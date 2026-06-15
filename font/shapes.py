"""Higher level shape helpers built on top of strokes.py primitives."""

import math
from strokes import ribbon, STROKE_WIDTH


def arc_seg(cx, cy, rx, ry, a0, a1):
    """Cubic bezier approximation of an elliptical arc from angle a0->a1 (deg)."""
    a0r, a1r = math.radians(a0), math.radians(a1)
    p0 = (cx + rx * math.cos(a0r), cy + ry * math.sin(a0r))
    p3 = (cx + rx * math.cos(a1r), cy + ry * math.sin(a1r))
    alpha = a1r - a0r
    k = 4 / 3 * math.tan(alpha / 4)
    p1 = (p0[0] - k * rx * math.sin(a0r), p0[1] + k * ry * math.cos(a0r))
    p2 = (p3[0] + k * rx * math.sin(a1r), p3[1] - k * ry * math.cos(a1r))
    return (p0, p1, p2, p3)


def ellipse_segments(cx, cy, rx, ry, start_angle=90, ccw=False, steps=4, sweep=360):
    """Chain of cubic segments tracing an ellipse (or arc)."""
    segs = []
    step_angle = sweep / steps
    a = start_angle
    for _ in range(steps):
        a1 = a - step_angle if ccw else a + step_angle
        segs.append(arc_seg(cx, cy, rx, ry, a, a1))
        a = a1
    return segs


def ellipse_ring(cx, cy, rx, ry, width=STROKE_WIDTH, start_angle=90, steps=8):
    """Closed ring (two contours) approximating a pen-drawn ellipse outline."""
    half = width / 2
    outer = ellipse_segments(cx, cy, rx + half * 0.0 + rx * 0 + ( rx ), ry, start_angle, ccw=False, steps=steps)
    return outer


def ring_contours(cx, cy, rx, ry, width=STROKE_WIDTH, start_angle=90, steps=8):
    """Return (outer_contour, inner_contour) point lists forming a ring."""
    from strokes import flatten
    half = width / 2
    outer_segs = ellipse_segments(cx, cy, rx + half, ry + half, start_angle, ccw=False, steps=steps)
    inner_segs = ellipse_segments(cx, cy, max(rx - half, 1), max(ry - half, 1), start_angle, ccw=True, steps=steps)
    outer = flatten(outer_segs, n=8)
    inner = flatten(inner_segs, n=8)
    return outer, inner
