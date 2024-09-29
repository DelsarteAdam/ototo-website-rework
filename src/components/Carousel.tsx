import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.scss";

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
  mangaData: data;
  height: string;
  width: string;
  backgroundColor: string;
};

function Carousel({ mangaData, height, width, backgroundColor }: props) {
  const imgContainer = useRef<HTMLDivElement>(null);
  const imgElement = useRef<HTMLImageElement>(null);
  const [count, setCount] = useState(1);
  const [maxCount, setMAxCount] = useState(0);
  const [offset, setOffset] = useState<React.CSSProperties>({ left: 0 });
  const [left, setLeft] = useState(0);
  const [gap, setGap] = useState(0);

  useEffect(() => {
    if (imgContainer.current) {
      function getImgDimension() {
        const totalWidth = imgContainer.current!.offsetWidth;
        setLeft(totalWidth);

        const imgWidth = imgElement.current!.offsetWidth;
        const imgPerSlide = Math.floor(totalWidth / imgWidth);

        const totalGapSpace = totalWidth - imgPerSlide * imgWidth;
        const calculatedGap = totalGapSpace / (imgPerSlide - 1);

        setGap(calculatedGap);
        setMAxCount(Math.ceil(mangaData.tomes.length / imgPerSlide));
      }

      getImgDimension();
    }
  }, [mangaData.tomes.length, left]);

  function handleNext() {
    setCount((prevCount) => {
      if (prevCount < maxCount) {
        const off = left * prevCount;
        setOffset({ left: -off });
        return prevCount + 1;
      }
      return prevCount;
    });
  }

  function handlePrevious() {
    setCount((prevCount) => {
      if (prevCount > 1) {
        const off = left * (prevCount - 2); // Subtract 2 to avoid jumping past the current image
        setOffset({ left: -off });
        return prevCount - 1;
      }
      return prevCount;
    });
  }

  return (
    <div
      className={styles.container}
      style={{
        width: width,
        height: height,
      }}
    >
      <button className={styles.previous} onClick={() => handlePrevious()}>
        ⟪
      </button>
      {count == 1 ? (
        ""
      ) : (
        <div
          className={styles.left}
          style={{
            background: `linear-gradient(to right, ${backgroundColor}, rgba(0, 0, 0, 0))`,
          }}
        >
          {""}
        </div>
      )}
      <div
        className={styles.imgContainer}
        style={{
          gap: `${gap}px`,
          ...offset,
          transition: "left 300ms ease-in-out",
        }}
        ref={imgContainer}
      >
        {mangaData.tomes.map((tome, i) => (
          <img
            src={`/manga/${mangaData.path}/${mangaData.tomes[i]}`}
            alt={mangaData.manga_name}
            key={tome}
            style={{
              width: "auto",
              height: "100%",
            }}
            ref={imgElement}
          />
        ))}
      </div>
      {count == maxCount ? (
        ""
      ) : (
        <div
          className={styles.right}
          style={{
            background: `linear-gradient(to left, ${backgroundColor}, rgba(0, 0, 0, 0))`,
          }}
        ></div>
      )}
      <button className={styles.next} onClick={() => handleNext()}>
        ⟫
      </button>
    </div>
  );
}

export default Carousel;
