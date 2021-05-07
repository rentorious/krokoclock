import { useState } from "react";

const useKroki = () => {
  const [allImgs, setAllImgs] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [speed, setSpeed] = useState(0.1);
  const [krokiInterval, setKrokiInterval] = useState(null);
  const [timeLeft, setTimeLeft] = useState(speed * 1000 * 60);

  const startKroki = (index) => {
    if (index === allImgs.length) index = 0;
    setSelectedImg(allImgs[index]);
    index++;
    setKrokiInterval(
      setInterval(() => {
        if (index === allImgs.length) index = 0;
        setSelectedImg(allImgs[index]);
        index++;
      }, speed * 1000 * 60)
    );
  };

  const stopKroki = () => {
    setSelectedImg(null);
    clearInterval(krokiInterval);
  };

  return {
    stopKroki,
    startKroki,
    allImgs,
    setAllImgs,
    selectedImg,
    setSelectedImg,
    speed,
    setSpeed,
    timeLeft,
  };
};

export default useKroki;
