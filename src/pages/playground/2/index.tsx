import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Fade } from '@components/Animation/Fade'
import Subtitle from '@components/Subtitle'
import styles from "./index.module.css"

const Playground = () => {
    const [viewportHeight, setViewportHeight] = React.useState<number>(0);
    const [innerHeight, setInnerHeight] = React.useState<number>(0);
    const [keyboardTop, setKeyboardTop] = React.useState<number>(0);
    const [keyboardBottomOffset, setKeyboardBottomOffset] = React.useState<number>(0);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        const updateViewportHeight = () => {
            if (window.visualViewport) {
                setViewportHeight(window.visualViewport.height);

                const keyboardTopPosition = window.visualViewport.offsetTop + window.visualViewport.height;
                setKeyboardTop(keyboardTopPosition);

                const bottomOffset = window.innerHeight - keyboardTopPosition;
                setKeyboardBottomOffset(bottomOffset);
            }
        };

        updateViewportHeight();

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', updateViewportHeight);
            window.visualViewport.addEventListener('scroll', updateViewportHeight);
        }

        return () => {
            if (window.visualViewport) {
                window.visualViewport.removeEventListener('resize', updateViewportHeight);
                window.visualViewport.removeEventListener('scroll', updateViewportHeight);
            }
        };
    }, []);

    React.useEffect(() => {
        const updateInnerHeight = () => {
            setInnerHeight(window.innerHeight);
        };

        updateInnerHeight();

        window.addEventListener('resize', updateInnerHeight);

        return () => {
            window.removeEventListener('resize', updateInnerHeight);
        };
    }, []);

    return (
        <div className={styles.playground_root}>
            <div
                className={styles.inner_height_visualizer}
                style={{ height: `${innerHeight}px` }}
            >
                <div className={styles.inner_height_label}>
                    window.innerHeight: {innerHeight.toFixed(2)}px
                </div>
            </div>
            <div
                className={styles.viewport_visualizer}
                style={{ height: `${viewportHeight}px` }}
            >
                <div className={styles.viewport_label}>
                    visualViewport.height: {viewportHeight.toFixed(2)}px
                </div>
            </div>
            <div
                className={styles.keyboard_top_line}
                style={{ top: `${keyboardTop}px` }}
            >
                <div className={styles.keyboard_top_label}>
                    Keyboard Top (offsetTop + height): {keyboardTop.toFixed(2)}px
                </div>
            </div>
            <div
                className={styles.keyboard_bottom_line}
                style={{ bottom: `${keyboardBottomOffset}px` }}
            >
                <div className={styles.keyboard_bottom_label}>
                    Bottom Offset (innerHeight - keyboardTop): {keyboardBottomOffset.toFixed(2)}px
                </div>
            </div>
            <div className={styles.form_container}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type here to show keyboard"
                    className={styles.input_field}
                />
            </div>
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
                    <div className={styles.long_content}>
                        <h2>Test</h2>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <h2>Test</h2>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <h2>Test</h2>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <h2>Test</h2>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <h2>Test</h2>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                        <p>
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
                        </p>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Playground2
