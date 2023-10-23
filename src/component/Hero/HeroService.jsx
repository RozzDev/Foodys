import React from "react";
import { motion } from "framer-motion";

const HeroService = () => {
  return (
    <div>
      <div className="h-wrapper">
        <div className="hero hh">
          <div className="body">
            <img src="./back2.jpg" alt="" />
            <div className="words">
              <motion.div
                className="an"
                initial={{ y: "4rem", opacity: 0.7 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 2.5 }}
              >
                <span className="h-word">foody Service</span>
                <span className="d-word">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente et sed quasi.
                </span>
              </motion.div>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroService;
