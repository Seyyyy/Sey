import React from 'react'
import styles from './Index.module.css'
import Subtitle from '../components/Subtitle'
import { getAllPosts } from '../lib/api'
import { NextPage, InferGetStaticPropsType } from 'next'
import Card from '../components/Card'
import { Fade } from '../components/Animation/Fade'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'slug',
    'title',
    'createdAt',
    'updatedAt',
    'tags',
  ])
  return {
    props: { allPosts },
  }
}

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <Fade>
      <div className={styles.section}>
        <Subtitle text={'Blog'} />
        <div className={styles.blogList}>
          {allPosts.map((post) => (
            <Card
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={post.title}
              createdAt={post.createdAt}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </Fade>
  )
}

export default Home
