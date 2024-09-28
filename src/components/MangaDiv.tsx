import styles from "./MangaDiv.module.scss";

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
  currentMangaData: data;
};

function MangaDiv({ currentMangaData }: props) {
  return (
    <div className={styles.container}>
      <img
        src={`/manga/${currentMangaData.path}/${currentMangaData.tomes[0]}`}
        alt={currentMangaData.manga_name}
      />
      <section>
        <h1>{`Nom: ${currentMangaData.manga_name}`}</h1>
        <h3>{`Auteur: ${currentMangaData.auteur}`}</h3>
        <h3>{`Illustrateur: ${currentMangaData.illustrateur}`}</h3>
        <h3>{`Theme: ${currentMangaData.theme}`}</h3>
        <h3>Resumé:</h3>
        <p>{` ${currentMangaData.resume}`}</p>
        <h3>{`Volume paru: ${currentMangaData.tomes.length}`}</h3>
        <div className={styles.volumeSection}>
          {currentMangaData.tomes.map((tome, i) => (
            <img
              src={`/manga/${currentMangaData.path}/${currentMangaData.tomes[i]}`}
              alt={currentMangaData.manga_name}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MangaDiv;
