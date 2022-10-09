import Link from "next/link";
import styles from "./card.module.css";

export default function Card({ children, type }) {
  function getCard() {
    if (type === "small") {
      return (
  <div className={styles.smallCard}>
          <p className={styles.smallCardTitle}>{children}</p>
        </div>
      );
    } else {
      return (
        <div className={styles.card}>
          <p className={styles.cardTitle}>{children}</p>
        </div>
      );
    }
  }
  return getCard();
}
