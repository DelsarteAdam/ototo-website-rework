import styles from "./SearchResults.module.scss";
import Vignette from "./Vignette";

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

type props = {
  mangaSearchList: data[];
  handleEscape: () => void;
};

function SearchResults({ mangaSearchList, handleEscape }: props) {
  if (mangaSearchList.length == 0) {
    return (
      <div className={styles.searchContainer}>
        <div className={styles.vignetteContainer}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "90%",
              width: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="/images/NotFound404.png"
              alt="image not found"
              style={{
                height: "90%",
                width: "auto",
              }}
            />
            <h2>Manga inconnu</h2>
          </div>
        </div>
        <div className={styles.escape}>X</div>
      </div>
    );
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.vignetteContainer}>
        {mangaSearchList.map((manga) => (
          <Vignette manga={manga} key={manga.manga_name} />
        ))}
      </div>
      <div className={styles.escape} onClick={() => handleEscape()}>
        X
      </div>
    </div>
  );
}

export default SearchResults;
