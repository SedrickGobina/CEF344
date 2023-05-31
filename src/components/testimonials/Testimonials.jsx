import React from "react";
import "./testimonials.css";
import AVTRI from '../../assets/avatar1.jpg'
import AVTRI1 from "../../assets/avatar2.jpg";
import AVTRI2 from "../../assets/avatar.jpg";
import AVTRI3 from "../../assets/avatar.jpg";


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {/*modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}*/}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTRI} alt="avatar" />
          </div>
          <h5 className="client__name">George</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, qui
            dolorum! Quisquam, minima debitis! Dolorum officiis dolores iste
            quos quae minus, voluptatem est dolor, vel accusamus nam expedita.
            Id, molestiae!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTRI1} alt="avatar" />
          </div>
          <h5 className="client__name">George</h5>

          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, qui
            dolorum! Quisquam, minima debitis! Dolorum officiis dolores iste
            quos quae minus, voluptatem est dolor, vel accusamus nam expedita.
            Id, molestiae!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTRI2} alt="avatar" />
          </div>
          <h5 className="client__name">George</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, qui
            dolorum! Quisquam, minima debitis! Dolorum officiis dolores iste
            quos quae minus, voluptatem est dolor, vel accusamus nam expedita.
            Id, molestiae!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTRI3} alt="avatar" />
          </div>
          <h5 className="client__name">George</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, qui
            dolorum! Quisquam, minima debitis! Dolorum officiis dolores iste
            quos quae minus, voluptatem est dolor, vel accusamus nam expedita.
            Id, molestiae!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Testimonials;