"use client";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Our.css";

const Our = () => {

  const ref = React.useRef(null)
  const IsInView = useInView(ref, {once: true})

  const mainControl = useAnimation()

  React.useEffect(() => {
    if(IsInView) {
      mainControl.start('visible')
    }
  },[IsInView])


  return (
    <div>
      <div className="O-wrapper" ref={ref}>
        <motion.div 
        className="O-container"
        variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0}
        }}
        initial= "hidden"
        animate = {mainControl}
        transition={{duration: 1.5}}
        >
          <div className="r-head">
            <h1>Our Menu</h1>
          </div>
          <div className="O-body">
            <div className="O-first" >
              <div className="one-first">
                <img src="./our1.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
              <div className="one-first">
                <img src="./our2.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="O-second" >
              <div className="one-first">
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
                <img src="/our3.jpg" alt="" />
              </div>
              <div className="one-first">
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
                <img src="/our4.jpg" alt="" />
              </div>
            </div>

            <div className="O-first" >
              <div className="one-first">
                <img src="/our5.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
              <div className="one-first">
                <img src="/our6.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="O-second" >
              <div className="one-first">
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
                <img src="/our7.jpg" alt="" />
              </div>
              <div className="one-first">
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
                <img src="/our8.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="O-bodys">
            <div className="O-first" >
              <div className="one-first">
                <img src="./our1.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
              <div className="one-first">
                <img src="./our2.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="O-second" >
              <div className="one-first">
                <img src="/our3.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
              <div className="one-first">
              <img src="/our4.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="O-first" >
              <div className="one-first">
                <img src="/our5.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
              <div className="one-first">
                <img src="/our6.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="O-second" >
              <div className="one-first">
                <img src="/our7.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
              <div className="one-first">
                <img src="/our8.jpg" alt="" />
                <div className="one-first-word">
                  <div className="one-words">
                    <span>Grilled Caesar salad, shaved reggiano</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto illo delectus...
                    </span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Our;
