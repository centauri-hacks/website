import Link from "./link.js";
import styles from "./header.module.css";
import Icon from "./icon";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.innerHeader}>
        <Link classd={`${styles.logo}`} href="/" aria = 'home page'>
          Centauri
        </Link>
        <div className={styles.socialContainer}>
          <Link href="aboutus" aria = 'About Us'>About Us</Link>
          <Link href="countdown" aria = 'Countdown'>Countdown</Link>
          <Link href="blog" aria = 'Blog'>Blog</Link>
          <Link href="https://github.com/centauri-hacks" aria = 'our github'>
            <Icon
              iconSet="bootstrap"
              iconName="Github"
              color="var(--color-highlight)"
              size="30"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
