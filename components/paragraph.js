import styles from "./paragraph.module.css";

export default function Paragraph({ children }) {
  return (
    <div className={styles.paragraph}>
      <p className={styles.inner}>{children}</p>
    </div>
  );
}
