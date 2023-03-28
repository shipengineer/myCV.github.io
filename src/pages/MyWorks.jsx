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
        <p style={{ fontSize: 'large' }}>
          I'm in decoration process, but you can find some of my work here:
        </p>

        <a href='https://github.com/shipengineer'>
          {' '}
          <svg
            height='32'
            aria-hidden='true'
            viewBox='0 0 16 16'
            version='1.1'
            width='32'
            data-view-component='true'
          >
            <path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'></path>
          </svg>
        </a>
        <p>and here:</p>
        <a
          href='https://www.codewars.com/users/shipengineer'
          className={styles.codewars}
        >
          My CodeWars
        </a>
        <img
          src='https://www.codewars.com/users/shipengineer/badges/large'
          alt='CodeWars'
          style={{ width: '350px' }}
        />
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
