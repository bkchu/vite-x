import { useEffect, useState } from 'react';
import Moon from '~icons/heroicons-outline/moon';
import Sun from '~icons/heroicons-outline/sun';

/**
 * Feel free to place this switcher anywhere in your application.
 * Or - remove it entirely if you don't need a dark mode.
 */
export const DarkModeSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <button
      className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-800 ring-expand"
      onClick={() => {
        if (document.documentElement.classList.contains('dark')) {
          localStorage.theme = 'light';
          setIsDarkMode(false);
        } else {
          localStorage.theme = 'dark';
          setIsDarkMode(true);
        }
        document.documentElement.classList.toggle('dark');
      }}
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-gray-200" />
      ) : (
        <Moon className="w-6 h-6 text-gray-800" />
      )}
    </button>
  ) : null;
};
