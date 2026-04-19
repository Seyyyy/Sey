import { createFileRoute } from '@tanstack/react-router'
import { getAllPosts } from '../lib/api'
import Subtitle from '@components/Subtitle'
import Card from '@components/Card'
import { Fade } from '@components/Animation/Fade'
import styles from './index.module.css'

export const Route = createFileRoute('/')({
  loader: () => getAllPosts(['slug', 'title', 'createdAt', 'updatedAt', 'tags']),
  head: () => ({ meta: [{ title: 'Sey' }] }),
  component: Home,
})

function Home() {
  const allPosts = Route.useLoaderData()

  return (
    <Fade>
      <div className={styles.section}>
        <Subtitle text={'Blog'} />
        <div className={styles.blogList}>
          {allPosts.map((post) => (
            <Card
              key={post.slug as string}
              href={`/blog/${post.slug}`}
              title={post.title as string}
              createdAt={post.createdAt as string}
              tags={post.tags as string[]}
            />
          ))}
        </div>
      </div>
    </Fade>
  )
}
