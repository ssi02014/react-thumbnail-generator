import { useCallback, useReducer } from 'react';
import { ColorService } from 'react-color-palette';
import {
  CanvasState,
  Color,
  Layer,
  LayerId,
  TextLayer,
  ImageLayer,
} from '@interfaces/common';
import { useHistory } from './useHistory';

const createColor = (hex: string): Color => ColorService.convert('hex', hex);

let layerCounter = 0;
const generateLayerId = (): LayerId => `layer_${Date.now()}_${++layerCounter}`;

export const createDefaultTextLayer = (
  canvasWidth: number,
  canvasHeight: number,
  value = 'Simple Thumbnail\nGenerator 😁',
): TextLayer => ({
  id: generateLayerId(),
  type: 'text',
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  rotation: 0,
  scaleX: 1,
  scaleY: 1,
  value,
  fontSize: 30,
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontColor: createColor('#ffffff'),
  strokeColor: createColor('#121212'),
  fontStrokeType: 'None',
  lineHeight: 1,
  textAlign: 'center',
});

export const initialCanvasState: CanvasState = {
  canvasWidth: 600,
  canvasHeight: 400,
  imageType: 'png',
  bgColor: createColor('#192841'),
  backgroundImage: undefined,
  isBlur: false,
  isBlockEvent: false,
  layers: [createDefaultTextLayer(600, 400)],
  selectedLayerId: null,
};

// Actions
type CanvasAction =
  | { type: 'ADD_TEXT_LAYER' }
  | { type: 'ADD_IMAGE_LAYER'; image: HTMLImageElement; width: number; height: number }
  | { type: 'DELETE_LAYER'; id: LayerId }
  | { type: 'SELECT_LAYER'; id: LayerId | null }
  | { type: 'UPDATE_LAYER'; id: LayerId; changes: Partial<TextLayer> | Partial<ImageLayer> }
  | { type: 'MOVE_LAYER'; id: LayerId; x: number; y: number }
  | { type: 'TRANSFORM_LAYER'; id: LayerId; attrs: { x: number; y: number; scaleX: number; scaleY: number; rotation: number } }
  | { type: 'SET_CANVAS_PROP'; changes: Partial<Pick<CanvasState, 'canvasWidth' | 'canvasHeight' | 'imageType' | 'isBlur'>> }
  | { type: 'SET_BG_COLOR'; color: Color }
  | { type: 'SET_BACKGROUND_IMAGE'; image: HTMLImageElement | undefined; width?: number; height?: number }
  | { type: 'TOGGLE_BLOCK_EVENT' }
  | { type: 'RESTORE'; state: CanvasState };

// Non-history actions (these don't push to undo stack)
const NON_HISTORY_ACTIONS = new Set(['SELECT_LAYER', 'TOGGLE_BLOCK_EVENT', 'RESTORE']);

function canvasReducer(state: CanvasState, action: CanvasAction): CanvasState {
  switch (action.type) {
    case 'ADD_TEXT_LAYER': {
      const newLayer = createDefaultTextLayer(
        state.canvasWidth,
        state.canvasHeight,
        'New Text',
      );
      return {
        ...state,
        layers: [...state.layers, newLayer],
        selectedLayerId: newLayer.id,
      };
    }

    case 'ADD_IMAGE_LAYER': {
      const newLayer: ImageLayer = {
        id: generateLayerId(),
        type: 'image',
        x: state.canvasWidth / 2,
        y: state.canvasHeight / 2,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        image: action.image,
        width: action.width,
        height: action.height,
      };
      return {
        ...state,
        layers: [...state.layers, newLayer],
        selectedLayerId: newLayer.id,
      };
    }

    case 'DELETE_LAYER': {
      const newLayers = state.layers.filter((l) => l.id !== action.id);
      return {
        ...state,
        layers: newLayers,
        selectedLayerId:
          state.selectedLayerId === action.id ? null : state.selectedLayerId,
      };
    }

    case 'SELECT_LAYER':
      return { ...state, selectedLayerId: action.id };

    case 'UPDATE_LAYER':
      return {
        ...state,
        layers: state.layers.map((l) =>
          l.id === action.id ? ({ ...l, ...action.changes } as Layer) : l,
        ),
      };

    case 'MOVE_LAYER':
      return {
        ...state,
        layers: state.layers.map((l) =>
          l.id === action.id ? { ...l, x: action.x, y: action.y } : l,
        ),
      };

    case 'TRANSFORM_LAYER':
      return {
        ...state,
        layers: state.layers.map((l) =>
          l.id === action.id ? { ...l, ...action.attrs } : l,
        ),
      };

    case 'SET_CANVAS_PROP':
      return { ...state, ...action.changes };

    case 'SET_BG_COLOR':
      return {
        ...state,
        bgColor: action.color,
        backgroundImage: undefined,
        isBlur: false,
      };

    case 'SET_BACKGROUND_IMAGE':
      return {
        ...state,
        backgroundImage: action.image,
        isBlur: false,
        ...(action.width != null && action.height != null
          ? { canvasWidth: action.width, canvasHeight: action.height }
          : {}),
      };

    case 'TOGGLE_BLOCK_EVENT':
      return { ...state, isBlockEvent: !state.isBlockEvent };

    case 'RESTORE':
      return action.state;

    default:
      return state;
  }
}

export const useCanvasReducer = () => {
  const [state, dispatch] = useReducer(canvasReducer, initialCanvasState);
  const history = useHistory<CanvasState>(initialCanvasState);

  const dispatchWithHistory = useCallback(
    (action: CanvasAction) => {
      if (NON_HISTORY_ACTIONS.has(action.type)) {
        dispatch(action);
        return;
      }
      // For history-tracked actions, push current state before dispatching
      history.push(state);
      dispatch(action);
    },
    [state, history],
  );

  const undo = useCallback(() => {
    const prev = history.undo();
    if (prev) {
      dispatch({ type: 'RESTORE', state: prev });
    }
  }, [history]);

  const redo = useCallback(() => {
    const next = history.redo();
    if (next) {
      dispatch({ type: 'RESTORE', state: next });
    }
  }, [history]);

  const selectedLayer = state.selectedLayerId
    ? state.layers.find((l) => l.id === state.selectedLayerId) ?? null
    : null;

  return {
    state,
    dispatch: dispatchWithHistory,
    undo,
    redo,
    canUndo: history.canUndo,
    canRedo: history.canRedo,
    selectedLayer,
  };
};
