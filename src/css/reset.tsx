import { css } from '@emotion/react';

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .rcp-light {
    --rcp-background: #ffffff;
    --rcp-input-text: #111111;
    --rcp-input-border: rgba(0, 0, 0, 0.1);
    --rcp-input-label: #717171;
  }

  .rcp-dark {
    --rcp-background: #181818;
    --rcp-input-text: #f3f3f3;
    --rcp-input-border: rgba(255, 255, 255, 0.1);
    --rcp-input-label: #999999;
  }

  .rcp {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--rcp-background);
    border-radius: 10px;
  }

  .rcp-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;

    box-sizing: border-box;

    padding: 20px;
  }

  .rcp-saturation {
    position: relative;

    width: 100%;
    background-image: linear-gradient(transparent, black),
      linear-gradient(to right, white, transparent);
    border-radius: 10px 10px 0 0;

    user-select: none;
  }

  .rcp-saturation-cursor {
    position: absolute;

    width: 20px;
    height: 20px;

    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
    box-sizing: border-box;

    transform: translate(-10px, -10px);
  }

  .rcp-hue {
    position: relative;

    width: 100%;
    height: 12px;

    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0),
      rgb(255, 255, 0),
      rgb(0, 255, 0),
      rgb(0, 255, 255),
      rgb(0, 0, 255),
      rgb(255, 0, 255),
      rgb(255, 0, 0)
    );
    border-radius: 10px;

    user-select: none;
  }

  .rcp-hue-cursor {
    position: absolute;

    width: 20px;
    height: 20px;

    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;
    box-sizing: border-box;

    transform: translate(-10px, -4px);
  }

  .rcp-alpha {
    position: relative;

    width: 100%;
    height: 12px;

    border-radius: 10px;

    user-select: none;
  }

  .rcp-alpha-cursor {
    position: absolute;

    width: 20px;
    height: 20px;

    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px;
    box-sizing: border-box;

    transform: translate(-10px, -4px);
  }

  .rcp-fields {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;

    width: 100%;
  }

  .rcp-fields-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    width: 100%;
  }

  .hex-element {
    grid-row: 1;
  }

  .hex-element:nth-child(3n) {
    grid-column: 1 / -1;
  }

  .rcp-fields-element-input {
    width: 100%;

    font-size: 14px;
    font-weight: 600;

    color: var(--rcp-input-text);
    text-align: center;

    background: none;
    border: 2px solid;
    border-color: var(--rcp-input-border);
    border-radius: 5px;
    box-sizing: border-box;

    outline: none;

    padding: 10px;
  }

  .rcp-fields-element-label {
    font-size: 14px;
    font-weight: 600;

    color: var(--rcp-input-label);
    text-transform: uppercase;
  }
`;

export default reset;
