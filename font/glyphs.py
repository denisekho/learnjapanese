"""Glyph definitions for the cursive 'Michael Script' font.

Coordinate system (pre-slant, font units, UPM=1000):
  baseline = 0
  x-height top  ~ 460
  ascenders     ~ 680-700
  descenders    ~ -220 to -250
  cap height    ~ 660
"""

from strokes import ribbon, dot, shear_contour, STROKE_WIDTH
from shapes import ring_contours, ellipse_segments

W = STROKE_WIDTH
GLYPHS = {}


def S(contours):
    return [shear_contour(c) for c in contours if c]


def add(name, contours, advance):
    GLYPHS[name] = {"contours": S(contours), "advance": advance}


def line(p0, p3):
    return (p0, p0, p3, p3)


# ---------------------------------------------------------------- lowercase

# a: bowl + small entry hook + rising exit tail
a_bowl_outer, a_bowl_inner = ring_contours(150, 210, 110, 210, width=W)
a_entry = ribbon([
    ((-30, -60), (-10, -10), (30, 80), (45, 150)),
], width=W)
a_exit = ribbon([
    ((250, 300), (310, 330), (340, 230), (330, -60)),
], width=W)
add("a", [a_bowl_outer, a_bowl_inner, a_entry, a_exit], 380)

# b: ascender stem + bowl
b_stem = ribbon([
    ((-30, -60), (-10, -10), (30, 200), (50, 460)),
    ((50, 460), (60, 620), (60, 700), (110, 690)),
], width=W)
b_bowl_outer, b_bowl_inner = ring_contours(165, 175, 110, 175, width=W)
add("b", [b_stem, b_bowl_outer, b_bowl_inner], 400)

# c: open ellipse arc with small entry/exit
c_arc = ribbon(
    ellipse_segments(150, 210, 110, 210, start_angle=35, ccw=False, steps=5, sweep=290),
    width=W,
)
add("c", [c_arc], 360)

# d: bowl (like a) + tall right stem
d_bowl_outer, d_bowl_inner = ring_contours(150, 210, 110, 210, width=W)
d_entry = ribbon([
    ((-30, -60), (-10, -10), (30, 80), (45, 150)),
], width=W)
d_stem = ribbon([
    ((255, 320), (290, 380), (300, 560), (300, 650)),
    ((300, 650), (300, 700), (270, 710), (240, 695)),
], width=W)
add("d", [d_bowl_outer, d_bowl_inner, d_entry, d_stem], 400)

# e: bowl with small eye-bar near the top
e_bowl_outer, e_bowl_inner = ring_contours(150, 180, 110, 180, width=W)
e_bar = ribbon([line((55, 270), (210, 270))], width=W)
add("e", [e_bowl_outer, e_bowl_inner, e_bar], 380)

# f: tall stem with crossbar and top curl
f_stem = ribbon([
    ((30, -220), (50, -100), (70, 300), (90, 560)),
    ((90, 560), (95, 660), (60, 700), (10, 680)),
], width=W)
f_bar = ribbon([line((10, 320), (170, 320))], width=W)
add("f", [f_stem, f_bar], 320)

# g: bowl (like a) + descender loop
g_bowl_outer, g_bowl_inner = ring_contours(150, 210, 110, 210, width=W)
g_entry = ribbon([
    ((-30, -60), (-10, -10), (30, 80), (45, 150)),
], width=W)
g_desc = ribbon([
    ((250, 300), (320, 250), (300, -120), (180, -200)),
    ((180, -200), (90, -250), (30, -180), (60, -110)),
], width=W)
add("g", [g_bowl_outer, g_bowl_inner, g_entry, g_desc], 380)

# h: ascender stem + arch + leg
h_stem = ribbon([
    ((-30, -60), (-10, -10), (30, 200), (50, 460)),
    ((50, 460), (60, 620), (60, 700), (110, 690)),
], width=W)
h_arch = ribbon([
    ((50, 330), (60, 420), (140, 430), (210, 380)),
    ((210, 380), (250, 350), (240, 200), (240, 0)),
], width=W)
add("h", [h_stem, h_arch], 400)

