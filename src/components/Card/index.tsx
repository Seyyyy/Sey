import styles from './Card.module.css'
import Link from 'next/link'

type CardProps = {
  title: string
  href: string
  createdAt: string
  tags?: string[]
}

const Card = (props: CardProps) => {
  return (
    <Link href={props.href} className={styles.link}>
      <div className={styles.root}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.createdAt}>{props.createdAt}</p>
      </div>
      <div className={styles.tags}>
        {props.tags ? (
          props.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))
        ) : (
          <></>
        )}
      </div>
    </Link>
  )
}

export default Card
