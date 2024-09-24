import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <Link to="/" className={styles.logoLink}>
          <img src="icons/logo.png" alt="ototo logo" className={styles.logo} />
        </Link>
        <div className={styles.container}>
          <ul className={styles.list}>
            <li>
              <NavLink
                to="/catalogue"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                catalogue
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/actualite"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                actualité
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                contact
              </NavLink>
            </li>
          </ul>
          <SearchBar />
        </div>
      </section>
    </header>
  );
}

export default Header;
