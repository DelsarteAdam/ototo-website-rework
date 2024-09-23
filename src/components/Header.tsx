import styles from "./Header.module.scss";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <img src="icons/logo.png" alt="ototo logo" className={styles.logo} />
        <ul className={styles.list}>
          <li>catalogue</li>
          <li>actualité</li>
          <li>contact</li>
        </ul>
        <SearchBar />
      </section>
    </header>
  );
}

export default Header;
