import styles from "./Card.module.css";
import { Link } from "@tanstack/react-router";

type CardProps = {
  title: string;
  href: string;
  createdAt: string;
  tags?: string[];
};

const Card = (props: CardProps) => {
  return (
    <Link to={props.href} className={styles.link}>
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
  );
};

export default Card;
