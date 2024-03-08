import { useState, useEffect } from "react";

interface props {
  text: string;
  speed: number;
}

const TypewriterDescription = ({ text, speed }: props) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer: any;

    if (currentIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayText(
          (prevDisplayText) => prevDisplayText + text[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return <p className="text-xl">{displayText}</p>;
};

export default TypewriterDescription;
