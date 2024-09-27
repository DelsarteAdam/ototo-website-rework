import { useEffect, useState } from "react";

type props = {
  height: string;
  color: string;
  fill: string;
  searchIconSize: number;
  maxWidth: string;
  leftPosition: boolean;
};

let leftInput: React.CSSProperties = {};
let leftbutton: React.CSSProperties = {};

function SearchElement({
  height,
  color,
  fill,
  searchIconSize,
  maxWidth,
  leftPosition,
}: props) {
  const [focus, setFocus] = useState<React.CSSProperties>({});
  const [focusWithin, setFocusWithin] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (leftPosition) {
      leftInput = { left: 0 };
      leftbutton = { marginLeft: "auto" };
    } else {
      leftInput = { right: 0 };
      leftbutton = {};
    }
  }, [leftPosition]);

  const handleFocus = () => {
    setFocus({
      outline: 0,
      opacity: 1,
      cursor: "initial",
      width: `calc(100% - ${height})`,
    });
    setFocusWithin({
      width: "100%",
    });
  };

  const handleBlur = () => {
    setFocus({});
    setFocusWithin({});
  };

  return (
    <>
      <div //box
        style={{
          background: color,
          width: maxWidth,
          padding: "3em",
          boxShadow: "0 0 3em rgba(0, 0, 0, 0.15)",
          position: "relative",
        }}
      >
        <div //search-bar
          style={{
            border: "1px solid red",
            display: "flex",

            borderRadius: `calc(${height} / 2)`,
            height: height,
            padding: `calc(${height} * 0.05)`,
            position: "relative",
            width: height, // = height if close
            transition: "width 300ms ease-in-out",
            overflow: "hidden",
            ...focusWithin,
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            aria-label="search"
            style={{
              flexGrow: 1,
              fontSize: `calc(${height} / 2 * 0.8)`,
              padding: "0 0.5em",
              border: "none",
              position: "absolute",
              top: 0,
              bottom: 0,
              ...leftInput,
              opacity: 0,
              lineHeight: `calc(${height} * 0.05)`, // for all navigator
              cursor: "pointer",
              ...focus,
            }}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
          />
          <button
            style={{
              cursor: "pointer",
              height: `calc(${height} * 0.90)`,
              width: `calc(${height} * 0.90)`,
              borderRadius: `calc(${height} / 2)`,
              border: "none",
              ...leftbutton,
            }}
          >
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
              }}
            >
              <title>search</title>
              <path
                d="M503.4,438.34l-152-152.21a188.91,188.91,0,0,0,26.81-95.48C378.89,86.09,294.84.75,190.4,0S.75,83.43,0,188,83.3,377.91,187.72,378.65a187.94,187.94,0,0,0,98.83-27.34L438.44,503.39a29.63,29.63,0,0,0,41.77,0l23.2-23.21A29.7,29.7,0,0,0,503.4,438.34ZM188,335.3c-80.54-.55-145.34-66.37-144.76-147s66.3-145.53,146.84-145,145.33,66.38,144.76,147A146.07,146.07,0,0,1,188,335.3Z"
                fill={fill}
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchElement;
