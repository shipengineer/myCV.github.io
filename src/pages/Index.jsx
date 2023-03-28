import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../UI/Layout';
import styles from './Index.module.css';
import subs from '../assets/img/index-substrate.png';
import AboutMeButton from '../UI/AboutMeButton';
import MyWorksButton from '../UI/MyWorksButton';
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout substrate={`url(${subs})`}>
      <div className={styles.background}>
        <div className={styles.bio}>
          <p>Artem</p>
          <p>Mysnik</p>
        </div>
        <div className={styles['div-buttons']}>
          <MyWorksButton />
          <AboutMeButton />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
