import React, { useEffect } from 'react';
import styles from './AboutMe.module.css';
import BackButton from '../UI/BackButton';
import Layout from '../UI/Layout';
import subs from '../assets/img/about-me-substrate.png';
import myPhoto from '../assets/img/bio-photo.jpg';
import MyWorksButton from '../UI/MyWorksButton';
import musesPhoto from '../assets/img/muses-photo.jpg';
const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout substrate={`url(${subs})`}>
      <div className={styles.background}>
        <img src={myPhoto} alt='Artem' className={styles['bio-photo']} />
        <div className={styles['bio-text']}>
          <h2 style={{ textIndent: '0px' }}>Mysnik Artem </h2>
          <h3>Hello there</h3>
          <p>
            As you can see according to my CV-site I'm just start my way into
            WEB technologies. But from the first clock app I have quickly figure
            out this goosebumps in the compilation moment. And after this you
            can see your imagination's wonders.
          </p>
          <h3>My technology stack</h3>
          <p>
            I've start from JavaScript & CSS & HTML. Nowtime I'm in active
            educational process of ReactJS stack, like "react-router", Redux,
            "Styled components".
          </p>
          <p>
            In near future I want to obtain knowledge's about Full-stack
            developing.
          </p>
          <p>
            {' '}
            First it will be TypeScript and Node.js. After that I'll sharp
            preprocessors CSS, CRMs.
          </p>{' '}
          <p>
            {' '}
            And, of course, I wouldn't stop my "base" education. Without this
            Trinity (HTML && JS && CSS), there no place for quality skill's in
            making people's imagination materialaize{' '}
          </p>
          <h2 style={{ textIndent: '0px' }}>My muses</h2>
          <img className={styles['muses-photo']} src={musesPhoto} alt='muses' />
        </div>
        <div className={styles['buttons-div-wrapper']}>
          <div className={styles['buttons-div']}>
            <BackButton />
            <MyWorksButton />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
