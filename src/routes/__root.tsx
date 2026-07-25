import type { ReactNode } from 'react'
import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import Appbar from '@components/Appbar'
import Footer from '@components/Footer'
import styles from './root.module.css'
import appCssUrl from '../style/style.css?url'

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
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <div className={styles.root}>
        <Appbar />
        <Outlet />
        <Footer />
      </div>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
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
