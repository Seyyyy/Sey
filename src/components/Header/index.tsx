import React from 'react'
import styles from './Header.module.css'
import {SvgKyoryu} from '../atoms/Icons'

const Header = () => {
    return(
        <div className={styles.header}>
            <SvgKyoryu width={'70px'} height={'70px'}/>
            <h1 className={styles.title}>Sey</h1>
        </div>
    )
}

export default Header