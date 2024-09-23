import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <p>logo</p>
      <p>catalogue</p>
      <p>actualité</p>
      <p>contact</p>
      <p>Search</p>
    </header>
  );
}

export default Header;
