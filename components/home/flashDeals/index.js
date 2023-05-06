import { MdFlashOn } from 'react-icons/md';
import styles from './styles.module.scss';

export default function FlashDeals() {
  return (
    <div className={styles.flashDeals}>
      <div className={styles.flashDeals__header}>
        <h1>
          FLASH SALE
          <MdFlashOn />
        </h1>
      </div>
    </div>
  );
}
