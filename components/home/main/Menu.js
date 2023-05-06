import Link from 'next/link';
import { BiCategory } from 'react-icons/bi';
import { GoDeviceDesktop } from 'react-icons/go';
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
            <li>
              <Link href={item.link} legacyBehavior>
                <a>
                  {i === 0 ? (
                    <IoIosLaptop />
                  ) : i === 1 ? (
                    <GoDeviceDesktop />
                  ) : (
                    ''
                  )}
                  <span>{item.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
