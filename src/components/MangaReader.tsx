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

function MangaReader({ mangaData, pageMangaData, manga }: props) {
  const [pageCount, setPageCount] = useState(0);

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
        <ImageLecture
          url={url}
          height={"80vh"}
          handleClickImage={handleClickImage}
        />
        <div>
          <p>{mangaDetails?.manga_name}</p>
          <p>{mangaDetails?.manga_serie}</p>
        </div>
      </div>
    </>
  );
}

export default MangaReader;
