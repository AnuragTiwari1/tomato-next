import styles from "../styles/components/header.module.css";
import Link from "next/Link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles["logo-container"]}>
          <img
            src="https://b.zmtcdn.com/images/developers/zomato-developers-logo.png?output-format=webp"
            alt="Zomato for Developers"
            class={styles.logo}
          />
        </a>
      </Link>
      <ul className={styles.nav} role="navigation">
        <li className={styles["nav-links"]}>
          <Link href="/restaurants">
            <a>restaurants</a>
          </Link>
        </li>
        <li className={styles["nav-links"]}>
          <Link href="/cuisines">
            <a>cuisines</a>
          </Link>
        </li>
        <li className={styles["nav-links"]}>
          <Link href="/recipes">
            <a>recipes</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};