# i: short stem + dot
i_stem = ribbon([
    ((10, -30), (0, 20), (20, 60), (60, 80)),
    ((60, 80), (60, 230), (60, 380), (90, 450)),
], width=W)
add("i", [i_stem, dot((90, 600))], 230)

# j: descender stem + dot
j_stem = ribbon([
    ((90, 450), (60, 380), (60, 230), (60, 60)),
    ((60, 60), (60, -120), (40, -220), (-30, -230)),
], width=W)
add("j", [j_stem, dot((90, 600))], 260)

# k: ascender stem + arm + leg
k_stem = ribbon([
    ((-30, -60), (-10, -10), (30, 200), (50, 460)),
    ((50, 460), (60, 620), (60, 700), (110, 690)),
], width=W)
k_arm = ribbon([line((230, 470), (60, 280))], width=W)
k_leg = ribbon([line((110, 350), (260, 0))], width=W)
add("k", [k_stem, k_arm, k_leg], 400)

# l: ascender stem (with entry curl + top terminal)
l_stem = ribbon([
    ((10, -30), (0, 20), (20, 60), (60, 80)),
    ((60, 80), (60, 300), (60, 500), (90, 650)),
    ((90, 650), (110, 700), (140, 700), (160, 680)),
], width=W)
add("l", [l_stem], 230)

# m: stem + two arches
m_skel = [
    ((-30, -60), (-10, -10), (30, 200), (50, 440)),
    ((50, 440), (60, 470), (90, 470), (100, 380)),
    ((100, 380), (110, 290), (110, 150), (120, 0)),
    ((120, 0), (125, 200), (160, 470), (220, 470)),
    ((220, 470), (270, 470), (270, 200), (280, 0)),
]
add("m", [ribbon(m_skel, width=W)], 480)

# n: stem + one arch
n_skel = [
    ((-30, -60), (-10, -10), (30, 200), (50, 440)),
    ((50, 440), (60, 470), (90, 470), (100, 380)),
    ((100, 380), (110, 290), (110, 150), (120, 0)),
    ((120, 0), (125, 200), (160, 470), (220, 470)),
    ((220, 470), (270, 470), (270, 200), (280, 0)),
]
# reuse n as a shorter version of m (single arch)
n_skel = [
    ((-30, -60), (-10, -10), (30, 200), (50, 440)),
    ((50, 440), (60, 470), (90, 470), (100, 380)),
    ((100, 380), (110, 290), (110, 150), (120, 0)),
]
n_arch2 = [
    ((120, 0), (125, 220), (160, 460), (220, 460)),
    ((220, 460), (260, 460), (260, 200), (260, 0)),
]
add("n", [ribbon(n_skel + n_arch2, width=W)], 400)

# o: bowl ring
o_outer, o_inner = ring_contours(180, 230, 150, 230, width=W)
add("o", [o_outer, o_inner], 400)

# p: bowl (top, like b's bowl mirrored) + descender stem
p_stem = ribbon([
    ((-30, -60), (-10, -10), (30, 150), (50, 350)),
    ((50, 350), (60, 100), (70, -100), (90, -220)),
], width=W)
p_bowl_outer, p_bowl_inner = ring_contours(165, 290, 110, 175, width=W)
add("p", [p_stem, p_bowl_outer, p_bowl_inner], 400)

# q: bowl (like a) + descender right stem
q_bowl_outer, q_bowl_inner = ring_contours(150, 210, 110, 210, width=W)
q_entry = ribbon([
    ((-30, -60), (-10, -10), (30, 80), (45, 150)),
], width=W)
q_stem = ribbon([
    ((255, 250), (300, 200), (310, -80), (300, -220)),
], width=W)
add("q", [q_bowl_outer, q_bowl_inner, q_entry, q_stem], 400)

