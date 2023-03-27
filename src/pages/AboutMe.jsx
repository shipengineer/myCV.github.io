import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Warp from '../UI/Warp';
import styles from './AboutMe.module.css';
import sky from '../assets/img/sky-new.png';
const AboutMe = () => {
  return (
    <React.Fragment>
      <Warp />
      <div>
        <img src={sky} alt='background-sky' className={styles.sky} />
      </div>

      <div className={styles['buttons-div-wrapper']}>
        <div className={styles['buttons-div']}>
          <Link to='/index' className={styles['button-back']}>
            Back
          </Link>
          <Link to='/my-works' className={styles['button-my-works']}>
            My Works
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
