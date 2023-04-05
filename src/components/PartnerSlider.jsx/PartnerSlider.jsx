import React from 'react'
import {partners} from '../../Partners'
// Import Swiper React components
import { Swiper, SwiperSlide } from "../../../node_modules/swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.min.css";
import '../../../node_modules/swiper/components/navigation/navigation.min.css'
// import "swiper/components/navigation";
// import "swiper/css/navigation"

import './PartnerSlider.scss'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "../../../node_modules/swiper/core";
import Title from '../Title/Title';
  
  // install Swiper modules
SwiperCore.use([Pagination, Navigation]);
  
const PartnerSlider = () => {
    return (
        <section className="partner_section container my-5">
            <Title title="Our Partners"/>
            {/* slider  */}
            <Swiper slidesPerView={5} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={false} navigation={true} className="mySwiper">
                {
                    partners.map((v,i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img className="img-fluid" src={v} alt="" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            {/* slider  */}
        </section>
    )
}

export default PartnerSlider
