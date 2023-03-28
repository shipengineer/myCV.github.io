import { Link } from 'react-router-dom';
import styles from './my-works-button.module.css';
const MyWorksButton = () => {
  return (
    <Link to={'/my-works'} className={styles['button-my-works']}>
      My Works
    </Link>
  );
};

export default MyWorksButton;
