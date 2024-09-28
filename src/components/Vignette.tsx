import { Link } from "react-router-dom";
import styles from "./Vignette.module.scss";

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

interface hasProps {
  manga: data;
  simple?: boolean;
  tome?: boolean;
  indexTomes?: number;
}

function Vignette({
  manga,
  simple = false,
  tome = false,
  indexTomes = 0,
}: hasProps) {
  return (
    <div className={styles.container}>
      <Link to={`/manga/${manga.manga_name.replace(/\s/g, "_").toLowerCase()}`}>
        <img
          src={`/manga/${manga.path}/${manga.tomes[indexTomes]}`}
          alt={manga.manga_name}
        />
        {!simple && <p>{manga.manga_name}</p>}
        {tome && <p>{`Volume ${indexTomes + 1}`}</p>}
      </Link>
    </div>
  );
}

export default Vignette;
