import { useState, useEffect } from "react";

export default function useScreenWidth(): number {
  const [screenWidth, setScreenWidth] = useState(0);
  
  useEffect(() => {
    const setWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    setWidth();
    window.addEventListener('resize', setWidth);

    return () => {
      window.removeEventListener('resize', setWidth);
    }
  }, []);

  return screenWidth;
};