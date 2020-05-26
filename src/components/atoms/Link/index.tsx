import React from 'react'
import styles from './Link.module.css'
import Link from 'next/link'

type attribute = {
    label: string,
    href: string
}

const StyledLink: React.FC<attribute> = ({label, href}) => {
    return(
        <Link href={href}>
            <a>
                <button className={styles.link}>{label}</button>        
            </a>
        </Link>
    )
}

export default StyledLink