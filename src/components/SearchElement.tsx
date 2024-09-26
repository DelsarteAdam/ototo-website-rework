//import styles from "./SearchElement.module.scss";
import { useRef, useEffect, useState } from "react";

type props = {
  height: string;
  color: string;
  fill: string;
  searchIconSize: number;
  maxWidth: string;
};

function SearchElement({
  height,
  color,
  fill,
  searchIconSize,
  maxWidth,
}: props) {
  const searchDiv = useRef<HTMLDivElement>(null);
  const [radiusBorder, setRadiusBorder] = useState(0);
  const [click, setClick] = useState(false);

  // useEffect hook to handle after the component renders
  useEffect(() => {
    if (searchDiv.current) {
      const height = searchDiv.current.offsetHeight;
      setRadiusBorder(height / 2);
    }
  }, [searchDiv]);

  function handleClick() {
    setClick(!click);
  }

  return (
    <div style={{ width: "100%", maxWidth: maxWidth }}>
      <div
        style={{
          height: height,
          position: "relative",
          maxWidth: !click ? height : "95%",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: `${radiusBorder}px`,
          margin: " auto",
        }}
        ref={searchDiv}
      >
        {click ? (
          <input
            type="text"
            placeholder="Search..."
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              borderRadius: `${radiusBorder}px`,
              background: color,
              outline: "none",
              border: "none",
              paddingLeft: `${radiusBorder / 2}px`,
              fontSize: `${Math.ceil(radiusBorder * 0.8)}px`,
            }}
          />
        ) : (
          ""
        )}

        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          preserveAspectRatio="xMidYMid meet" // Keep aspect ratio centered
          style={{
            height: `${searchIconSize}%`,
            aspectRatio: "1/1",
            position: "absolute",
            right: !click ? "" : `${radiusBorder / 2}px`,
          }}
          onClick={() => handleClick()}
        >
          <title>search</title>
          <path
            d="M503.4,438.34l-152-152.21a188.91,188.91,0,0,0,26.81-95.48C378.89,86.09,294.84.75,190.4,0S.75,83.43,0,188,83.3,377.91,187.72,378.65a187.94,187.94,0,0,0,98.83-27.34L438.44,503.39a29.63,29.63,0,0,0,41.77,0l23.2-23.21A29.7,29.7,0,0,0,503.4,438.34ZM188,335.3c-80.54-.55-145.34-66.37-144.76-147s66.3-145.53,146.84-145,145.33,66.38,144.76,147A146.07,146.07,0,0,1,188,335.3Z"
            fill={fill}
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchElement;
