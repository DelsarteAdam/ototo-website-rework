import { useEffect } from "react";
import { useMangaApi } from "../context/useMangaApi";

function Accueil() {
  const apiContext = useMangaApi();

  const { mangaData, fetchMangaData } = apiContext || {
    mangaData: null,
    fetchMangaData: () => {},
  }; // if api  down , remplace by null and empty function

  useEffect(() => {
    if (apiContext) {
      fetchMangaData(); // Call only if apiContext is available
    }
  }, [apiContext, fetchMangaData]);

  if (!apiContext) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <p>acceuil</p>
      {JSON.stringify(mangaData)}
    </>
  );
}

export default Accueil;
