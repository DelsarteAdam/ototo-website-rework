import { useEffect } from "react";
import styles from "./MangaReader.module.scss";
import { useState } from "react";
import ImageLecture from "../components/ImageLecture";

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

type pageType = {
  path: string;
  manga_name: string;
};

type props = {
  mangaData: data[];
  pageMangaData: pageType[];
  manga: string;
};

function handleKeyPress(
  e: KeyboardEvent,
  pageCount: number,
  setPageCount: (count: number) => void,
  pageMangaData: pageType[]
) {
  if (e.key === "ArrowLeft") {
    if (pageCount > 0) {
      setPageCount(pageCount - 1);
    }
  } else if (e.key === "ArrowRight") {
    if (pageCount < pageMangaData.length - 1) {
      setPageCount(pageCount + 1);
    }
  }
}

function MangaReader({ mangaData, pageMangaData, manga }: props) {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    // Attach the keydown event listener
    const handleKeydown = (e: KeyboardEvent) =>
      handleKeyPress(e, pageCount, setPageCount, pageMangaData);

    window.addEventListener("keydown", handleKeydown);

    // Cleanup event listener on unmount !important
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [pageCount, setPageCount, pageMangaData]);
  //////////////////////////////////////////////////////////////////////////

  const formattedManga = manga.toLowerCase();

  const mangaDetails = mangaData.find(
    (manga) =>
      manga.manga_name.replace(/\s/g, "_").toLowerCase() == formattedManga
  );

  //////////////////////////////////////////////////////////////////////////////

  function handleClickImage(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const coordX = e.clientX;

    const divElement = e.currentTarget;

    if (divElement) {
      const rect = divElement.getBoundingClientRect();
      const divX = rect.left;

      const divWidth = rect.width;

      //check right or left

      const Xref = coordX - divX;
      const middle = divWidth / 2;
      if (Xref <= middle) {
        if (pageCount > 0) {
          setPageCount(pageCount - 1);
        }
      } else {
        if (pageCount < pageMangaData.length - 1) {
          setPageCount(pageCount + 1);
        }
      }
    }
  }

  // simple def of url
  const url = pageMangaData.length > 0 ? pageMangaData[pageCount].path : "";

  return (
    <>
      <div className={styles.main}>
        <div className={styles.imgContainer}>
          <ImageLecture
            url={url}
            height={"80vh"}
            handleClickImage={handleClickImage}
          />
        </div>
        <div className={styles.mangaInfo}>
          <h1>{`Nom: ${mangaDetails?.manga_name}`}</h1>
          <h3>{`Auteur: ${mangaDetails?.auteur}`}</h3>
          <h3>{`Illustrateur: ${mangaDetails?.illustrateur}`}</h3>
          <h3>{`Theme: ${mangaDetails?.theme}`}</h3>
          <h3>Resumé:</h3>
          <p>{` ${mangaDetails?.resume}`}</p>
          <h3>{`Volume paru: ${mangaDetails?.tomes.length}`}</h3>
        </div>
      </div>
    </>
  );
}

export default MangaReader;
