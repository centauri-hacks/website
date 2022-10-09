import styles from "./details.module.css";
import PostDate from "./date.js";

export default function Details({ author, month, day, year }) {
  return (
    <div className={styles.details}>
      <p>By </p>
      <p className={styles.author}>{author}</p>
      <p className={styles.sep}></p>
      <PostDate year={year} month={month} day={day} />
    </div>
  );
}
