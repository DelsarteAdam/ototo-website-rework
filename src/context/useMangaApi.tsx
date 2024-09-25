import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import dataMangaJson from "../data/ototoDataRework.json";

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

type MangaApiProps = {
  children: ReactNode;
};

// type MangaApiContextType = {
//   mangaData: data[];
// };

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

const ApiContext = createContext<data[]>(stockData);

function useMangaApi() {
  return useContext(ApiContext);
}

function MangaApiProvider({ children }: MangaApiProps) {
  const [mangaData, setMangaData] = useState<data[]>(stockData);

  async function fetchMangaData() {
    // try {
    //   const response = await fetch("./ototoDataRework.json", {
    //     cache: "no-store",
    //   });
    //   const data = await response.json();
    //   setMangaData(data);
    // } catch (error) {
    //   console.error("Error fetching manga data:", error);
    // }

    setMangaData(dataMangaJson);
  }

  useEffect(() => {
    fetchMangaData();
  }, []); // location.pathname

  return (
    <ApiContext.Provider value={mangaData}>{children}</ApiContext.Provider>
  );
}

export { useMangaApi, MangaApiProvider };
