import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Warp from '../UI/Warp';
import styles from './MyWorks.module.css';
const MyWorks = () => {
  return (
    <React.Fragment>
      <Warp />

      <Link to='/index'>Back</Link>
    </React.Fragment>
  );
};

export default MyWorks;
