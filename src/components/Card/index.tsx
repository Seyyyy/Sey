import styles from './Card.module.css'

type CardProps = {
  title: string
  href: string
  summary: string
}

const Card = (props: CardProps) => {
  return (
    <a href={props.href} className={styles.link}>
      <div className={styles.root}>
        <p>{props.title}</p>
        <p>{props.summary}</p>
      </div>
    </a>
  )
}

export default Card
