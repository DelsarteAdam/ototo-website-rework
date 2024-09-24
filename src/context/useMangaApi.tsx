import { createContext, useContext, useState, ReactNode } from "react";

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

type MangaApiContextType = {
  mangaData: data[] | null;
  fetchMangaData: () => Promise<void>;
};

const ApiContext = createContext<MangaApiContextType | null>(null);

function useMangaApi() {
  return useContext(ApiContext);
}

function MangaApiProvider({ children }: MangaApiProps) {
  const [mangaData, setMangaData] = useState<data[] | null>(null);

  async function fetchMangaData() {
    try {
      const response = await fetch("./ototoDataRework.json");
      const data = await response.json();
      setMangaData(data);
    } catch (error) {
      console.error("Error fetching manga data:", error);
    }
  }

  const apiData = {
    mangaData,
    fetchMangaData,
  };

  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
}

export { useMangaApi, MangaApiProvider };
