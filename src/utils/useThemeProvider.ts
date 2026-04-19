import { useState, useEffect } from 'react'

const applyTheme = (isDark: boolean) => {
  if (typeof document === 'undefined') return
  const html = document.documentElement
  if (isDark) {
    html.classList.remove('light')
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    html.classList.add('light')
    localStorage.setItem('theme', 'light')
  }
}

export const useTheme = () => {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = (isDark: boolean) => {
    applyTheme(isDark)
    setTheme(isDark)
  }

  return { theme, toggleTheme }
}
