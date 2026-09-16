# HARNESS — reference implementation mockup

An interactive, static design prototype based on the supplied navy/violet dashboard reference. This directory contains mockup code and fictional data only.

## Visual implementation

The desktop overview preserves the reference composition: compact sidebar, cosmic header, four metrics, active work beside a project-focus illustration, then machines, skills and integrations. The planet, mountain landscape and project-focus artwork are cropped from the user-supplied AI-generated reference image. They are decorative concept art, not real project evidence. UI text and controls are real HTML, not a screenshot overlay. Icons use SVG; Inter is requested from Google Fonts with system fallbacks. No font files are stored here.

## Explore

- Nine screens: Overview, Agents, Machines, Projects, Skills, Tools & Integrations, Activity, Knowledge and Settings.
- Ten fictional agents assigned to four example machines; overview counts and inventory use the same fixtures.
- Task filters, agent/machine/project inspectors, and a searchable command palette (Ctrl/Cmd+K).
- Skill presence matrix with explicit simulated registry-copy review.
- Semantic and raw config comparison. Cross-runtime preference copying is disabled.
- Obsidian-oriented latest/important/idea notes, pinning, note inspection, Markdown export, and quick capture (Ctrl/Cmd+I).
- Quick capture can create an inbox note or append to one of two existing demo notes.

## Boundaries

There are no API clients, credentials, live configurations, actual vault contents, agent dispatch, remote controls or real network telemetry. Application edits are held in memory in the current tab and disappear on reload. Export is a user-triggered Markdown download, not a write into Obsidian. The public mockup must never be connected to a private harness without a separately designed authenticated backend.

## Local checks

Syntax: `node --check harness/app.js` from the repository root.

This revision was rendered in local Chromium and exercised with browser automation at desktop/tablet/mobile widths (1920, 1440, 1280, 768 and 390 pixels). Checks covered nine-view navigation, overview counts, work filters, inspectors, keyboard search, safe note input rendering, capture/cancel/append/export, skill copying, config swapping/raw comparison and cross-runtime copy protection. The visual checks are of the locally rendered source; they are not claims of physical iOS or live integration testing.

To preview, serve the repository with any static HTTP server and open `/harness/`.
