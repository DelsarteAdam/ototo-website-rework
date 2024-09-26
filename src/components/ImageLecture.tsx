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
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const img = new Image(); // Create a new image object
    img.src = url; // Set the source of the image

    img.onload = () => {
      const windheight = dimensions.height;
      const windWidth = dimensions.width; // px / viewport total width * 100

      const pixelRatio =
        ((parseFloat(height.slice(0, -2)) / 100) * windheight) / img.height;

      const newWidth = ((img.width * pixelRatio) / windWidth) * 100;

      setImageDimensions({ width: newWidth, height: img.height * pixelRatio });
    };

    img.onerror = () => {
      console.error("Failed to load image");
    };
  }, [url, dimensions, height]);

  return (
    <div
      onClick={(e) => handleClickImage(e)}
      style={{
        backgroundImage: `url(${url})`,
        width: `${imageDimensions.width}vw`,
        height: height,

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "inline-block",
      }}
    ></div>
  );
}

export default ImageLecture;
