import Main from './Main';
import styles from './styles.module.scss';
import Top from './Top';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <Add /> */}
      <Top />
      <Main />
    </header>
  );
};

export default Header;
