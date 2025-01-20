import AOS from "aos";
import "aos/dist/aos.css";
import "./custom-aos.css";
import { useEffect } from "react";

function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 0,
    });
  }, []);
  return <>{children}</>;
}

export default AosProvider;
