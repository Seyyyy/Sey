import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Fade } from '@components/Animation/Fade'
import Subtitle from '@components/Subtitle'
import styles from "./index.module.css"

const Playground = () => {
    return (
        <div className={styles.playground_root}>

        </div>
    )
}

const Playground2: NextPage = () => {
    return (
        <>
            <Head>
                <title>{"Visual Viewport API"}</title>
                <meta name="description" content="Practice Visual Viewport API" />
                <meta property="og:title" content={'Visual Viewport API Test'} />
            </Head>
            <Fade>
                <div className={styles.section}>
                    <Subtitle text={'Visual Viewport API'} />
                    <div>
                        <Playground />
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Playground2
