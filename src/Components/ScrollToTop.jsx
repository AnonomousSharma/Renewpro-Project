import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Automatically detects the current path

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on path change
  }, [pathname]); // Trigger this effect whenever `pathname` changes

  return null; // This component renders nothing
};

export default ScrollToTop;
