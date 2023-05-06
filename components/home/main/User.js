import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

import { EffectCards, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { userSwiperArray } from '../../../data/home';

export default function User() {
  const { data: session } = useSession();
  return (
    <div className={styles.user}>
      <img src="https://i.ibb.co/60S0Tjf/u1.webp" alt="" />
      <div className={styles.user__container}>
        {session ? (
          <div className={styles.user__infos}>
            <img src={session.user.image} alt="" />
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.user__infos}>
            <img src="https://i.ibb.co/J3Df2GZ/avatar.png" alt="" />
            <div className={styles.user__infos_btn}>
              <button>Register</button>
              <button>Log in</button>
            </div>
          </div>
        )}
        <ul className={styles.user__links}>
          <li>
            <Link href="/profile" legacyBehavior>
              <a>
                <IoSettingsOutline />
              </a>
            </Link>
          </li>
          <li>
            <Link href="" legacyBehavior>
              <a>
                <HiOutlineClipboardList />
              </a>
            </Link>
          </li>
          <li>
            <Link href="" legacyBehavior>
              <a>
                <AiOutlineMessage />
              </a>
            </Link>
          </li>
          <li>
            <Link href="" legacyBehavior>
              <a>
                <BsHeart />
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.user__swiper}>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            Navigation={true}
            modules={[EffectCards, Navigation]}
            className="userMenu__swiper"
            style={{ maxWidth: '180px' }}
          >
            {userSwiperArray.map((item) => (
              <SwiperSlide>
                <Link href="">
                  <img src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
