import { useParams } from "react-router-dom";
import { useMangaApi } from "../context/useMangaApi";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import MangaDiv from "../components/MangaDiv";

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

function Manga() {
  const { manga = "" } = useParams() as { manga: string };
  const mangaData = useMangaApi();

  const [isLoading, setIsLoading] = useState(true);

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

  const currentMangaData = mangaData.find(
    (mangaD) => manga == mangaD.manga_name.replace(/\s/g, "_").toLowerCase()
  );

  if (!currentMangaData) {
    return <Navigate to="/notfound" replace />;
  }
  return (
    <>
      <MangaDiv currentMangaData={currentMangaData} />
    </>
  );
}

export default Manga;
