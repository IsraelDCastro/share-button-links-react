# Repository Guidelines

## Project Structure & Module Organization

This is a Vite + React + TypeScript component library for share buttons.

- `src/components/`: published library components.
- `src/components/buttons/`: full text button variants (`ButtonFacebook.tsx`, etc.).
- `src/components/icons/`: icon-only variants.
- `src/components/button-group/`: grouped share button wrapper.
- `src/components/shared/interfaces/`: shared TypeScript interfaces.
- `src/assets/`: SCSS sources, including docs styles and distributable stylesheets.
- `src/examples/`, `src/routes/`, `src/layouts/`: demo/docs app structure.
- `vite.config.ts`: library build config and output mapping to `dist/`.

## Build, Test, and Development Commands

- `npm run dev`: starts local Vite dev server.
- `npm run build`: builds library artifacts into `dist/` (ESM + UMD + CSS + types).
- `npm run preview`: serves the built output locally.
- `npm run lint:format`: runs Prettier across JS/TS/CSS/MD/JSON files.
- `npm run lint:fix`: runs ESLint with auto-fixes on `src/`.
- `npm run lint`: runs formatting then lint fixes.

## Coding Style & Naming Conventions

- Use TypeScript + React function components.
- Follow Prettier config: 2 spaces, semicolons, double quotes, max width 140.
- Follow ESLint (Airbnb + TypeScript + React Hooks); keep imports clean and avoid unused vars.
- Use `PascalCase` for component filenames and exports (`ButtonTwitter.tsx`).
- Keep shared types in `src/components/shared/interfaces`.
- Use path alias `@` for `src` imports when appropriate.

## Testing Guidelines

There is currently no active test suite in this repository (`src/` has no `*.test.*`/`*.spec.*` files). For new logic, add tests alongside implementation using `ComponentName.test.tsx` naming. At minimum, run:

1. `npm run lint`
2. `npm run build`

Include manual verification notes for changed share URLs or button rendering.

## Commit & Pull Request Guidelines

Existing history favors short, direct commit subjects (for example: `Initial commit`, `Bump terser...`) and PR-based merges (`Merge pull request #...`).

- Write concise, imperative commit messages focused on one change.
- Link related issues in the PR description.
- Include what changed, why, and how it was validated.
- Add screenshots/GIFs for UI or style updates (docs/demo surfaces).
- Ensure lint/build pass before requesting review.
