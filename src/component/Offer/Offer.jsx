import React from "react";
import {
  GiCoffeeCup,
  GiOpenedFoodCan,
  GiPizzaSlice,
  GiCirclingFish,
} from "react-icons/gi";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Offer.css";

const Offer = () => {
  const ref = React.useRef(null);
  const IsInView = useInView(ref);

  const mainControl = useAnimation();

  React.useEffect(() => {
    if (IsInView) {
      mainControl.start("visible");
    }
  }, [IsInView]);
  return (
    <div className="sets">
      <div className="innerWidth o-wrapper" ref={ref}>
        <motion.div
          className="o-container innerWidth "
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControl}
          transition={{ duration: 1 }}
        >
          <div className="o-lists">
            <div className="o-icon">
              <GiCoffeeCup size={44} color="#fff" />
            </div>
            <div className="o-words">
              <span className="o-head">Cup Of Coffes</span>
              <span className="o-detail">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </span>
            </div>
          </div>
          <div className="o-lists">
            <div className="o-icon">
              <GiOpenedFoodCan size={44} color="#fff" />
            </div>
            <div className="o-words">
              <span className="o-head">Enjoy Your Meal</span>
              <span className="o-detail">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </span>
            </div>
          </div>
          <div className="o-lists">
            <div className="o-icon">
              <GiPizzaSlice size={44} color="#fff" />
            </div>
            <div className="o-words">
              <span className="o-head">Enjoy your Pizza</span>
              <span className="o-detail">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </span>
            </div>
          </div>
          <div className="o-lists">
            <div className="o-icon">
              <GiCirclingFish size={44} color="#fff" />
            </div>
            <div className="o-words">
              <span className="o-head">Enjoy Your Fish</span>
              <span className="o-detail">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
