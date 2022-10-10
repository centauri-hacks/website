import Link from "./link.js";
import styles from "./header.module.css";
import Icon from "./icon";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.innerHeader}>
        <Link classd={`${styles.logo}`} hrefd="/">
          Centauri Hackathon
        </Link>
        <div className={styles.socialContainer}>
          <Link hrefd="blog">Blog</Link> 
          <Link hrefd="https://github.com/centauri-hacks">
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
