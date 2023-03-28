import React, { useEffect } from 'react';
import BackButton from '../UI/BackButton';
import Layout from '../UI/Layout';
import subs from '../assets/img/my-work-substrate.png';
import styles from './MyWorks.module.css';
import AboutMeButton from '../UI/AboutMeButton';
import backDecor from '../assets/img/green-back.svg';
import aboutMeDecor from '../assets/img/abou-me-green.png';
const MyWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout substrate={`url(${subs})`}>
      <div className={styles.background}>
        <div className={styles['buttons-div-wrapper']}>
          <div className={styles['buttons-div']}>
            <BackButton />
            <AboutMeButton />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyWorks;
