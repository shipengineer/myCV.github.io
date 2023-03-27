import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../UI/Layout';
import styles from './Index.module.css';
const Index = () => {
  return (
    <React.Fragment>
      <div className={styles.background}>
        <div className={styles.bio}>
          <p>Artem</p>
          <p>Mysnik</p>
        </div>
        <ul>
          <Link to={'/my-works'} className={styles.button}>
            My Works
          </Link>

          <Link to={'/about-me'} className={styles.button}>
            About Me
          </Link>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Index;
