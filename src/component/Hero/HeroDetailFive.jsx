import React from "react";
import { motion } from "framer-motion";

const HeroDetailFive = () => {
  return (
    <div>
      <div className="h-wrapper">
        <div className="hero hh">
          <div className="body">
            <img src="./blog3.jpg" alt="" />
            <div className="words">
              <motion.div
                className="an"
                initial={{ y: "4rem", opacity: 0.7 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 2.5 }}
              >
                <span className="d-words">July 2 2023 . Posted by admin</span>
                <span className="h-word">How to bake cookies </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetailFive;
