import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Resturant.css";

const Resturant = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const mainControl = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  });

  return (
    <div className="r-wrapper innerWidth">
      <div className="r-container innerWidth">
        <div className="r-head">
          <h1>The Resturant</h1>
        </div>
        <div className="r-word">
          <span>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean
          </span>
        </div>
        <div className="gallery" ref={ref}>
          <motion.img
            src="/rest1.jpg"
            variants={{
              hidden: { x: -70, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, type: "spring" }}
          />
          <div className="img">
            <motion.img
              src="/rest2.jpg"
              variants={{
                hidden: { y: -70, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              animate={mainControl}
              transition={{ duration: 0.5, type: "spring" }}
            />
            <motion.img
              src="/rest3.jpg"
              variants={{
                hidden: { y: 70, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              animate={mainControl}
              transition={{ duration: 0.5, type: "spring" }}
            />
          </div>
          <motion.img
            src="/rest4.jpg"
            variants={{
              hidden: { x: 70, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, type: "spring" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Resturant;
