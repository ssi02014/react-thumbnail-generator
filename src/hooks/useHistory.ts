import { useCallback, useRef } from 'react';

interface HistoryState<T> {
  past: T[];
  present: T;
  future: T[];
}

const MAX_HISTORY = 50;

export const useHistory = <T>(initialState: T) => {
  const historyRef = useRef<HistoryState<T>>({
    past: [],
    present: initialState,
    future: [],
  });

  const getPresent = useCallback(() => historyRef.current.present, []);

  const push = useCallback((newState: T) => {
    const history = historyRef.current;
    const past = [...history.past, history.present];
    if (past.length > MAX_HISTORY) {
      past.shift();
    }
    historyRef.current = {
      past,
      present: newState,
      future: [],
    };
  }, []);

  const undo = useCallback((): T | null => {
    const history = historyRef.current;
    if (history.past.length === 0) return null;

    const previous = history.past[history.past.length - 1];
    const newPast = history.past.slice(0, -1);

    historyRef.current = {
      past: newPast,
      present: previous,
      future: [history.present, ...history.future],
    };

    return previous;
  }, []);

  const redo = useCallback((): T | null => {
    const history = historyRef.current;
    if (history.future.length === 0) return null;

    const next = history.future[0];
    const newFuture = history.future.slice(1);

    historyRef.current = {
      past: [...history.past, history.present],
      present: next,
      future: newFuture,
    };

    return next;
  }, []);

  const canUndo = useCallback(() => historyRef.current.past.length > 0, []);
  const canRedo = useCallback(() => historyRef.current.future.length > 0, []);

  const reset = useCallback((state: T) => {
    historyRef.current = {
      past: [],
      present: state,
      future: [],
    };
  }, []);

  return { getPresent, push, undo, redo, canUndo, canRedo, reset };
};
