import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';

import Link from 'next/link';
import { Pagination } from 'swiper';
import { offersArray } from '../../../data/home';

export default function Offers() {
  return (
    <div className={styles.offers}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="offers_swiper"
      >
        {offersArray.map((offer) => (
          <SwiperSlide>
            <Link href="/">
              <img src={offer.image} alt="" />
            </Link>
            <span>$ {offer.price}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
