import useThemeStore from '@store/useThemeStore'

const useChangeTheme = () => {
  const { theme, setTheme } = useThemeStore()

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.className = newTheme
  }

  return {
    theme,
    toggleTheme,
    setTheme
  }
}

export default useChangeTheme
