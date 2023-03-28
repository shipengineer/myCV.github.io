import React, { useEffect } from 'react';
import styles from './AboutMe.module.css';
import BackButton from '../UI/BackButton';
import Layout from '../UI/Layout';
import subs from '../assets/img/about-me-substrate.png';
import MyWorksButton from '../UI/MyWorksButton';
const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout substrate={`url(${subs})`}>
      <div className={styles.background}></div>
      <div className={styles['buttons-div-wrapper']}>
        <div className={styles['buttons-div']}>
          <BackButton />
          <MyWorksButton />
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
