import styles from "./PlanningInfo.module.scss";

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

type props = {
  mangaData: data[];
};

function PlanningInfo({ mangaData }: props) {
  return (
    <div className={styles.container}>
      <section className={styles.planning}>test</section>
      <section className={styles.actualite}>test</section>
    </div>
  );
}

export default PlanningInfo;
