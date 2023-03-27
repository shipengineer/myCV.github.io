import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../UI/Layout';
import styles from './Index.module.css';
import sea from '../assets/img/index-backgorund-img.png';
const Index = () => {
  return (
    <React.Fragment>
      <img src={sea} alt='sea' className={styles['background-image']} />
      <div className={styles.background}>
        <div className={styles.bio}>
          <p>Artem</p>
          <p>Mysnik</p>
        </div>
        <div className={styles['div-buttons']}>
          <Link to={'/my-works'} className={styles['button-my-works']}>
            My Works
          </Link>

          <Link to={'/about-me'} className={styles['button-back']}>
            About Me
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
