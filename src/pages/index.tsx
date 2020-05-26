import React from 'react'
import styles from './Index.module.css'
import Header from '../components/Header'
import Subtitle from '../components/Subtitle'
import Link from '../components/atoms/Link'
import Sns from '../components/Sns'

const Home = () => {
  return (
    <div>
      <div className={styles.top}>
        <Header />
      </div>
      <div className={styles.profile}>
        <Subtitle text={'Profile'} />
        <div className={styles.description}>
            <p>{'Hello World!'}</p>
            <p>{'Sey(セイ)と申します。'}</p>
            <p>
              {
                '普段はイラストやコーディングをしています。波長が合うと思った人はTwitterでDMをくれたら嬉しいです。'
              }
            </p>
        </div>
        <Link label={'more details...'} href={'/profile'} />
      </div>
      <div className={styles.sns}>
        <Subtitle text={'Sns'} />
        <Sns />
      </div>
    </div>
  )
}

export default Home