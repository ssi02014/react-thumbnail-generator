# Release Notes

## v4.3.0

### Breaking Changes
- `CanvasState` interface has been completely redesigned. The single-text based state properties (`value`, `fontFamily`, `fontColor`, etc.) have been removed and replaced with a `layers` array-based structure.
- `CanvasStateWithColors` interface has been removed. Background color (`bgColor`) is now part of `CanvasState`, and font/stroke colors belong to each `TextLayer`.

### New Features

#### Multi-Layer System
- Multiple text and image layers can be freely added to the canvas.
- Each layer can be independently dragged, rotated, and resized.
- Per-layer properties such as font, color, and stroke are managed individually.

#### Layer Panel
- A layer list panel has been added below the canvas.
- Layers can be selected by clicking and removed via the delete button.
- "Add Text" and "Add Image" buttons allow creating new layers.

#### Undo / Redo
- Keyboard shortcuts `Ctrl+Z` (undo) / `Ctrl+Shift+Z` (redo) are supported. (macOS: `Cmd+Z` / `Cmd+Shift+Z`)
- Undo/Redo buttons have been added to the toolbar.
- Up to 50 history steps are stored.
- Transient actions such as layer selection are excluded from history.

#### Font Size Control
- A Font Size slider (8–120) has been added to the More Options panel.
- Each layer supports an independent font size setting.

### Improvements

#### Disabled State UI
- When no text layer is selected, text-related controls (alignment, bold, italic, font color, stroke color, font size, line height) are visually disabled.

#### Layer Centering
- Newly created text and image layers are placed at the center of the canvas.

#### Persistent Layer Selection
- Clicking outside the canvas (textarea, layer panel, etc.) no longer deselects the current layer. Only clicking the canvas background deselects.

### Internal Changes
- State management has been migrated from `useState` + `useColor` to `useReducer` + `useHistory`.
- `KonvaCanvas` has been split into `TextNode` and `ImageNode` components for independent per-layer rendering.
- A `disabled` prop has been added to the `ColorPicker` component.
- A `:disabled` style has been added to `IconButton`.

### Note
- The public API (`ThumbnailGeneratorProps`) remains unchanged. Existing usage works as before.
