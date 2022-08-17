import styles from './Card.module.css'

type CardProps = {
  title: string
  href: string
  createdAt: string
  tags?: string[]
}

const Card = (props: CardProps) => {
  return (
    <a href={props.href} className={styles.link}>
      <div className={styles.root}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.createdAt}>{props.createdAt}</p>
      </div>
      <div className={styles.tags}>
        {props.tags ? (
          props.tags.map((tag) => <span className={styles.tag}>{tag}</span>)
        ) : (
          <></>
        )}
      </div>
    </a>
  )
}

export default Card
