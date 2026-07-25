import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import styles from './Appbar.module.css'

type NavItem = {
  label: string
  to: string
}

type NavMenuProps = {
  items: NavItem[]
}

const NavMenu = ({ items }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.menuWrapper}>
      <button
        type="button"
        className={styles.menuButton}
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        MENU <span aria-hidden="true">≡</span>
      </button>

      {isOpen ? (
        <ul className={styles.menuList}>
          {items.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default NavMenu
