import { useState, useEffect, useCallback } from 'react'

const changeTheme = (isDark: boolean) => {
  if (isDark) {
    localStorage.setItem('theme', 'dark')
    document.querySelector('html')!.classList.remove('light')
    document.querySelector('html')!.classList.add('dark')
  } else {
    localStorage.setItem('theme', 'light')
    document.querySelector('html')!.classList.remove('dark')
    document.querySelector('html')!.classList.add('light')
  }
}

export const useTheme = () => {
  const [theme, setTheme] = useState(false)

  const toggleTheme = useCallback((theme: boolean) => {
    changeTheme(theme)
    setTheme(theme)
  }, [])

  useEffect(() => {
    const storageTheme = localStorage.getItem('theme')
    if (storageTheme === 'dark') {
      toggleTheme(true)
    } else if (storageTheme === 'light') {
      toggleTheme(false)
    }
  }, [])

  return {
    theme,
    toggleTheme,
  }
}
