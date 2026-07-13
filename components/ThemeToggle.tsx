'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  if (!mounted) {
    // Return placeholder markup with same dimensions to avoid layout shifts during hydration
    return (
      <div className="w-[42px] h-[42px] border border-border-main rounded-full" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="border border-border-main w-[42px] h-[42px] rounded-full cursor-pointer flex items-center justify-center text-text-primary text-[1.1rem] hover:bg-pill-hover hover:rotate-12 transition-all duration-200"
      aria-label="Toggle dark/light mode"
    >
      {isDark ? (
        <span className="line-none">☀</span>
      ) : (
        <span className="line-none">☾</span>
      )}
    </button>
  );
}
