import HeroComponent from "../components/HeroComponent";
import { useMangaApi } from "../context/useMangaApi";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import NewsLetter from "../components/NewsLetter";
import PlanningInfo from "../components/PlanningInfo";

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

function Accueil() {
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

  return (
    <>
      <HeroComponent mangaData={mangaData} />
      <NewsLetter />
      <PlanningInfo />
    </>
  );
}

export default Accueil;
