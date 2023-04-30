import Link from 'next/link';
import { IoLocationSharp } from 'react-icons/io5';
import styles from './styles.module.scss';
const Copyright = () => {
  return (
    <div className={styles.footer__copyright}>
      <section>
        &copy;{new Date().getFullYear()} Aladin. All right reserved.
      </section>
      <section>
        <ul>
          {data.map((link) => (
            <li>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> Bangladesh
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
const data = [
  {
    name: 'Privacy & Cookie Policy',
    link: '',
  },
  {
    name: 'Manage Cookie',
    link: '',
  },
  {
    name: 'Privacy Center',
    link: '',
  },
  {
    name: 'Terms & Conditions',
    link: '',
  },
  {
    name: 'Copyright Notice',
    link: '',
  },
];

export default Copyright;
