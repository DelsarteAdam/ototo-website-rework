import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import SearchBar from "./SearchBar";
import { useMangaApi } from "../context/useMangaApi";
import Loader from "../components/Loader";
import SearchResults from "./SearchResults";

type data = {
  manga_name: string;
  manga_serie: string;
  path: string;
  tomes: string[];
  auteur: string;
  illustrateur: string;
  genre: string;
  theme: string;
  resume: string;
};

const stockData = [
  {
    manga_name: "error",
    manga_serie: "error",
    path: "error",
    tomes: ["error"],
    auteur: "error",
    illustrateur: "error",
    genre: "error",
    theme: "error",
    resume: "error",
  },
];

function Header() {
  const mangaData = useMangaApi();

  const [isLoading, setIsLoading] = useState(true);
  const [mangaSearchList, setMangaSearchList] = useState<data[]>(stockData);

  useEffect(() => {
    const isStockData = JSON.stringify(mangaData) === JSON.stringify(stockData);
    if (!isStockData) {
      setIsLoading(false);
    }
  }, [mangaData]);

  if (isLoading) return <Loader />;

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setMangaSearchList(searchManga(e.target.value));
  }

  function searchManga(query: string): data[] {
    const lowerCaseQuery = query.toLowerCase();

    const results = mangaData
      .filter((manga) =>
        manga.manga_name.toLowerCase().includes(lowerCaseQuery)
      )
      .slice(0, 5);

    return results;
  }

  return (
    <>
      <header className={styles.header}>
        <section className={styles.section}>
          <Link to="/" className={styles.logoLink}>
            <img
              src="/icons/logo.png"
              alt="ototo logo"
              className={styles.logo}
            />
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
            <SearchBar
              height={"50px"}
              color={"#f0c345"}
              fill={"#000000"}
              searchIconSize={60}
              maxWidth={"200px"}
              leftPosition={false}
              handleSearchInput={handleSearchInput}
            />
          </div>
        </section>
      </header>
      <div>
        <SearchResults mangaSearchList={mangaSearchList} />
      </div>
    </>
  );
}

export default Header;
