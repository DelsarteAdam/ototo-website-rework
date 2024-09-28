import { useLocation, Link, NavLink } from "react-router-dom";
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
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [mangaSearchList, setMangaSearchList] = useState<data[]>(stockData);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    const isStockData = JSON.stringify(mangaData) === JSON.stringify(stockData);
    if (!isStockData) {
      setIsLoading(false);
    }
  }, [mangaData]);

  useEffect(() => {
    setSearchVisible(false);
  }, [location]);

  if (isLoading) return <Loader />;

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value == "") {
      setSearchVisible(false);
    } else {
      setSearchVisible(true);
    }
    setMangaSearchList(searchManga(e.target.value));
  }

  function searchManga(query: string): data[] {
    const lowerCaseQuery = query.toLowerCase();

    const results = mangaData.filter((manga) =>
      manga.manga_name.toLowerCase().includes(lowerCaseQuery)
    );

    // Shuffle the filtered results using Fisher-Yates algorithm
    for (let i = results.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [results[i], results[j]] = [results[j], results[i]]; // Swap elements
    }

    return results.slice(0, 5);
  }

  function handleFocusParent(e: React.FocusEvent<HTMLInputElement, Element>) {
    if (e.target.value != "") {
      setSearchVisible(true);
    }
  }

  function handleEscape() {
    setSearchVisible(false);
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
              handleFocusParent={handleFocusParent}
            />
          </div>
        </section>
      </header>
      {searchVisible && (
        <SearchResults
          mangaSearchList={mangaSearchList}
          handleEscape={handleEscape}
        />
      )}
    </>
  );
}

export default Header;
