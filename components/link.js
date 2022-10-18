import NextLink from "next/link";
import styles from "./link.module.css";

export default function Link({ children, href, aria, smol,...props }) {
  console.log(children, href)
  let tempClass = styles.link
  if (smol === true) {
    tempClass = styles.smol
  }

  const el = (
    <NextLink href={`${href}`} passHref>
      <a className={tempClass} href={`${href}`} aria-label = {aria}>
        {children}
      </a>
    </NextLink>
  );
  return el;
}
