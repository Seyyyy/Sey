import React from 'react'
import styles from './Sns.module.css'
import { SvgGithub, SvgNote, SvgTwitter } from '../atoms/Icons'

const Sns = () => {
  return (
    <div>
      <div className={styles.sns}>
        <a href="https://github.com/Seyyyy">
          <SvgGithub width={'40px'} height={'40px'} />
        </a>
        <a href="https://twitter.com/seyyyysaid">
          <SvgTwitter width={'40px'} height={'40px'} />
        </a>
        <a href="https://note.com/seyyyy">
          <SvgNote width={'40px'} height={'40px'} />
        </a>
      </div>
    </div>
  )
}

export default Sns