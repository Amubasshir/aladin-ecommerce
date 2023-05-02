import Link from 'next/link';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Footer from '../../components/footer';
import Header from '../../components/header';
import styles from '../../styles/signin.module.scss';

const signin = () => {
  return (
    <>
      <Header country="country" />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us! <Link href="/">Go Store</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer country="Bangladesh" />
    </>
  );
};

export default signin;
