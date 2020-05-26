import React from 'react'
import styles from './ImageList.module.css'
import Image from '../atoms/Image'

const ImageList = () => {
    return(
        <div className={styles.image_list}>
            <Image src={'/images/test.png'} alt={'aa'} />
            <Image src={'/images/test.png'} alt={'aa'} />
            <Image src={'/images/test.png'} alt={'aa'} />
            <Image src={'/images/test.png'} alt={'aa'} />
            <Image src={'/images/test.png'} alt={'aa'} />
            <Image src={'/images/test.png'} alt={'aa'} />
            <Image src={'/images/test.png'} alt={'aa'} />
            <Image src={'/images/test.png'} alt={'aa'} />
        </div>
    )
}

export default ImageList