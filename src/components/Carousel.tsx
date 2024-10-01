import { useEffect, useRef, useState, useCallback } from "react";
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
  const [maxCount, setMaxCount] = useState(0);
  const [offset, setOffset] = useState<React.CSSProperties>({ left: 0 });
  const [left, setLeft] = useState(0);
  const [gap, setGap] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(
    new Array(mangaData.tomes.length).fill(false)
  );
  const [allLoaded, setAllLoaded] = useState(false);

  // Use useCallback to memoize the function and avoid recreating it unnecessarily
  const calculateDimensions = useCallback(() => {
    if (imgContainer.current && imgElement.current) {
      const totalWidth = imgContainer.current.offsetWidth;
      setLeft(totalWidth);

      const imgWidth = imgElement.current.offsetWidth;
      const imgPerSlide = Math.floor(totalWidth / imgWidth);

      const totalGapSpace = totalWidth - imgPerSlide * imgWidth;
      const calculatedGap =
        imgPerSlide > 1 ? totalGapSpace / (imgPerSlide - 1) : 0;

      setGap(calculatedGap);
      setMaxCount(Math.ceil(mangaData.tomes.length / imgPerSlide));
    }
  }, [mangaData.tomes.length]);

  useEffect(() => {
    if (loaded.every((status) => status)) {
      setAllLoaded(true); // All images have loaded
    }
  }, [loaded]);

  useEffect(() => {
    calculateDimensions();
  }, [calculateDimensions, allLoaded]);

  useEffect(() => {
    // Add a resize event listener to recalculate the dimensions on window resize
    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [calculateDimensions]);

  // useEffect(() => {

  //   calculateDimensions();
  // }, [calculateDimensions, left]);

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

  const handleLoad = (i: number) => {
    setLoaded((prevLoaded) => {
      const newLoaded = [...prevLoaded];

      while (newLoaded.length <= i) {
        newLoaded.push(false);
      }

      newLoaded[i] = true;

      return newLoaded;
    });
  };

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
            onLoad={() => handleLoad(i)}
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
