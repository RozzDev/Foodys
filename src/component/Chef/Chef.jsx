import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import Data from '../../utils/sliderChef.json'
import {SliderS} from '../../utils/CommonChef'
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa'
import './Chef.css'

const Chef = () => {
  return (
    <div>
      <div className="c-wrapper">
        <div className="c-container">
          <div className="r-head">
            <h1>Chefs</h1>
          </div>
          <div className="r-word">
            <span>Meet the chef, the people that performs the magic at the kitchen</span>
          </div>
          <Swiper {...SliderS}>
            {
              Data.map((card,i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="c-body">
                      <img src={card.image} alt="" />
                      <div className="c-words">
                        <span>{card.name}</span>
                        <span>{card.position}</span>
                      </div>
                    </div>
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

export default Chef