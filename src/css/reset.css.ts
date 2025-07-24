import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('.rcp-root', {
  vars: {
    '--rcp-background-color': '#121212',
    '--rcp-field-input-color': '#ffffff',
    '--rcp-field-input-border-color': '#242424',
    '--rcp-field-label-color': '#808080',
  },
});

globalStyle('.rcp', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'var(--rcp-background-color)',
  borderRadius: '10px',
});

globalStyle('.rcp-body', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px 10px',
});

globalStyle('.rcp-section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

globalStyle('.rcp-interactive', {
  width: '100%',
  height: '100%',
  userSelect: 'none',
  touchAction: 'none',
});

globalStyle('.rcp-interactive[aria-disabled="true"]', {
  cursor: 'unset',
  pointerEvents: 'none',
});

globalStyle('.rcp-saturation', {
  cursor: 'all-scroll',
  width: '100%',
  position: 'relative',
  backgroundImage:
    'linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, transparent)',
  borderRadius: '10px 10px 0 0',
});

globalStyle('.rcp-saturation-cursor', {
  position: 'absolute',
  width: '20px',
  height: '20px',
  border: '2px solid white',
  borderRadius: '100%',
  boxShadow: '0 0 15px #00000026',
  transform: 'translate(-10px, -10px)',
});

globalStyle('.rcp-hue', {
  cursor: 'ew-resize',
  position: 'relative',
  width: '100%',
  height: '12px',
  backgroundImage:
    'linear-gradient(to right, red, #ff0, #0f0, #0ff, #00f, #f0f, red)',
  borderRadius: '10px',
});

globalStyle('.rcp-hue-cursor', {
  position: 'absolute',
  width: '20px',
  height: '20px',
  border: '2px solid white',
  borderRadius: '100%',
  boxShadow: '0 0 15px #00000026',
  transform: 'translate(-10px, -4px)',
});

globalStyle('.rcp-alpha', {
  cursor: 'ew-resize',
  position: 'relative',
  width: '100%',
  height: '12px',
  borderRadius: '10px',
});

globalStyle('.rcp-alpha-cursor', {
  position: 'absolute',
  width: '20px',
  height: '20px',
  border: '2px solid white',
  borderRadius: '100%',
  boxShadow: '0 0 15px #00000026',
  transform: 'translate(-10px, -4px)',
});

globalStyle('.rcp-fields', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

globalStyle('.rcp-fields-floor', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '10px',
});

globalStyle('.rcp-field', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

globalStyle('.rcp-field-input', {
  width: '100%',
  fontFamily: 'inherit',
  fontSize: '14px',
  textAlign: 'center',
  color: 'var(--rcp-field-input-color)',
  backgroundColor: 'transparent',
  border: '2px solid var(--rcp-field-input-border-color)',
  borderRadius: '5px',
  outline: 'none',
  padding: '5px 0',
});

globalStyle('.rcp-field-input:read-only', {
  opacity: '0.8',
});

globalStyle('.rcp-field-label', {
  fontSize: '14px',
  textAlign: 'center',
  color: 'var(--rcp-field-label-color)',
});
