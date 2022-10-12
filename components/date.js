import styles from "./date.module.css";

export default function PostDate({ year, month, day, smol }) {
  let tempClass = styles.date
  if (smol === true) {
    tempClass = styles.datesmol
  }
  return (
    <div className={tempClass}>
      <p className={styles.month}>{month}</p>
      <p className={styles.slash}>/</p>
      <p className={styles.day}>{day}</p>
      <p className={styles.slash}>/</p>
      <p className={styles.year}>{year}</p>
    </div>
  );
}
