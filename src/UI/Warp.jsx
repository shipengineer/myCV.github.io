import styles from './Warp.module.css';
import warpImage from '../assets/img/warp.gif';
import { createPortal } from 'react-dom';
const Warp = () => {
  return createPortal(
    <img src={warpImage} alt='loading' className={styles.warp} />,
    document.getElementById('warp')
  );
};

export default Warp;