# r: short stem + small arm
r_stem = ribbon([
    ((10, -30), (0, 20), (20, 60), (60, 80)),
    ((60, 80), (60, 230), (60, 380), (90, 450)),
], width=W)
r_arm = ribbon([
    ((60, 400), (70, 460), (160, 480), (210, 410)),
], width=W)
add("r", [r_stem, r_arm], 270)

# s: S-curve
s_skel = [
    ((230, 400), (230, 470), (90, 480), (70, 380)),
    ((70, 380), (50, 290), (200, 280), (210, 190)),
    ((210, 190), (220, 90), (90, 40), (40, 90)),
]
add("s", [ribbon(s_skel, width=W)], 320)

# t: stem + crossbar
t_stem = ribbon([
    ((30, -40), (10, 10), (40, 60), (70, 70)),
    ((70, 70), (75, 300), (75, 460), (75, 560)),
    ((75, 560), (75, 610), (50, 630), (20, 615)),
], width=W)
t_bar = ribbon([line((5, 330), (175, 330))], width=W)
add("t", [t_stem, t_bar], 300)

# u: two legs + bottom arch + exit tail
u_skel = [
    ((50, 460), (45, 250), (45, 130), (60, 60)),
    ((60, 60), (90, -30), (190, -30), (220, 60)),
    ((220, 60), (235, 130), (235, 250), (235, 400)),
    ((235, 400), (240, 450), (270, 470), (310, 400)),
]
add("u", [ribbon(u_skel, width=W)], 400)

# v: zigzag down-up
v_skel = [
    line((30, 460), (160, 0)),
    line((160, 0), (290, 460)),
]
add("v", [ribbon(v_skel, width=W)], 380)

# w: double zigzag
w_skel = [
    line((20, 460), (110, 0)),
    line((110, 0), (200, 400)),
    line((200, 400), (290, 0)),
    line((290, 0), (380, 460)),
]
add("w", [ribbon(w_skel, width=W)], 480)

# x: two crossing diagonals
x1 = ribbon([line((40, 460), (260, 0))], width=W)
x2 = ribbon([line((40, 0), (260, 460))], width=W)
add("x", [x1, x2], 320)

# y: diagonal + descender diagonal
y1 = ribbon([line((40, 460), (220, -220))], width=W)
y2 = ribbon([line((280, 460), (140, 150))], width=W)
add("y", [y1, y2], 340)

# z: zigzag with horizontals
z_skel = [
    line((40, 420), (220, 420)),
    line((220, 420), (40, 20)),
    line((40, 20), (220, 20)),
]
add("z", [ribbon(z_skel, width=W)], 300)

# ---------------------------------------------------------------- uppercase
CAP = 660

# A: two diagonals + crossbar
A_skel = [line((40, 0), (190, CAP)), line((190, CAP), (340, 0))]
A_bar = ribbon([line((100, 230), (280, 230))], width=W)
add("A", [ribbon(A_skel, width=W), A_bar], 440)

# B: stem + two stacked bowls
B_stem = ribbon([
    ((40, -30), (30, 10), (50, 40), (60, 60)),
    ((60, 60), (60, 280), (60, 480), (60, CAP - 20)),
    ((60, CAP - 20), (60, CAP + 10), (30, CAP), (10, CAP - 30)),
], width=W)
B_bowl1_o, B_bowl1_i = ring_contours(155, 490, 100, 120, width=W)
B_bowl2_o, B_bowl2_i = ring_contours(155, 170, 110, 170, width=W)
add("B", [B_stem, B_bowl1_o, B_bowl1_i, B_bowl2_o, B_bowl2_i], 480)

# C: large open arc
C_arc = ribbon(
    ellipse_segments(190, 330, 170, 330, start_angle=40, ccw=False, steps=5, sweep=280),
    width=W,
)
add("C", [C_arc], 440)

