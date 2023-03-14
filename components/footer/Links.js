import Link from 'next/link';
import styles from './styles.module.scss';
export default function Links() {
  return (
    <div className={styles.footer_links}>
      {links.map((link, i) => (
        <ul>
          {i === 0 ? (
            <img src="https://i.ibb.co/qdcJDqJ/aladin-text-logoo.png" alt="" />
          ) : (
            <b>{link.heading}</b>
          )}
          {link.links.map((link) => (
            <li>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

const links = [
  {
    heading: 'ALADIN',
    links: [
      {
        name: 'About us',
        link: '',
      },
      {
        name: 'Contact us',
        link: '',
      },
      {
        name: 'Social',
        link: '',
      },
      {
        name: '',
        link: '',
      },
    ],
  },
  {
    heading: 'HELP & SUPPORT',
    links: [
      {
        name: 'Shipping Info',
        link: '',
      },
      {
        name: 'Returns',
        link: '',
      },
      {
        name: 'How To Track',
        link: '',
      },
      {
        name: 'Size Guide',
        link: '',
      },
    ],
  },
  {
    heading: 'CUSTOMER SERVICE',
    links: [
      {
        name: 'Customer Service',
        link: '',
      },
      {
        name: 'Consumers',
        link: '',
      },
      {
        name: 'Feedback',
        link: '',
      },
    ],
  },
];
