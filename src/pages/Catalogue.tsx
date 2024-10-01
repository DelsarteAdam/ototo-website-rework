import { useMangaApi } from "../context/useMangaApi";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import CatalogueList from "../components/CatalogueList";

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

function Catalogue() {
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
      <CatalogueList mangaData={mangaData} />
    </>
  );
}

export default Catalogue;
