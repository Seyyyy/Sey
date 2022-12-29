import styles from './Appbar.module.css'
import { SvgKyoryu } from '../atoms/Icons'
import { useTheme } from '@utils/useThemeProvider'

const Appbar = () => {
  const { theme, toggleTheme } = useTheme()

  const onChangeTheme = () => {
    toggleTheme(!theme)
  }

  return (
    <div className={styles.root}>
      <a href={'/'}>
        <div className={styles.titleRoot}>
          <SvgKyoryu width={'36px'} height={'36px'} />
          <h1 className={styles.titleText}>Sey</h1>
        </div>
      </a>
      <button className={styles.themeToggle} onClick={onChangeTheme}>
        {theme ? 'Dark Theme' : 'Light Theme'}
      </button>
    </div>
  )
}

export default Appbar
