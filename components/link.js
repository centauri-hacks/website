import NextLink from "next/link";
import styles from "./link.module.css";

export default function Link({ children, href, smol,...props }) {
  console.log(children, href)
  let tempClass = styles.link
  if (smol === true) {
    tempClass = styles.smol
  }

  const el = (
    <NextLink href={`${href}`} passHref>
      <a className={tempClass} href={`${href}`}>
        {children}
      </a>
    </NextLink>
  );

  console.log(el)
  return el;
}
