import type { ReactNode } from 'react'
import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import Appbar from '@components/Appbar'
import Footer from '@components/Footer'
import { Fade } from '@components/Animation/Fade'
import styles from './root.module.css'
import appCssUrl from '../style/style.css?url'

const THEME_INIT_SCRIPT = `;(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s||(d?'dark':'light');if(!s)localStorage.setItem('theme',t);document.documentElement.classList.add(t);}catch(_){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      { title: 'Sey' },
      { property: 'og:site_name', content: 'Sey' },
      { property: 'og:url', content: 'https://seyyyy.com' },
      { name: 'description', content: "Sey's Portfolio" },
    ],
    links: [
      { rel: 'stylesheet', href: appCssUrl },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
    scripts: [{ children: THEME_INIT_SCRIPT }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Fade>
        <div className={styles.root}>
          <Appbar />
          <Outlet />
          <Footer />
        </div>
      </Fade>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <p>This page uses javascript. Please enable javascript.</p>
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
