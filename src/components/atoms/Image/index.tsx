import React from 'react'
import styles from './Image.module.css'

type attribute = {
    src: string,
    alt: string
}

const Image: React.FC<attribute> = ({src, alt}) => {
    return(
        <img src={src} alt={alt} className={styles.image}/>
    )
}

export default Image