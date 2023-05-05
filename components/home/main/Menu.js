import Link from 'next/link';
import { BiCategory } from 'react-icons/bi';
import { IoIosLaptop } from 'react-icons/io';

import { menuArrays } from '../../../data/home';
import styles from './styles.module.scss';
export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a className={styles.menu__header}>
            <BiCategory />
            <b>Categories</b>
          </a>
        </li>
        <div className={styles.menu__list}>
          {menuArrays.map((item, i) => (
            <Link href={item.link} legacyBehavior>
              <a>
                {i === 0 ? <IoIosLaptop /> : ''}
                <span>{item.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
}
