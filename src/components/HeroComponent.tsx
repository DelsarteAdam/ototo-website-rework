import { useEffect, useState } from "react";
import styles from "./HeroComponent.module.scss";
import { Link } from "react-router-dom";

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
  mangaData: data[];
};

function selectRandom(mangaData: data[]) {
  const arr = [];
  const mangaTotal = mangaData.length;
  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * mangaTotal);
    arr.push(mangaData[random]);
  }

  return arr;
}

function HeroComponent({ mangaData }: props) {
  const [arrHero, setArrHero] = useState<data[]>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 5);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setArrHero(selectRandom(mangaData));
  }, [mangaData]);

  if (!arrHero || arrHero.length < 5) {
    // Render a fallback while `arrHero` is being populated or insufficient items
    return <div>Loading...</div>;
  }

  function handleNext() {
    setCount((prevCount) => {
      if (prevCount < 4) {
        return prevCount + 1;
      }
      return prevCount;
    });
  }

  function handlePrevious() {
    setCount((prevCount) => {
      if (prevCount > 1) {
        return prevCount - 1;
      }
      return prevCount;
    });
  }

  return (
    <div className={styles.heroContainer}>
      <button className={styles.previous} onClick={() => handlePrevious()}>
        ⟪
      </button>
      <div className={styles.divLeft}>
        <img
          src={`/manga/${arrHero[(count + 4) % 5].path}/${
            arrHero[(count + 4) % 5].tomes[0]
          }`}
          alt={arrHero[(count + 4) % 5].manga_name}
          key={`left-${arrHero[(count + 4) % 5].manga_name}`}
          className={`${styles.left}`}
        />
        <div className={styles.divInfo}>
          <h1>{arrHero[(count + 4) % 5].manga_name}</h1>
          <Link
            to={`/manga/${arrHero[(count + 4) % 5].manga_name
              .replace(/\s/g, "_")
              .toLowerCase()}`}
          >
            <button>Plus d'info</button>
          </Link>
        </div>
      </div>
      <div className={styles.divMiddle}>
        <img
          src={`/manga/${arrHero[count].path}/${arrHero[count].tomes[0]}`}
          alt={arrHero[count].manga_name}
          key={`middle-${arrHero[count].manga_name}`}
          className={`${styles.middle}`}
        />
        <div className={styles.divInfo}>
          <h1>{arrHero[count].manga_name}</h1>
          <Link
            to={`/manga/${arrHero[count].manga_name
              .replace(/\s/g, "_")
              .toLowerCase()}`}
          >
            <button>Plus d'info</button>
          </Link>
        </div>
      </div>
      <div className={styles.divRight}>
        <img
          src={`/manga/${arrHero[(count + 1) % 5].path}/${
            arrHero[(count + 1) % 5].tomes[0]
          }`}
          alt={arrHero[(count + 1) % 5].manga_name}
          key={`right-${arrHero[(count + 1) % 5].manga_name}`}
          className={`${styles.right}`}
        />
        <div className={styles.divInfo}>
          <h1>{arrHero[(count + 1) % 5].manga_name}</h1>
          <Link
            to={`/manga/${arrHero[(count + 1) % 5].manga_name
              .replace(/\s/g, "_")
              .toLowerCase()}`}
          >
            <button>Plus d'info</button>
          </Link>
        </div>
      </div>
      <button className={styles.next} onClick={() => handleNext()}>
        ⟫
      </button>
    </div>
  );
}

export default HeroComponent;
