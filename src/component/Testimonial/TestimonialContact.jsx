import React from 'react'
import Data from '../../utils/sliderTesti.json'
import {Swiper, SwiperSlide} from 'swiper/react'
import { motion, useInView, useAnimation } from 'framer-motion'

const TestimonialContact = () => {
    const ref = React.useRef(null)
    const isInview = useInView(ref)

    const mainControl = useAnimation()
    const slideControl = useAnimation()

    React.useEffect(()=> {
        if(isInview) {
            mainControl.start('visible')
            slideControl.start('visible')
        }
    },[isInview])


  return (
    <div>
      <div className="t-wrapper t-set">
        <div className="t-container">
            <div className="r-head">
                <h1>Testimonial</h1>
            </div>
            <Swiper ref={ref}>

                {
                    Data.map((testi, i) => {
                        return(
                            <SwiperSlide key={i}>
                                <motion.div className="t-testi"
                                variants={{
                                    hidden: {y: 70, opacity: 0},
                                    visible: {y: 0, opacity: 1}
                                }}
                                initial='hidden'
                                animate={mainControl}
                                transition={{duration: 0.5, delay: 0.25, type: "spring"}}>
                                    <p className="t-para">{testi.details}</p>
                                    <div className="t-other">
                                        <img src={testi.image} alt="" />
                                        <div className="spans">
                                            <span>{testi.name}</span>
                                            <span>{testi.nameO}</span>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                variants={{
                                    hidden: {left: 0},
                                    visible:{left: '100%'}
                                }}
                                initial= 'hidden'
                                animate= {slideControl}
                                transition={{duration: 0.5, ease: "easeIn"}}
                                style={{
                                    position: 'absolute',
                                    top: 4,
                                    bottom: 4,
                                    left: 0,
                                    right: 0,
                                    zIndex: 20,
                                    background: 'var(--orange)'
                                }}
                                ></motion.div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TestimonialContact
