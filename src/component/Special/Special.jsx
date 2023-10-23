import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import Datas from '../../utils/sliderSpecial.json'
import { sliderSettings } from '../../utils/Common'
import './Special.css'
import 'swiper/css'

const Special = () => {
  return (
    <div>
      <div className="s-wrapper">
       <div className="r-head">
            <h1>Special menu</h1>
        </div>
        <Swiper {...sliderSettings}>

            {Datas.map((card, i) => {
                return (
                    <SwiperSlide key={i}>
                        <div className="s-container" style={{background: `url(${card.image})`, backgroundSize: "cover"}}>
                            <div className="s-words">
                              <span className='price'>{card.price}</span>
                              <span className='name'>{card.name}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
      </div>
    </div>
  )
}

export default Special
