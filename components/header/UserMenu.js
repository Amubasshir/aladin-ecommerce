import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import styles from './styles.module.scss';

const UserMenu = ({ session }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Aladin...</h4>
      {session ? (
        <div className={styles.flex}>
          <img className={styles.mimg} src={session.user.image} alt="" />
          <div className={styles.col}>
            <span>Welcome back, </span>
            <h3>{session.user.name}</h3>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/message">Message</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/wishlist">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
