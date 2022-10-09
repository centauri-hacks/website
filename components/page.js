import Header from "./header.js";
import styles from "./page.module.css";

export default function Page({ children }) {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.sep}>{children}</div>
    </div>
  );
}
