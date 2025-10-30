import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Fade } from '@components/Animation/Fade'
import Subtitle from '@components/Subtitle'
import styles from "./index.module.css"

const Playground = () => {
    const [viewportHeight, setViewportHeight] = React.useState<number>(0);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        const updateViewportHeight = () => {
            if (window.visualViewport) {
                setViewportHeight(window.visualViewport.height);
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
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.overscrollBehavior = "contain";
        document.body.style.overflow = 'hidden';
        const preventTouchMove = (e: TouchEvent) => {
            e.preventDefault();
        };

        document.addEventListener('touchmove', preventTouchMove, { passive: false });

        return () => {
            document.documentElement.style.overflow = '';
            document.documentElement.style.overscrollBehavior = "";
            document.body.style.overflow = '';
            document.removeEventListener('touchmove', preventTouchMove);
        };
    }, []);

    return (
        <div className={styles.playground_root}>
            <div
                className={styles.viewport_visualizer}
                style={{ height: `${viewportHeight}px` }}
            >
                <div className={styles.viewport_label}>
                    visualViewport.height: {viewportHeight.toFixed(2)}px
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
                </div>
            </Fade>
        </>
    )
}

export default Playground2
