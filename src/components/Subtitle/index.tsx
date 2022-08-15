import React from 'react'
import styles from './Subtitle.module.css'

type attribute = {
    text: string
}

const Subtitle: React.FC<attribute> = ({text}) => {
    return(
        <h2 className={styles.subtitle}>{text}</h2>
    )
}

export default Subtitle