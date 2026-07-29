'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from './Icons';

/**
 * Dark is the default canvas, so "light" is the opt-in class on <html>.
 * The initial class is set before paint by the blocking script in the root
 * layout; this component subscribes to that class and flips it.
 */
function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains('light');

/** The server has no DOM and always renders the dark default. */
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('light');
    document.documentElement.classList.toggle('light', next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full border border-border-main flex items-center justify-center text-text-primary cursor-pointer hover:border-accent hover:text-accent-ink transition-colors duration-200"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
}
