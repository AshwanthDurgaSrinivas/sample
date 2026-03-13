"""
Generate ARTIFACT-FREE animated waving GIFs for all founders.
- ONLY the hand rotates in the GIF (no body rotation to prevent seams).
- 30 FPS for high liquidity.
- Corrected configs for all founders.
- We will use CSS for the 'living' head-tilt and bobbing.
"""
from PIL import Image
import os, math

FOUNDERS_DIR = r'd:\capscrum\capscrum-app\public'
FPS = 30
DURATION = 1.0  # 1 second loop is plenty for a wave
TOTAL_FRAMES = int(FPS * DURATION)
MS_PER_FRAME = int(1000 / FPS)

CONFIGS = [
    # Founder 1 (Arjun) - Hand on left
    dict(id=1, clip_w=0.55, clip_h=0.70, pivot_x=0.38, pivot_y=0.64),
    # Founder 2 (Dev) - Hand on left
    dict(id=2, clip_w=0.55, clip_h=0.70, pivot_x=0.36, pivot_y=0.62),
    # Founder 3 (Rohan) - Hand on left
    dict(id=3, clip_w=0.55, clip_h=0.70, pivot_x=0.38, pivot_y=0.65),
    # Founder 4 (Karan) - Hand on left
    dict(id=4, clip_w=0.55, clip_h=0.70, pivot_x=0.38, pivot_y=0.64),
    # Founder 5 (Vivek) - Hand on left
    dict(id=5, clip_w=0.55, clip_h=0.70, pivot_x=0.38, pivot_y=0.64),
]

def rotate_hand_region(base_rgba, cfg, angle_deg):
    W, H = base_rgba.size
    cx, cy = int(cfg['clip_w'] * W), int(cfg['clip_h'] * H)
    px, py = int(cfg['pivot_x'] * W), int(cfg['pivot_y'] * H)

    # Use a slightly feathered or larger crop to avoid hard seams
    hand_crop = base_rgba.crop((0, 0, cx, cy)).copy()

    # PIL rotate center is image center, so use margin
    margin = 400
    big = Image.new('RGBA', (cx + 2 * margin, cy + 2 * margin), (0, 0, 0, 0))
    big.paste(hand_crop, (margin, margin))
    
    rotated_big = big.rotate(-angle_deg, center=(margin + px, margin + py), resample=Image.BICUBIC)
    hand_rotated = rotated_big.crop((margin, margin, margin + cx, margin + cy))

    # Paste on the UNROTATED base
    frame = base_rgba.copy()
    frame.paste(hand_rotated, (0, 0), hand_rotated)
    return frame

def process_founder(cfg):
    n = cfg['id']
    inp = os.path.join(FOUNDERS_DIR, f'founder{n}_wave.png')
    out = os.path.join(FOUNDERS_DIR, f'founder{n}_wave.gif')
    if not os.path.exists(inp): return
    
    base = Image.open(inp).convert('RGBA')
    print(f'  Generating smooth wave for founder{n}...')
    
    frames = []
    for i in range(TOTAL_FRAMES):
        t = i / TOTAL_FRAMES
        # Wave angle: stage a nice smooth -15 to +15 degree sine
        angle = 14 * math.sin(2 * math.pi * t)
        
        frame = rotate_hand_region(base, cfg, angle)
        
        # High quality palette for minimal dithering
        frames.append(frame.convert('P', palette=Image.ADAPTIVE, colors=255))
        
    frames[0].save(
        out,
        save_all=True,
        append_images=frames[1:],
        loop=0,
        duration=MS_PER_FRAME,
        optimize=True,
        disposal=2  # Restore background to prevent ghosting
    )
    print(f'  Saved: {out}')

if __name__ == '__main__':
    for cfg in CONFIGS:
        process_founder(cfg)
    print('\nArtifact-free smooth GIFs generated.')
