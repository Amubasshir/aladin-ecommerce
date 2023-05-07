import Link from 'next/link';
import { BiCategory } from 'react-icons/bi';
import { BsBuildingAdd, BsPhone, BsProjector, BsRouter } from 'react-icons/bs';
import { CgSmartHomeWashMachine } from 'react-icons/cg';
import { GiCooler } from 'react-icons/gi';
import { GoDeviceDesktop } from 'react-icons/go';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import { IoIosLaptop } from 'react-icons/io';
import { MdOutlineKeyboardAlt } from 'react-icons/md';

import { CiMonitor, CiSpeaker } from 'react-icons/ci';
import { IoGameControllerOutline } from 'react-icons/io5';
import { RiCameraSwitchLine } from 'react-icons/ri';
import { SiMicrosoftoffice, SiUps } from 'react-icons/si';
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
                    <GoDeviceDesktop />
                  ) : i === 1 ? (
                    <IoIosLaptop />
                  ) : i === 2 ? (
                    <HiOutlineCpuChip />
                  ) : i === 3 ? (
                    <MdOutlineKeyboardAlt />
                  ) : i === 4 ? (
                    <BsPhone />
                  ) : i === 5 ? (
                    <CiMonitor />
                  ) : i === 6 ? (
                    <BsRouter />
                  ) : i === 7 ? (
                    <IoGameControllerOutline />
                  ) : i === 8 ? (
                    <BsBuildingAdd />
                  ) : i === 9 ? (
                    <RiCameraSwitchLine />
                  ) : i === 10 ? (
                    <BsProjector />
                  ) : i === 11 ? (
                    <CiSpeaker />
                  ) : i === 12 ? (
                    <SiUps />
                  ) : i === 13 ? (
                    <CgSmartHomeWashMachine />
                  ) : i === 14 ? (
                    <GiCooler />
                  ) : i === 15 ? (
                    <SiMicrosoftoffice />
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
