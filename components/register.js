import styles from "./register.module.css";
import NextLink from "next/link";

export default function Register() {
  return (
    <NextLink href='/register' passHref>
      <a id={styles.button} href='/register' aria-label = 'register'>
        Register
      </a>
    </NextLink>
  );
}
