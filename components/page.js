import Header from "./header.js";
import styles from "./page.module.css";
import Head from 'next/head'

export default function Page({ children }) {
  return (
    <div className={styles.page}>
      <Head>
        <title>Centarui Hacks</title>
        <meta name="description" content="Centarui Hackathon 2022 a hackathon run by students"></meta>
      </Head>
      <Header />
      <div className={styles.sep}>{children}</div>
    </div>
  );
}
