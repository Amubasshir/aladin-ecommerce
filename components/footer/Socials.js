import {
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsStackOverflow,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import styles from './styles.module.scss';
export default function Socials() {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>Stay connected</h3>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <BsStackOverflow />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <BsPinterest />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
