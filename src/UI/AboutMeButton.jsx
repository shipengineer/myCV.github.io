import { Link } from 'react-router-dom';
import styles from './about-me-button.module.css';
const AboutMeButton = (props) => {
  return (
    <Link
      to={'/about-me'}
      className={styles['about-me-button']}
      style={{ color: props.color, backgroundColor: props.decor }}
    >
      About Me
    </Link>
  );
};

export default AboutMeButton;
