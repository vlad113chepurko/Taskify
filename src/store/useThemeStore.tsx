import { create } from 'zustand';

interface ThemeStore {
  theme: string
  setTheme: (theme: string) => void
}

const useThemeStore =
  create<ThemeStore>((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  setTheme: (theme: string) => set({
    theme: theme
  })
}));

export default useThemeStore;