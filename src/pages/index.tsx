import React from 'react'
import styles from './Index.module.css'
import Subtitle from '../components/Subtitle'
import { getAllPosts } from '../lib/api'
import { NextPage, InferGetStaticPropsType } from 'next'
import Card from '../components/Card'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags'])
  return {
    props: { allPosts },
  }
}

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <div>
      <div className={styles.section}>
        <Subtitle text={'Blog'} />
        <div className={styles.blogList}>
          {allPosts.map((post) => (
            <Card
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={post.title}
              summary={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
