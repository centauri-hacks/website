import NextLink from "next/link";
import styles from "./link.module.css";

export default function Link({ children, hrefd, classd }) {
  if (hrefd === undefined) {
    hrefd = "#";
  }
  const el = (
    <NextLink href={hrefd} passHref>
      <a className={`${styles.link} ${classd}`}>{children}</a>
    </NextLink>
  );

  console.log(el);

  return el;
}
