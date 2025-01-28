'use client';

import { useEffect } from 'react';

type KeyMap = {
  [key: string]: () => void;
};

export function useKeyboard(keyMap: KeyMap) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Ignore if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const key = event.key.toLowerCase();
      const action = keyMap[key];

      if (action) {
        event.preventDefault();
        action();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyMap]);
}