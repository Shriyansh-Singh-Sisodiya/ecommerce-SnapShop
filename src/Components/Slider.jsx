import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import styles from './Style.module.css';
import i1 from '../assets/pexels-blitzboy-1040945.jpg'
import i2 from  '../assets/pexels-javon-swaby-197616-2783873.jpg'
import i3 from '../assets/pexels-bubi-2709563.jpg'
import i4 from '../assets/pexels-philboakye-1813947.jpg'
import i5 from '../assets/pexels-andrew-3178767.jpg'

// import required modules
import { EffectCards } from 'swiper/modules';
function Sliderr() {
  return (
    <div className={'styles.sliderWrapper'}><>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.customSwiper}
      >
        <SwiperSlide>
          <img
            className="img-fluid"
            src={i1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={i2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={i3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={i4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={i5}
          />
        </SwiperSlide>
      </Swiper>
    </></div>
  )
}

export default Sliderr


