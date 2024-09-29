import Carousel from "../components/Carousel";
import styles from "./Test.module.scss";

const mangaData = {
  manga_name: "Overlord",
  manga_serie: "Serie 56 ",
  path: "seinen/Serie-56-Overlord",
  tomes: [
    "Overlord_1_Jaq.jpg",
    "Overlord_2_Jaq.jpg",
    "Overlord_3_Jaq.jpg",
    "Overlord_4_Jaq.jpg",
    "Overlord_5_Jaq.jpg",
    "Overlord_6_Jaq.jpg",
    "Overlord_7_Jaq.jpg",
    "Overlord_8_Jaq.jpg",
    "Overlord_9_Jaq.jpg",
    "overlord_10.jpg",
    "Overlord_11_Jaq.jpg",
    "Overlord_12_Jaqa.jpg",
    "Overlord_13_Jaq.jpg",
    "Overlord_14_Jaq.jpg",
    "Overlord_15_Jaq.jpg",
    "Overlord_16_Jaq.jpg",
    "Overlord_17_Jaq_corr.jpg",
    "overlord18.png",
  ],
  auteur: "Kugane Maruyama",
  illustrateur: "Hugin Miyama",
  genre: "seinen",
  theme: "Fantasy, Dark Fantasy, Réalité Virtuelle, Jeux Vidéo",
  resume:
    "Faites d’Ainz Ooal Gown une légende immuable. S’il existe de nombreux héros, gommez leur nom avec le mien. Faites savoir à tous qu’Ainz Ooal Gown est le plus grand des héros. Face à des êtres plus puissants que nous, employez un moyen autre que la force. Face à un magicien protégé par une armée, employez autre chose que le nombre. Nous n’en sommes encore qu’aux préparatifs, mais agissez le moment venu, dans le seul but de leur apprendre qu’Ainz Ooal Gown est le plus grand homme au monde.",
};

function Test() {
  return (
    <div className={styles.container}>
      <h1>test</h1>
      <Carousel
        mangaData={mangaData}
        height={"30vh"}
        width={"50vw"}
        backgroundColor={"#fff"}
      />
    </div>
  );
}

export default Test;
