# Release Notes

## v4.2.0

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

### Improvements

#### Mobile Responsive Layout
- On viewports 640px and below, the modal stretches to full viewport width and anchors to the bottom of the screen.
- The toolbar wraps naturally across multiple rows instead of overflowing.
- The More Options panel switches from absolute positioning to inline layout on mobile.
- The download button and canvas size inputs scale within the available width.
- The canvas area becomes scrollable when it exceeds the viewport.

#### Background Image Auto-Resize
- When a background image is added, it is automatically scaled down to fit within the viewport width and 60% of the viewport height while preserving the aspect ratio.
- Images smaller than the viewport are kept at their original size.

#### Disabled State UI
- When no text layer is selected, text-related controls (alignment, bold, italic, font color, stroke color, font size, line height) are visually disabled with reduced opacity, grayscale filter, and `not-allowed` cursor.
- Disabled range inputs (Font Size, Line Height) display a gray fill track and gray thumb instead of the active blue color.

#### Layer Centering
- Newly created text and image layers are placed at the center of the canvas.

#### Layer Boundary Guard
- When a layer is dragged completely outside the canvas boundary, it is automatically repositioned to the center of the canvas.

#### Persistent Layer Selection
- Clicking outside the canvas (textarea, layer panel, etc.) no longer deselects the current layer. Only clicking the canvas background deselects.

#### More Options Toggle Fix
- The More Options button now properly toggles open/close without conflicting with the outside-click handler.

### Internal Changes
- State management has been migrated from `useState` + `useColor` to `useReducer` + `useHistory`.
- `KonvaCanvas` has been split into `TextNode` and `ImageNode` components for independent per-layer rendering.
- A `disabled` prop has been added to the `ColorPicker` component.
- `:disabled` styles have been added to `IconButton` and `RangeInput`.

### Note
- The public API (`ThumbnailGeneratorProps`) remains unchanged. Existing usage works as before.

