import { useRef } from 'react'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { getPostBySlug } from '../lib/api'
import { markdownToHtml } from '../lib/markdown'
import { useStaggerReveal } from '@components/Animation/StaggerReveal/useStaggerReveal'
import styles from './blog-slug.module.css'

type PostData = {
  slug: string
  title: string
  createdAt: string
  updatedAt: string
  tags: string[]
  content: string
}

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }): Promise<PostData> => {
    const post = getPostBySlug(params.slug, [
      'slug',
      'title',
      'createdAt',
      'content',
      'updatedAt',
      'tags',
    ]) as Partial<PostData>
    if (!post.slug) throw notFound()
    const content = markdownToHtml(post.content ?? '')
    return {
      slug: post.slug,
      title: post.title ?? '',
      createdAt: post.createdAt ?? '',
      updatedAt: post.updatedAt ?? '',
      tags: post.tags ?? [],
      content,
    }
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData?.title ?? 'Sey' }],
  }),
  notFoundComponent: () => <div>This Page is not found.</div>,
  component: Post,
})

function Post() {
  const post = Route.useLoaderData()
  const contentRef = useRef<HTMLDivElement>(null)
  const pendingClass = useStaggerReveal(contentRef)

  return (
    <div className={styles.root}>
      <main>
        <article className={styles.frame}>
          <h1 className={styles.title}>{post.title}</h1>
          <div>
            <p className={styles.date}>{`作成日：${post.createdAt}`}</p>
            {post.updatedAt ? (
              <p className={styles.date}>{`更新日：${post.updatedAt}`}</p>
            ) : (
              <></>
            )}
            <div
              ref={contentRef}
              className={pendingClass}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
    </div>
  )
}
