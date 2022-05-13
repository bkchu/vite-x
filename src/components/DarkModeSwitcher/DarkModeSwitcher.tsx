import { useEffect, useState } from 'react';
import Moon from '~icons/heroicons-outline/moon';
import Sun from '~icons/heroicons-outline/sun';

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
        <Sun className="text-gray-100" />
      ) : (
        <Moon className="text-gray-900" />
      )}
    </button>
  ) : null;
};
