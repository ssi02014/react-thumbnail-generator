import { css } from '@emotion/react';

const colorPickerStyles = css`
  .rcp-root {
    --rcp-background-color: #121212;
    --rcp-field-input-color: #ffffff;
    --rcp-field-input-border-color: #242424;
    --rcp-field-label-color: #808080;
  }

  .rcp {
    display: flex;
    flex-direction: column;
    background-color: var(--rcp-background-color);
    border-radius: 10px;
  }

  .rcp-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
  }

  .rcp-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .rcp-interactive {
    width: 100%;
    height: 100%;
    user-select: none;
    touch-action: none;
  }

  .rcp-interactive[aria-disabled='true'] {
    cursor: unset;
    pointer-events: none;
  }

  .rcp-saturation {
    cursor: all-scroll;
    width: 100%;
    position: relative;
    background-image:
      linear-gradient(to bottom, transparent, black),
      linear-gradient(to right, white, transparent);
    border-radius: 10px 10px 0 0;
  }

  .rcp-saturation-cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid white;
    border-radius: 100%;
    box-shadow: 0 0 15px #00000026;
    transform: translate(-10px, -10px);
  }

  .rcp-hue {
    cursor: ew-resize;
    position: relative;
    width: 100%;
    height: 12px;
    background-image: linear-gradient(
      to right,
      red,
      #ff0,
      #0f0,
      #0ff,
      #00f,
      #f0f,
      red
    );
    border-radius: 10px;
  }

  .rcp-hue-cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid white;
    border-radius: 100%;
    box-shadow: 0 0 15px #00000026;
    transform: translate(-10px, -4px);
  }

  .rcp-alpha {
    cursor: ew-resize;
    position: relative;
    width: 100%;
    height: 12px;
    border-radius: 10px;
  }

  .rcp-alpha-cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid white;
    border-radius: 100%;
    box-shadow: 0 0 15px #00000026;
    transform: translate(-10px, -4px);
  }

  .rcp-fields {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .rcp-fields-floor {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
  }

  .rcp-field {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .rcp-field-input {
    width: 100%;
    font-family: inherit;
    font-size: 14px;
    text-align: center;
    color: var(--rcp-field-input-color);
    background-color: transparent;
    border: 2px solid var(--rcp-field-input-border-color);
    border-radius: 5px;
    outline: none;
    padding: 5px 0;
  }

  .rcp-field-input:read-only {
    opacity: 0.8;
  }

  .rcp-field-label {
    font-size: 14px;
    text-align: center;
    color: var(--rcp-field-label-color);
  }
`;

export default colorPickerStyles;
