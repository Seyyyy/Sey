import styles from './Appbar.module.css'
import { SvgKyoryu } from '../atoms/Icons'
import Link from 'next/link'

const Appbar = () => {
  return (
    <div className={styles.root}>
      <a href={'/'}>
        <div className={styles.titleRoot}>
          <SvgKyoryu width={'36px'} height={'36px'} />
          <h1 className={styles.titleText}>Sey</h1>
        </div>
      </a>
    </div>
  )
}

export default Appbar
