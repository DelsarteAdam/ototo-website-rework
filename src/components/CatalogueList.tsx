import styles from "./CatalogueList.module.scss";
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

const genres = ["shonen", "seinen", "mues", "other", "shojo"];

type props = {
  mangaData: data[];
};

function CatalogueList({ mangaData }: props) {
  return (
    <div className={styles.container}>
      <div className={styles.genreNav}>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>
              <a href={`#${genre}`}>{genre}</a>
            </li>
          ))}
        </ul>
      </div>
      {genres.map((genre) => (
        <div className={styles.mangaBlock}>
          {" "}
          <h2 className={styles.titleGenre} id={genre}>
            {genre}
          </h2>
          <div className={styles.mangaList}>
            {mangaData
              .filter((manga) => manga.genre == genre)
              .map((manga) => (
                <Vignette manga={manga} key={manga.manga_name} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatalogueList;
