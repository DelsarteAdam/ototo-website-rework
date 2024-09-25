import { useState, useEffect } from "react";

type props = {
  url: string;
  height: string;
  handleClickImage: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function ImageLecture({ url, height, handleClickImage }: props) {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const img = new Image(); // Create a new image object
    img.src = url; // Set the source of the image

    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };

    img.onerror = () => {
      console.error("Failed to load image");
    };
  }, [url]);

  return (
    <div
      onClick={(e) => handleClickImage(e)}
      style={{
        backgroundImage: `url(${url})`,
        width: `${imageDimensions.width}px`,
        height: height,

        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        display: "inline-block",
      }}
    ></div>
  );
}

export default ImageLecture;
