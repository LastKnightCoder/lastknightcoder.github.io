import React from "react";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import styles from './index.module.css';

export type CardProps = {
  image: string,
  title: string,
  description: string,
  author: string,
  time: string,
  link: string,
}

const ArticleCard = (props: CardProps) => {
  const cardStyle = {
    backgroundImage: `url('${props.image}')`
  };
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleImage} style={cardStyle}></div>
      <div className={styles.articleTitle}>
        <Link to={props.link}>{props.title}</Link>
      </div>
      <div className={styles.articleDescription}>{props.description}</div>
      <div className={styles.articleAuthor}>{props.author}</div>
      <div className={styles.articleTime}>{props.time}</div>
    </div>
  )
}

export default ArticleCard;
