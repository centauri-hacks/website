import Link from "./link.js";
import styles from "./header.module.css";
import Icon from "./icon";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.innerHeader}>
        <Link classd={`${styles.logo}`} href="/">
          Centauri
        </Link>
        <div className={styles.socialContainer}>
          <Link href="about-us">About Us</Link>
          <Link href="countdown">Countdown</Link>
          <Link href="blog">Blog</Link>
          <Link href="https://github.com/centauri-hacks">
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
