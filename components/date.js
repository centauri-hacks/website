import styles from "./date.module.css";

export default function Date({ year, month, day }) {
  return (
    <div className={styles.date}>
      <p className={styles.month}>{month}</p>
      <p className={styles.slash}>/</p>
      <p className={styles.day}>{day}</p>
      <p className={styles.slash}>/</p>
      <p className={styles.year}>{year}</p>
    </div>
  );
}
