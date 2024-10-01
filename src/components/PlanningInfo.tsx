import styles from "./PlanningInfo.module.scss";

const mois = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];
const moisCourant = mois[new Date().getMonth()];
const dbPlanning = [
  {
    manga_name: "No Game No Life",
    manga_serie: "Serie 66 ",
    path: "seinen/Serie-66-NoGameNoLife",
    tomes: ["NGNL_1_Jaq.jpg", "ngnl_02_jaq.jpg"],
    auteur: "Yuu Kamiya",
    illustrateur: "Mashiro Hiiragi et Yuu Kamiya",
    genre: "seinen",
    theme: "Fantasy, Monde parallèle, Jeu, Comédie, Réflexion",
    resume:
      "Sora et Shiro sont deux frères et soeurs : le plus grand est sans emploi, la plus jeune, déscolarisée. Ils vivent ensemble confinés chez eux, en marge de la société. Sur Internet, on parle d’eux comme une véritable légende urbaine, au vu de leur talent aux jeux vidéo. Le monde réel, lui, n’est rien de plus qu’un « jeu pourri » pour la fratrie. Mais un beau jour, quelqu’un se surnommant « Dieu » les transporte soudainement dans un autre monde où tout serait déterminé par les jeux ! Ces deux rebuts de la société deviendront-ils les sauveurs de ce nouveau monde ?",
  },
  {
    manga_name: "Love me for who I am",
    manga_serie: "Serie 103 ",
    path: "mues/Serie-103-LovemeforwhoIam",
    tomes: [
      "love_me_for_who_i_am-01.jpg",
      "love_me_for_who_i_am-02.jpg",
      "lovemeforwhoiam-3.jpg",
    ],
    auteur: "Kata Konayama",
    illustrateur: "Kata Konayama",
    genre: "mues",
    theme: "Non-binarité, Romance, Genre",
    resume:
      "Au lycée, Mogumo semble ne pas avoir d’amis, et ne paraît pas non plus chercher à s’en faire. Pourtant, son camarade Tetsu connaît exactement le lieu où Mogumo pourrait rencontrer des personnes qui lui ressemblent : le maid café que tient sa sœur, où le service est assuré par des otokonoko, des garçons habillés en fille. Ni une ni deux, Tetsu propose à Mogumo d’y travailler... Mais qui a dit que Mogumo était un garçon ?",
  },
  {
    manga_name: "Interspecies Reviewers",
    manga_serie: "Serie 99 ",
    path: "seinen/Serie-99-InterspeciesReviewers",
    tomes: [
      "interspecies_reviewers-01.jpg",
      "interspecies_reviewers-02.jpg",
      "interspecies_reviewers-03.jpg",
      "interspecies_reviewers-04.jpg",
      "interspecies_reviewers-05.jpg",
      "interspecies_reviewers-06.jpg",
      "interspecies_7.jpg",
      "Inter8.jpg",
    ],
    auteur: "Amahara",
    illustrateur: "masha",
    genre: "seinen",
    theme: "Fantasy, Sexe, Comédie",
    resume:
      "Dans un monde où cohabitent humains et démons, géants et centaures, fées et sirènes, l’aventure tend les bras à tout un chacun. Mais que vous soyez sensible ou non à l’attrait des épées et des boules de feu magiques, un tout autre genre d’aventures s’offre également à vous. Des établissements spécialisés pour les personnes en quête de belle compagnie ont ouvert à travers tout le continent, et les « succubes » qui y officient ont autant de tours dans leur sac qu’il y a d’espèces en ce bas monde. Que vous souhaitiez draguer la dragonne, monter la minotaure ou harponner la harpie, il existe un cabaret de succubes pour vous ! Et pour vous permettre de savoir à l’avance si votre route vous mène à un lupanar de luxe ou dans un bordel crasseux, n’hésitez pas à consulter les critiques de Stunk et de ses joyeux compagnons : ils sauront vous renseigner !",
  },
];
const dbActualite = [
  {
    titre: "Nouvelle sortie de 'Samurai Rising' annoncée",
    date: "2024-10-01",
    auteur: "Aiko Tanaka",
    texte:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet urna at orci pharetra scelerisque.",
  },
  {
    titre: "Le retour tant attendu de 'Dragon Master' confirmé",
    date: "2024-09-25",
    auteur: "Kenji Sato",
    texte:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula nulla id lacus interdum ultricies.",
  },
  {
    titre: "'Magic Academy' entre dans son arc final",
    date: "2024-09-20",
    auteur: "Hiroshi Nakamura",
    texte:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget tortor ac diam facilisis placerat non nec velit.",
  },
];

function PlanningInfo() {
  return (
    <div className={styles.container}>
      <section className={styles.planning}>
        <h2> {`Planning pour ${moisCourant}`}</h2>

        {dbPlanning.map((manga, i) => (
          <div className={styles.mangaPlanning} key={manga.manga_name}>
            <img
              src={`/manga/${manga.path}/${manga.tomes[i]}`}
              alt={manga.manga_name}
            />
            <div className={styles.mangaSortieInfo}>
              <h3>{manga.manga_name}</h3>
              <p>{`Sortie le ${Math.floor(
                Math.random() * 28
              )} ${moisCourant}`}</p>
            </div>
          </div>
        ))}
      </section>
      <section className={styles.actualite}>
        <h2>Actualité</h2>
        {dbActualite.map((actu, i) => (
          <div className={styles.textActualite} key={i}>
            <h3>{actu.titre}</h3>
            <p>
              <i>{actu.date}</i>
            </p>
            <p>
              <i>{actu.auteur}</i>
            </p>

            <p>{actu.texte}</p>
            <button>Lire</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default PlanningInfo;
