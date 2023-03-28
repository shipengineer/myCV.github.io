import { Link } from 'react-router-dom';
import styles from './BackButton.module.css';
const BackButton = (props) => {
  return (
    <Link
      to='/index'
      className={styles['button-back']}
      style={{ color: props.color, backgroundImage: props.decor }}
    >
      Back
    </Link>
  );
};

export default BackButton;
