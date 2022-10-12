import styles from "./layout.module.css";
import Article from "./article.js";
import Card from "./card.js";
import Details from "./details.js";

export default function Layout({ children, title, author, date }) {
  const { day, month, year } = date;

  return (
    <div className={styles.layout}>
      <Article>
        <Card type="regular">{title}</Card>
        <Details author={author} day={day} month={month} year={year} />
        <div className={styles.sep}></div>
        {children}
      </Article>
    </div>
  );
}
