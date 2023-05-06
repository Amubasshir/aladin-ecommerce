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
        <Countdown />
      </div>
      <div>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="flashDeals__swiper"
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
