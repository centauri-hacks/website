import styles from "./heading.module.css";

export default function Heading({ children, type, ...pageProps }) {
  console.log(children, type);
  return (
    <div className={styles.headContainer}>
      <p className={styles[type]}>{children}</p>
    </div>
  );
}
