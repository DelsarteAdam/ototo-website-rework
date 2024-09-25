import { useParams } from "react-router-dom";
import { useMangaApi } from "../context/useMangaApi";
import { Navigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Loader from "../components/Loader";
import ImageLecture from "../components/ImageLecture";
import pageData from "../data/lectureData.json";

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

function Lecture() {
  const { manga = "" } = useParams() as { manga: string };
  const mangaData = useMangaApi();

  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);

  const pageMangaData = useMemo(
    () => pageData.filter((data) => data.manga_name === manga),
    [manga]
  );

  console.log(pageCount);

  //////////////////////////////////////////////////////////////////////////

  // Check if mangaData is still the default "stock" data
  useEffect(() => {
    const isStockData = JSON.stringify(mangaData) === JSON.stringify(stockData);
    if (!isStockData) {
      setIsLoading(false);
    }
  }, [mangaData]);

  if (isLoading) return <Loader />;

  // Format manga names for  case sensitivity
  const mangasList: string[] = mangaData.map((mangaName) =>
    mangaName.manga_name.replace(/\s/g, "_").toLowerCase()
  );
  const formattedManga = manga.toLowerCase();
  const currentManga = mangasList.includes(formattedManga);

  if (!currentManga) return <Navigate to="/notfound" replace />;

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
      <ImageLecture
        url={url}
        height={"85vh"}
        handleClickImage={handleClickImage}
      />
    </>
  );
}

export default Lecture;