# D: stem + large bowl
D_stem = ribbon([
    ((40, -30), (30, 10), (50, 40), (60, 60)),
    ((60, 60), (60, 280), (60, 480), (60, CAP - 20)),
    ((60, CAP - 20), (60, CAP + 10), (30, CAP), (10, CAP - 30)),
], width=W)
D_bowl_o, D_bowl_i = ring_contours(195, 300, 150, 300, width=W)
add("D", [D_stem, D_bowl_o, D_bowl_i], 480)

# E: stem + three bars
E_stem = ribbon([line((60, 0), (60, CAP))], width=W)
E_bar_top = ribbon([line((60, CAP - 20), (300, CAP - 20))], width=W)
E_bar_mid = ribbon([line((60, 330), (250, 330))], width=W)
E_bar_bot = ribbon([line((60, 20), (300, 20))], width=W)
add("E", [E_stem, E_bar_top, E_bar_mid, E_bar_bot], 420)

# F: stem + two bars
F_stem = ribbon([line((60, 0), (60, CAP))], width=W)
F_bar_top = ribbon([line((60, CAP - 20), (300, CAP - 20))], width=W)
F_bar_mid = ribbon([line((60, 330), (250, 330))], width=W)
add("F", [F_stem, F_bar_top, F_bar_mid], 400)

# G: open arc + inward hook
G_arc = ribbon(
    ellipse_segments(190, 330, 170, 330, start_angle=40, ccw=False, steps=5, sweep=280),
    width=W,
)
G_hook = ribbon([line((330, 160), (200, 160))], width=W)
add("G", [G_arc, G_hook], 440)

# H: two stems + crossbar
H_stem1 = ribbon([line((60, 0), (60, CAP))], width=W)
H_stem2 = ribbon([line((330, 0), (330, CAP))], width=W)
H_bar = ribbon([line((60, 330), (330, 330))], width=W)
add("H", [H_stem1, H_stem2, H_bar], 460)

# I: vertical stem with curls
I_stem = ribbon([
    ((20, -30), (10, 30), (40, 70), (90, 80)),
    ((90, 80), (90, 280), (90, 460), (90, CAP - 80)),
    ((90, CAP - 80), (90, CAP - 20), (60, CAP), (20, CAP - 20)),
], width=W)
add("I", [I_stem], 250)

# J: stem + descender curl
J_stem = ribbon([
    ((140, CAP), (140, 400), (130, 50), (110, -60)),
    ((110, -60), (90, -160), (10, -200), (-40, -150)),
], width=W)
add("J", [J_stem], 320)

# K: stem + arm + leg
K_stem = ribbon([line((60, 0), (60, CAP))], width=W)
K_arm = ribbon([line((330, CAP), (60, 380))], width=W)
K_leg = ribbon([line((150, 420), (340, 0))], width=W)
add("K", [K_stem, K_arm, K_leg], 440)

# L: stem + base
L_stem = ribbon([line((60, 0), (60, CAP))], width=W)
L_base = ribbon([line((60, 20), (300, 20))], width=W)
add("L", [L_stem, L_base], 380)

# M: swash entry + three peaks + flourish exit
M_skel = [
    ((-130, -150), (-40, -40), (-10, 480), (60, CAP)),
    ((60, CAP), (110, CAP - 150), (140, 250), (200, 160)),
    ((200, 160), (250, 250), (290, CAP - 120), (340, CAP)),
    ((340, CAP), (370, CAP - 250), (360, 100), (360, -20)),
]
M_flourish = [
    ((360, -20), (410, -90), (470, -40), (500, -90)),
]
add("M", [ribbon(M_skel, width=W), ribbon(M_flourish, width=W * 0.8)], 560)

# N: stem + diagonal + stem
N_skel = [
    line((60, 0), (60, CAP)),
    line((60, CAP), (330, 0)),
    line((330, 0), (330, CAP)),
]
add("N", [ribbon(N_skel, width=W)], 460)

