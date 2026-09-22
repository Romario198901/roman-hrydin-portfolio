# Final Responsive Portfolio Polish

## Goal
Preserve the existing portfolio’s content, structure, colors, typography, and functionality while softening sharp edges and resolving mobile layout problems.

## Changes
- Convert the hero portrait to a responsive circular crop with a circular mustard accent, a restrained mobile diameter, and a consistently positioned 8px-rounded availability overlay.
- Introduce a subtle radius system: 8px for buttons, technology/contact/focus cards and labels; 8–10px for certificates; 10–12px for project cards with clipped image corners.
- Fix the real mobile overflow sources by constraining grid children, text blocks, portrait decoration, overlays, and width calculations rather than relying on hidden overflow.
- Tune mobile heading and hero-name sizing for comfortable wrapping; preserve their larger editorial scale on desktop.
- Keep hero actions side-by-side when space permits and stack them at full width on narrow screens.
- Add `Experience` as item 05 and renumber `Contact` to 06 in mobile navigation; connect it to the existing professional background section.

## Technical details
- Update `src/styles.css` only for the requested radius, portrait, overflow, typography, and breakpoint behavior.
- Update the navigation data and add the matching Experience section anchor without changing its content or order.
- Preserve the existing two-column mobile technology grid, safe external links, certificate viewer, CV downloads, and all project data.

## Verification
- Check 320, 375, 390, 430, 768, 1024, and desktop widths for horizontal scrolling, clipped text, button wrapping, portrait sizing, overlay collisions, card/image clipping, menu numbering, and consistent page padding.
- Exercise mobile navigation and certificate viewing, then confirm the preview builds without errors.
