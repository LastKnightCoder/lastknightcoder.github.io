import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import ArticleCatdList from '../components/ArticleCardList';

const articleData = require('../latestPost');

const HomeHeader = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.tagline}>{siteConfig.tagline}</div>
        <div className={styles.title}>{siteConfig.title}</div>
      </div>
      <div className={styles['right-image']}>
        <img src="https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/15433.3jsxzbw2fii0.webp" />
      </div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Blog Doc">
      <main>
        <div className={styles.container}>
          <HomeHeader />
          <ArticleCatdList data={articleData.slice(0, 10)} />
        </div>
      </main>
    </Layout>
  );
}