# O: large ring
O_o, O_i = ring_contours(210, 330, 180, 330, width=W)
add("O", [O_o, O_i], 460)

# P: stem + top bowl
P_stem = ribbon([line((60, 0), (60, CAP))], width=W)
P_bowl_o, P_bowl_i = ring_contours(200, 520, 130, 140, width=W)
add("P", [P_stem, P_bowl_o, P_bowl_i], 420)

# Q: ring + tail
Q_o, Q_i = ring_contours(210, 330, 180, 330, width=W)
Q_tail = ribbon([line((260, 60), (370, -100))], width=W)
add("Q", [Q_o, Q_i, Q_tail], 460)

# R: stem + top bowl + leg
R_stem = ribbon([line((60, 0), (60, CAP))], width=W)
R_bowl_o, R_bowl_i = ring_contours(200, 520, 130, 140, width=W)
R_leg = ribbon([line((170, 420), (350, 0))], width=W)
add("R", [R_stem, R_bowl_o, R_bowl_i, R_leg], 440)

# S: big S-curve
S_skel = [
    ((310, 560), (310, CAP + 20), (110, CAP + 30), (90, 520)),
    ((90, 520), (70, 400), (270, 380), (290, 250)),
    ((290, 250), (310, 120), (110, 50), (50, 120)),
]
add("S", [ribbon(S_skel, width=W)], 400)

# T: stem + top crossbar
T_stem = ribbon([
    ((230, -30), (210, 20), (240, 60), (260, 70)),
    ((260, 70), (250, 280), (250, 470), (250, CAP - 20)),
], width=W)
T_bar = ribbon([line((60, CAP - 20), (440, CAP - 20))], width=W)
add("T", [T_stem, T_bar], 480)

# U: tall arch
U_skel = [
    ((70, CAP), (60, 400), (60, 150), (80, 60)),
    ((80, 60), (120, -50), (260, -50), (300, 60)),
    ((300, 60), (320, 150), (320, 400), (320, CAP)),
    ((320, CAP), (325, CAP - 60), (360, CAP - 30), (400, CAP - 110)),
]
add("U", [ribbon(U_skel, width=W)], 460)

# V: big V
V_skel = [line((40, CAP), (210, 0)), line((210, 0), (380, CAP))]
add("V", [ribbon(V_skel, width=W)], 440)

# W: big W
W_skel = [
    line((20, CAP), (140, 0)),
    line((140, 0), (260, 470)),
    line((260, 470), (380, 0)),
    line((380, 0), (500, CAP)),
]
add("W", [ribbon(W_skel, width=W)], 560)

# X: crossing diagonals
X1 = ribbon([line((50, CAP), (340, 0))], width=W)
X2 = ribbon([line((50, 0), (340, CAP))], width=W)
add("X", [X1, X2], 420)

# Y: V converging to stem
Y_skel = [
    line((40, CAP), (210, 320)),
    line((380, CAP), (210, 320)),
    line((210, 320), (210, 0)),
]
add("Y", [ribbon(Y_skel, width=W)], 440)

# Z: zigzag
Z_skel = [
    line((50, CAP - 20), (350, CAP - 20)),
    line((350, CAP - 20), (50, 20)),
    line((50, 20), (350, 20)),
]
add("Z", [ribbon(Z_skel, width=W)], 420)

# ---------------------------------------------------------------- digits
DX = 460  # digit height ~ x-height/ascender area

# 0: ring with diagonal slash-like slight tilt (use plain ring)
n0_o, n0_i = ring_contours(150, 230, 130, 230, width=W)
add("zero", [n0_o, n0_i], 380)

# 1: stem with small flag
one_skel = [
    ((60, 0), (60, 0), (130, 0), (130, 460)),
    ((130, 460), (130, 460), (90, 460), (40, 410)),
]
add("one", [ribbon(one_skel, width=W, start_cap=True, end_cap=True)], 260)

