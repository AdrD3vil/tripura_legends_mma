import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait",
  });

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      // Clear any previous timeouts
      clearTimeout(timeoutId);

      // Debounce resize handling
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          orientation: window.innerWidth > window.innerHeight ? "landscape" : "portrait",
        });
      }, 150); // 150ms delay to wait for the resize/orientation to settle
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Initial calculation
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
