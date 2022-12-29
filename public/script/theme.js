;(function initTheme() {
  var osThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  var theme = localStorage.getItem('theme')
  if (theme) {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.add('light')
    }
  } else {
    if (osThemeDark) {
      document.querySelector('html').classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.querySelector('html').classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }
})()
