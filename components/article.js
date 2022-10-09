import styles from "./article.module.css";
import Heading from "./heading.js";

export default function Article({ children }) {
  return <div className={styles.article}>{children}</div>;
}
