import React from "react";
import ArticleCard from "../AtricleCard";
import type { CardProps } from '../AtricleCard';
// @ts-ignore
import styles from './index.module.css';

type ListProps = {
  data: CardProps[]
}

const ArticleCatdList = (props: ListProps) => {
  const { data } = props;
  return (
    <div>
      <div className={styles.lastestTitle}>最新文章</div>
      <div className={styles.articleCardList}>
        {
          data.map((item: CardProps, index: number) => <ArticleCard key={index} {...item} />)
        }
      </div>
    </div>
  )
}

export default ArticleCatdList
