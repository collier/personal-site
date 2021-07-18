import classNames from 'classnames/bind';
import styles from '../styles/Hamburger.module.css';

const cx = classNames.bind(styles);

type Props = {
  showClose: boolean;
};

export default function Hamburger({ showClose }: Props) {
  return (
    <svg
      className={cx('svg', { close: showClose, open: !showClose })}
      viewBox="0 0 100 80"
      width="1.75rem"
      height="1.75rem"
    >
      <rect className={styles.top} width="100" height="10"></rect>
      <rect className={styles.middle} y="30" width="100" height="10"></rect>
      <rect className={styles.bottom} y="60" width="100" height="10"></rect>
    </svg>
  );
}
