import DotLoader from 'react-spinners/DotLoader';
import styles from './styles.module.scss';

export default function DotLoaderSpinner({ loading }) {
  return (
    <div className={styles.loader}>
      <DotLoader color="#f85606" loading={loading} />
    </div>
  );
}
