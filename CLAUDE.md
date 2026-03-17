# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

react-thumbnail-generator is an NPM package that exports a `ThumbnailGenerator` React component for creating and customizing thumbnails in the browser. It renders a modal editor with a Konva-based canvas, text styling controls, color pickers, and image export (PNG/JPG/WebP).

- **React 19** peer dependency, ships with `"use client"` directive for Next.js compatibility
- **Package manager:** Yarn 1.22 (do not use npm)
- **Node version:** 24 (see `.nvmrc`)

## Commands

- `yarn build` — Clean `dist/` and bundle with Rollup (outputs CJS + ESM + types)
- `yarn storybook` — Start Storybook dev server on port 6006
- `yarn build:storybook` — Build static Storybook site

There are no test or lint scripts configured in package.json. ESLint config exists (`.eslintrc.js`) but must be run manually: `npx eslint src/`.

## Architecture

**Entry point:** `src/index.tsx` exports `ThumbnailGenerator`, which renders a toggle button and, when open, a `Portal`-mounted modal containing the editor.

**Key component flow:**
`ThumbnailGenerator` → `Portal` (renders to document.body) → `ThumbnailGeneratorContent` (main editor UI with all state) → `KonvaCanvas` (Konva Stage/Layer/Text for rendering)

**Canvas state** is managed entirely within `ThumbnailGeneratorContent` via React `useState`. The `CanvasState` / `CanvasStateWithColors` interfaces in `src/interfaces/common.ts` define the shape (text, font, colors, dimensions, export format, etc.).

**Styling:** Emotion CSS-in-JS (`@emotion/styled`). Each component directory typically has a `.styled.ts` file.

**Canvas rendering:** Uses `react-konva` (Konva Stage → Layer → Text). Text is draggable via a custom `useDragAndDropText` hook. Background supports solid color or uploaded image with optional blur.

## Path Aliases

Configured in `tsconfig.paths.json` and mirrored in Rollup's alias plugin:

- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@constants/*` → `src/constants/*`
- `@utils/*` → `src/utils/*`
- `@hooks/*` → `src/hooks/*`
- `@interfaces/*` → `src/interfaces/*`

## Build

Rollup bundles `src/index.tsx` into `dist/index.js` (CJS) and `dist/index.mjs` (ESM) with source maps. All `dependencies` and `peerDependencies` are externalized. Stories (`**/*.stories.tsx`) are excluded from the build.
