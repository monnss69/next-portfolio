'use client';

import { useKeyboard } from '@/lib/hooks/useKeyboard';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify-icon/react';

const shortcuts = [
  { key: 'h', description: 'Go to Home' },
  { key: 'e', description: 'Go to Experience' },
  { key: 'p', description: 'Go to Projects' },
  { key: 't', description: 'Go to Technologies' },
  { key: 'c', description: 'Go to Contact' },
  { key: 'd', description: 'Toggle dark mode' },
  { key: '?', description: 'Show/hide keyboard shortcuts' },
];

export function KeyboardHelp() {
  const [isOpen, setIsOpen] = useState(false);

  useKeyboard({
    '?': () => setIsOpen(prev => !prev),
    'escape': () => setIsOpen(false),
  });

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 btn btn-circle btn-ghost"
        aria-label="Show keyboard shortcuts"
      >
        <Icon icon="mdi:keyboard" className="text-xl" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
            >
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <h2 className="card-title">Keyboard Shortcuts</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="btn btn-ghost btn-circle"
                      aria-label="Close keyboard shortcuts"
                    >
                      <Icon icon="mdi:close" className="text-xl" />
                    </button>
                  </div>
                  <div className="divider" />
                  <div className="space-y-2">
                    {shortcuts.map(({ key, description }) => (
                      <div
                        key={key}
                        className="flex items-center justify-between"
                      >
                        <span>{description}</span>
                        <kbd className="kbd kbd-sm">{key}</kbd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}