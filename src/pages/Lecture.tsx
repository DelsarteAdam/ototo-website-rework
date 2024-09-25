import { useParams } from "react-router-dom";
import { useMangaApi } from "../context/useMangaApi";
import { Navigate } from "react-router-dom";

function Lecture() {
  const { manga = "" } = useParams() as { manga: string };

  const mangaData = useMangaApi();

  const mangasList: string[] = mangaData.map((mangaName) =>
    mangaName.manga_name.replace(/\s/g, "_")
  );
  const currentManga = mangaData.find((m) => m.manga_name === manga);

  if (!currentManga) return <Navigate to="/accueil" replace />;

  return (
    <div>
      <p>{manga + mangasList}</p>
    </div>
  );
}

export default Lecture;
