import styles from './Appbar.module.css'
import { Link } from '@tanstack/react-router'
import NavMenu from './NavMenu'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Playground', to: '/playground' },
]

const Appbar = () => {
  return (
    <nav className={styles.root}>
      <Link to={'/'} className={styles.prompt}>
        $ sey.blog
      </Link>

      <NavMenu items={NAV_ITEMS} />
    </nav>
  )
}

export default Appbar
