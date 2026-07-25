import { createFileRoute } from '@tanstack/react-router'
import Subtitle from '@components/Subtitle'
import Card from '@components/Card'
import styles from './index.module.css'

export const Route = createFileRoute('/playground/')({
  head: () => ({ meta: [{ title: 'Playground' }] }),
  component: Playground,
})

const PLAYGROUND_CARDS = [
  { href: '/playground/1', title: 'Gemini Nano', createdAt: '2024/09/14', tag: 'Google Chrome' },
  {
    href: '/playground/2',
    title: 'Visual Viewport API',
    createdAt: '2025/10/30',
    tag: 'Browser API',
  },
]

function Playground() {
  return (
    <div className={styles.section}>
      <Subtitle text={'Playground'} />
      <div className={styles.list}>
        {PLAYGROUND_CARDS.map((card) => (
          <Card
            key={card.href}
            href={card.href}
            title={card.title}
            createdAt={card.createdAt}
            tags={[card.tag]}
          />
        ))}
      </div>
    </div>
  )
}
