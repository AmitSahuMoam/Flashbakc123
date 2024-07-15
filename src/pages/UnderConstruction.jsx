import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";

import ScrollToTop from "../components/ScrollToTop";
import ImageWrapper from "../components/ImageWrapper";

function UnderConstruction() {
  useEffect(() => {
    document.title = "404 Not Found - Grayscale Clothes Online Store";
  }, []);

  return (
    <div className="tbd">
      <span className="tbd__404">404 - ERROR</span>
      <h1 className="tbd__title">OOPS!</h1>
      <h3 className="tbd__subtitle">This is awkward...</h3>
      <p className="tbd__text">Try the links below!</p>

      <ScrollToTop />
    </div>
  );
}
export default UnderConstruction;
