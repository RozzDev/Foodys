import React from "react";
import { motion } from "framer-motion";

const HeroDetailOne = () => {
  return (
    <div>
      <div className="h-wrapper">
        <div className="hero hh">
          <div className="body">
            <img src="./blog5.jpg" alt="" />
            <div className="words">
              <motion.div
                className="an"
                initial={{ y: "4rem", opacity: 0.7 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 2.5 }}
              >
                <span className="d-words">May 19 2023 . Posted by admin</span>
                <span className="h-word">How to cook paste</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetailOne;
