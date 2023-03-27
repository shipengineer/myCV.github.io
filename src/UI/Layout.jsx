import React, { useEffect, useState } from 'react';
import styles from './Layout.module.css';
import Warp from './Warp';
const Layout = (props) => {
  return (
    <React.Fragment>
      <Warp />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
