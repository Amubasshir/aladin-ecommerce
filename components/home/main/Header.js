import Link from 'next/link';
import styles from './styles.module.scss';
export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="">Free Delivery</Link>
        </li>
        <li>
          <Link href="">Golden Hour</Link>
        </li>
        <li>
          <Link href="">Upto 70% Off</Link>
        </li>
      </ul>
    </div>
  );
}
