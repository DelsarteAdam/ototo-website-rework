import { useParams } from "react-router-dom";
import { useMangaApi } from "../context/useMangaApi";
import { Navigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Loader from "../components/Loader";

import pageData from "../data/lectureData.json";
import MangaReader from "../components/MangaReader";

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

  const pageMangaData = useMemo(
    () => pageData.filter((data) => data.manga_name === manga),
    [manga]
  );

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

  const mangaDetails = mangaData.find(
    (manga) =>
      manga.manga_name.replace(/\s/g, "_").toLowerCase() == formattedManga
  );

  if (!currentManga) return <Navigate to="/notfound" replace />;

  //////////////////////////////////////////////////////////////////////////////

  // simple def of url

  return (
    <>
      <MangaReader
        mangaData={mangaData}
        pageMangaData={pageMangaData}
        manga={manga}
      />
    </>
  );
}

export default Lecture;
