import styles from './Appbar.module.css'
import { useTheme } from '@utils/useThemeProvider'
import { Tooltip } from '@components/Tooltip'
import { Link } from '@tanstack/react-router'

const Appbar = () => {
  const { theme, toggleTheme } = useTheme()

  const onChangeTheme = () => {
    toggleTheme(!theme)
  }

  return (
    <nav>
      <ul className={styles.root}>
        <li>
          <Link to={'/'}>
            <div className={styles.titleRoot}>
              <h1 className={styles.titleText}>Sey</h1>
            </div>
          </Link>
        </li>

        <li>
          <Tooltip
            buttonProps={{
              'aria-label': 'Change Theme',
              className: styles.themeToggle,
              onClick: onChangeTheme,
            }}
            tootipText={'Change theme'}
            data-testid="theme-button"
          >
            <span className="material-icons" suppressHydrationWarning>
              {theme ? 'dark_mode' : 'light_mode'}
            </span>
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}

export default Appbar
