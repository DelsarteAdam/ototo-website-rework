import styles from "./SearchResults.module.scss";

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
};

function SearchResults({ mangaSearchList }: props) {
  return (
    <div className={styles.searchContainer}>
      {mangaSearchList.map((manga) => (
        <p>{manga.manga_name}</p>
      ))}
    </div>
  );
}

export default SearchResults;
