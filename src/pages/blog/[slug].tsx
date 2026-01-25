import { NextPage, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import Head from 'next/head'
import styles from './slug.module.css'
import { Fade } from '@components/Animation/Fade'
import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, [
    'slug',
    'title',
    'createdAt',
    'updatedAt',
    'tags',
  ])

  return {
    props: {
      post,
    },
  }
}

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  // MDXコンポーネントを動的インポート
  const MDXContent = dynamic(() => import(`../../../posts/${post.slug}.mdx`))

  return (
    <div className={styles.root}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="blog" />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:url"
          content={`https://seyyyy.com/blog/${post.slug}`}
        />
      </Head>
      <Fade>
        <main>
          <article>
            <h1 className={styles.title}>{post.title}</h1>
            <div>
              <p className={styles.date}>{`作成日：${post.createdAt}`}</p>
              {post.updatedAt ? (
                <p className={styles.date}>{`更新日：${post.updatedAt}`}</p>
              ) : (
                <></>
              )}
              <MDXProvider>
                <MDXContent />
              </MDXProvider>
            </div>
          </article>
        </main>
      </Fade>
    </div>
  )
}

export default Post
