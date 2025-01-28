export function handleKeyboardNavigation(
  event: React.KeyboardEvent,
  actions: Record<string, () => void>
) {
  const key = event.key.toLowerCase();
  const action = actions[key];

  if (action) {
    event.preventDefault();
    action();
  }
}

export function getAriaLabel(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

export const skipToContent = {
  href: '#main-content',
  text: 'Skip to main content',
  className: 'sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-base-100',
};