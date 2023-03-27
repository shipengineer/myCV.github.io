import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Warp from '../UI/Warp';
import styles from './NotFound.module.css';
const NotFound = () => {
  return (
    <React.Fragment>
      <Warp />
      <p>
        404
        <br />
        There are no information
      </p>
      <Link to='/index'>Back</Link>
    </React.Fragment>
  );
};

export default NotFound;