# 2: curve top + diagonal + base
two_skel = [
    ((40, 360), (40, 480), (260, 480), (260, 340)),
    ((260, 340), (260, 220), (40, 160), (40, 40)),
    ((40, 40), (40, 20), (40, 0), (40, 0)),
]
two_base = ribbon([line((40, 0), (280, 0))], width=W)
add("two", [ribbon(two_skel, width=W), two_base], 360)

# 3: two stacked curves
three_skel = [
    ((40, 420), (40, 480), (250, 480), (250, 360)),
    ((250, 360), (250, 280), (120, 260), (100, 250)),
    ((100, 250), 0, 0, 0),
]
three_skel = [
    ((40, 420), (40, 480), (250, 480), (250, 360)),
    ((250, 360), (250, 270), (90, 260), (90, 250)),
    ((90, 250), (250, 240), (260, 130), (250, 60)),
    ((250, 60), (240, -20), (60, -30), (30, 40)),
]
add("three", [ribbon(three_skel, width=W)], 360)

# 4: diagonal + crossbar + stem
four_skel = [
    line((220, 460), (40, 140)),
    line((40, 140), (280, 140)),
]
four_stem = ribbon([line((220, 460), (220, 0))], width=W)
add("four", [ribbon(four_skel, width=W), four_stem], 360)

# 5: top bar + curve
five_top = ribbon([line((60, 460), (260, 460))], width=W)
five_skel = [
    ((60, 460), (60, 380), (60, 300), (60, 260)),
    ((60, 260), (120, 320), (270, 290), (260, 130)),
    ((260, 130), (250, -10), (80, -30), (40, 50)),
]
add("five", [five_top, ribbon(five_skel, width=W)], 360)

# 6: curve with bowl
six_skel = [
    ((250, 440), (180, 500), (40, 400), (40, 230)),
    ((40, 230), (40, 60), (60, -30), (180, -30)),
    ((180, -30), (300, -30), (300, 180), (180, 180)),
    ((180, 180), (90, 180), (50, 130), (50, 60)),
]
add("six", [ribbon(six_skel, width=W)], 360)

# 7: top bar + diagonal
seven_top = ribbon([line((40, 460), (280, 460))], width=W)
seven_diag = ribbon([line((280, 460), (100, 0))], width=W)
add("seven", [seven_top, seven_diag], 360)

# 8: two stacked rings
eight_o1, eight_i1 = ring_contours(160, 340, 100, 110, width=W)
eight_o2, eight_i2 = ring_contours(160, 120, 110, 120, width=W)
add("eight", [eight_o1, eight_i1, eight_o2, eight_i2], 380)

# 9: bowl with tail (inverted six)
nine_skel = [
    ((50, 60), (120, 0), (260, 80), (260, 250)),
    ((260, 250), (260, 420), (240, 510), (120, 510)),
    ((120, 510), (40, 510), (40, 330), (160, 330)),
    ((160, 330), (250, 330), (290, 380), (280, 460)),
]
add("nine", [ribbon(nine_skel, width=W)], 360)

# ---------------------------------------------------------------- punctuation

add("period", [dot((120, 30), r=24)], 200)
add("comma", [ribbon([
    ((140, 60), (140, 0), (100, -60), (60, -80)),
], width=W * 0.9)], 200)
add("exclam", [
    ribbon([line((100, 180), (130, 460))], width=W),
    dot((110, 30), r=24),
], 220)
add("question", [
    ribbon([
        ((60, 420), (60, 500), (260, 500), (260, 380)),
        ((260, 380), (260, 280), (140, 260), (140, 170)),
    ], width=W),
    dot((140, 30), r=24),
], 320)
add("apostrophe", [ribbon([
    ((100, 460), (110, 480), (130, 520), (120, 600)),
], width=W * 0.8)], 180)
add("hyphen", [ribbon([line((30, 240), (210, 240))], width=W)], 260)

add("space", [], 250)
