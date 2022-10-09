import Link from "next/link";
import styles from "./header.module.css";
import Icon from "./icon";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.innerHeader}>
        <p className={styles.logo}>Centauri Hackathon</p>
        <div className={styles.socialContainer}>
          <Icon
            iconSet="bootstrap"
            iconName="Discord"
            color="var(--color-highlight)"
            size="35"
          />

          <Icon
            iconSet="bootstrap"
            iconName="Github"
            color="var(--color-highlight)"
            size="30"
          />
        </div>
      </div>
    </div>
  );
}
