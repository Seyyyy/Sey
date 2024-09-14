import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Fade } from '@components/Animation/Fade'
import Subtitle from '@components/Subtitle'
import styles from "./index.module.css"

const Playground = () => {
    const [text, setText] = React.useState<string>("")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClick = () => {
        console.log(text)
    }

    return (
        <>
            <input type="text" value={text} onChange={onChange} />
            <button onClick={onClick}>submit</button>
        </>
    )
}

const Playground1: NextPage = () => {
    return (
        <>
            <Head>
                <title>{"Gemini Nano"}</title>
                <meta name="description" content="Practice Gemini Nano" />
                <meta property="og:title" content={'Sey'} />
            </Head>
            <Fade>
                <div className={styles.section}>
                    <Subtitle text={'Gemini Nano'} />
                    <div>
                        <Playground />
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Playground1