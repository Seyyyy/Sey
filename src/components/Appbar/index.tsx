import styles from './Appbar.module.css'
import { SvgKyoryu } from '../atoms/Icons'
import { useTheme } from '@utils/useThemeProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@components/Tooltip'
import Link from 'next/link'

const Appbar = () => {
  const { theme, toggleTheme } = useTheme()

  const onChangeTheme = () => {
    toggleTheme(!theme)
  }

  return (
    <nav>
      <ul className={styles.root}>
        <li>
          <Link href={'/'}>
            <div className={styles.titleRoot}>
              <SvgKyoryu width={'40px'} height={'100%'} />
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
            {theme ? (
              <FontAwesomeIcon icon={faMoon} className={styles.icon} />
            ) : (
              <FontAwesomeIcon icon={faSun} className={styles.icon} />
            )}
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}

export default Appbar
