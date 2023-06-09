import { MdFlashOn } from 'react-icons/md';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { flashDealArray } from '../../../data/home';
import Countdown from '../../countdown';
import FlashCard from './Card';
import styles from './styles.module.scss';

export default function FlashDeals() {
  return (
    <div className={styles.flashDeals}>
      <div className={styles.flashDeals__header}>
        <h1>
          FLASH SALE
          <MdFlashOn />
        </h1>
        <Countdown date={new Date(2023, 7, 11)} />
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="flashDeals__swiper"
          breakpoints={{
            450: {
              slidesPerView: 2,
            },
            630: {
              slidesPerView: 3,
            },
            920: {
              slidesPerView: 4,
            },
            1234: {
              slidesPerView: 5,
            },
            1520: {
              slidesPerView: 6,
            },
          }}
        >
          <div className={styles.flashDeals__list}>
            {flashDealArray.map((product, i) => (
              <SwiperSlide>
                <FlashCard product={product} key={i} />
              </SwiperSlide>
            ))}
          </div>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
