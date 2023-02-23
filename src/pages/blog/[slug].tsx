import { NextPage, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import { markdownToHtml } from '../../lib/markdownToHtml'
import Head from 'next/head'
import styles from './slug.module.css'
import { Fade } from '@components/Animation/Fade'

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
    'content',
    'updatedAt',
    'tags',
  ])
  const content = await markdownToHtml(post.content)

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

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
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>
        </main>
      </Fade>
    </div>
  )
}

export default Post
