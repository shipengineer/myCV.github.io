import React from 'react';
import styles from './Layout.module.css';
import Warp from './Warp';
const Layout = (props) => {
  return (
    <div
      style={{ backgroundImage: props.substrate }}
      className={`${styles.substrate} ${props.className}`}
    >
      <Warp />
      {props.children}
    </div>
  );
};

export default Layout;
