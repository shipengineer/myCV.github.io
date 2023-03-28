import { Link } from 'react-router-dom';
import styles from './my-works-button.module.css';
const MyWorksButton = (props) => {
  return (
    <Link
      to={'/my-works'}
      className={styles['button-my-works']}
      style={{ color: props.color, backgroundColor: props.decor }}
    >
      My Works
    </Link>
  );
};

export default MyWorksButton;
