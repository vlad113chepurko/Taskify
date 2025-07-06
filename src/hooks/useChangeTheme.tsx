import useThemeStore from '@store/useThemeStore';

const useChangeTheme = () => {
  const { theme, setTheme } = useThemeStore();

  const initTheme = () => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const appliedTheme = saved || theme;
    setTheme(appliedTheme);
    document.documentElement.className = appliedTheme;
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return {
    theme,
    toggleTheme,
    setTheme,
    initTheme,
  };
};

export default useChangeTheme;
