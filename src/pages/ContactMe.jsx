import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../UI/Layout';
import styles from './ContactMe.module.css';
const ContactMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <p>My contacts</p>
    </Layout>
  );
};

export default ContactMe;
