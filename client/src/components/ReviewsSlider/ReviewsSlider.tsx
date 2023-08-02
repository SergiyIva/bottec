import React from "react";

import { ReviewsSliderProps } from "./ReviewsSlider.types";
import { ReviewsSliderWrap } from "./ReviewsSlider.style";
import { Review } from "components/Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ reviews }) => {
  return (
    <>
      <ReviewsSliderWrap>
        <Swiper
          spaceBetween={54}
          slidesPerView={3}
          autoHeight={true}
          initialSlide={1}
          autoplay={{ delay: 5000 }}
          modules={[Autoplay, Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          centeredSlides={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Review review={review} />
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
      </ReviewsSliderWrap>
    </>
  );
};
