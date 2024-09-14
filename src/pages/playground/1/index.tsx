import { NextPage } from 'next'
import Head from 'next/head'
import { Fade } from '@components/Animation/Fade'
import Subtitle from '@components/Subtitle'
import styles from "./index.module.css"

const Playground1: NextPage = () => {
    return (
        <>
            <Head>
                <title>{"Gemini"}</title>
                <meta name="description" content="gemini" />
                <meta property="og:title" content={'Sey'} />
            </Head>
            <Fade>
                <div className={styles.section}>
                    <Subtitle text={'Gemini'} />
                    <div>
                        <p>playground</p>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Playground1