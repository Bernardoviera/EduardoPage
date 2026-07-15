---
name: ui-ux-pro-max
description: "UI/UX design intelligence. 67 styles, 161 palettes, 57 font pairings, 25 charts, 16 stacks (React, Next.js, Vue, Svelte, Astro, SwiftUI, React Native, Flutter, Nuxt, Nuxt UI, Tailwind, shadcn/ui, Jetpack Compose, Three.js, Angular, Laravel). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, mobile app, .html, .tsx, .vue, .svelte. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, flat design. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient."
---

# UI/UX Pro Max

Design intelligence skill powered by BM25 search over databases of 67 styles,
161 palettes, 57 font pairings, 25 chart types, and UX guidelines across 16
technology stacks.

## When to use

Use this skill whenever a task changes **how something looks, feels, moves, or is
interacted with**: designing a new page (landing, dashboard, admin, SaaS, mobile),
creating or refactoring UI components, choosing colors/typography/spacing, or
reviewing UI code for UX, accessibility, or visual consistency.

## How to use

Run the search script from the repo root:

```bash
# Domain search
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>

# Stack-specific guidelines
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack <stack>

# Generate a full design system (optionally persist to design-system/<name>/)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Project Name" [--persist]
```

## Domains

`style` · `color` · `typography` · `chart` · `landing` · `product` · `ux` ·
`google-fonts` · `icons`

## Stacks

`html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `astro`, `swiftui`,
`react-native`, `flutter`, `shadcn`, `nuxtjs`, `nuxt-ui`, `jetpack-compose`,
`threejs`, `angular`, `laravel`

## Workflow

1. Run the search command with the relevant query and domain (auto-detects domain
   when `--domain` is omitted).
2. Present the top results clearly.
3. Apply the findings to the current project.

See `templates/base/skill-content.md` for the full priority-ordered UX rule
reference (accessibility, touch targets, performance, layout, typography, etc.).
