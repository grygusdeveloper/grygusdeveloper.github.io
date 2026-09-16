# Standalone artwork replacement brief

Status: **planned, not generated**. No image-generation tool was available during the scrollbar revision. The current images remain temporary reference-derived assets, not newly generated art.

## Current rendering audit

- Interface and effects: HTML and CSS.
- Icons, the mark, and line charts: SVG; tool marks are mockup approximations.
- Canvas rendering: none in the current HTML/JavaScript implementation.
- `assets/planet.webp`: 420 × 100 pixels, cropped from the supplied concept.
- `assets/focus.webp`: 277 × 200 pixels, cropped from the supplied concept.
- `assets/mountains.webp`: 184 × 136 pixels, cropped from the supplied concept.

## Non-negotiable replacement rules

Generate each scenic asset independently from scratch. Use the approved dashboard only as a style/composition reference. Do not extract image fragments from a dashboard screenshot or canvas. Do not enlarge the existing crops and describe them as regenerated.

Keep the navy, electric-blue and violet palette, restrained glow, and the existing page composition. No new dashboard concept. No baked-in typography, charts, logos, buttons, borders, or UI. Text and controls stay HTML; icons stay SVG.

Choose a supported native image size large enough for approximately 2× the intended CSS display size. Preserve the original generated master and create optimized WebP/AVIF derivatives by downsampling, not upscaling. The dimensions below are design targets, not assertions about a particular model's supported sizes.

## 1. Header planet

Delivery target: approximately 2400 × 600, panoramic, dark left-hand text-safe area.

Prompt: A standalone cinematic decorative background for the approved HARNESS dashboard. Deep midnight navy space, a richly detailed blue-violet planetary horizon rising along the lower-right half, a fine electric-blue atmospheric rim, delicate terrain and cloud texture, restrained stars. The left half fades into almost black navy so interface text stays clear. Elegant and quiet, not a busy space battle. No text, logos, UI, cards, borders, or watermark. Match the supplied reference's color temperature and calm lighting without reproducing its interface.

## 2. Project-focus landscape

Delivery target: approximately 1600 × 1000, landscape, focal subject on the right.

Prompt: Standalone dark fantasy science-fiction concept art for a time-bending sword-action project. A lone adult female swordswoman seen from behind on a rocky ledge in the right third, overlooking distant slender ruins and layered mountains beneath an immense blue-violet moon. Subtle violet horizon light, blue rim lighting, atmospheric depth, painterly premium game-key-art finish. Keep the left forty percent low contrast and dark navy for separately rendered HTML text. Preserve the approved reference's composition and mood. No text, logos, interface, progress bars, frames, or watermark.

## 3. Sidebar mountain landscape

Delivery target: approximately 640 × 1000, portrait, top-weighted visual detail.

Prompt: Standalone portrait-format mountain landscape matching the approved HARNESS sidebar art. Layered jagged indigo mountain silhouettes, a distant soft violet glow in a narrow valley, a sparse midnight star field. Most visual detail belongs in the upper half; the lower half naturally fades into deep navy for separately rendered HTML copy. Restrained cinematic lighting, painterly detail, no repeated or mirrored mountain shapes. No people, text, logos, interface, frames, or watermark.

## Acceptance checks

- Inspect at actual CSS size and 2× device pixel ratio.
- Verify detail is native, not invented by resizing a small crop.
- No fragments of letters, icons, or card borders from the old reference.
- Check readability with the existing foreground copy in place.
- Preserve composition at desktop, tablet and mobile breakpoints.
- Record provider/model, generation date, original dimensions and file provenance.
- Replace the temporary WebP assets only after the generated outputs pass review.
