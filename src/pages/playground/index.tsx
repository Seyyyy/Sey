import { NextPage } from 'next'
import Head from 'next/head'
import { Fade } from '@components/Animation/Fade'
import Subtitle from '@components/Subtitle'
import styles from "./index.module.css"
import Card from '@components/Card'

const Playground: NextPage = () => {
    return (
        <>
            <Head>
                <title>{"Playground"}</title>
                <meta name="description" content="playground" />
                <meta property="og:title" content={'Sey'} />
            </Head>
            <Fade>
                <div className={styles.section}>
                    <Subtitle text={'Playground'} />
                    <div className={styles.list}>
                        <Card
                            href={`/playground/1`}
                            title={"Gemini Nano"}
                            createdAt={"2024-09-14"}
                            tags={["Google Chrome"]}
                        />
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Playground