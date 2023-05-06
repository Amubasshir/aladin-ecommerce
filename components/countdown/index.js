import styles from './styles.module.scss';
export default function Countdown() {
  return (
    <div className={styles.countdown}>
      <span>1</span>
      <span>1</span>
      <b>:</b>
      <span>2</span>
      <span>7</span>
      <b>:</b>
      <span>0</span>
      <span>7</span>
    </div>
  );
}
