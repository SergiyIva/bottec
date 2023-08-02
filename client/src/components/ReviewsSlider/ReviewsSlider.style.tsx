import { colors } from "colors";
import styled from "styled-components";

export const ReviewsSliderWrap = styled.div`
  padding-top: 50px;
  .swiper-slide-active > div {
    height: 547px;
    padding: 106px 60px 60px 60px;
    @media (max-width: 680px) {
      height: auto;
      padding: 40px 15px;
    }
  }
  .swiper-wrapper {
    height: 547px !important;
    align-items: center;
    @media (max-width: 680px) {
      height: 330px !important;
    }
    @media (max-width: 370px) {
      height: 330px !important;
    }
  }
  width: 1800px;
  overflow-x: hidden;
  height: 690px;
  .swiper {
    height: 100%;
  }
  .swiper-pagination-bullet {
    background-color: ${colors.purpleMain};
    opacity: 0.3;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  @media (max-width: 680px) {
    height: 420px;
    width: 1050px;
    padding-top: 32px;
  }
  @media (max-width: 370px) {
    width: 840px;
  }
  @media (min-width: 680px) {
    .swiper-pagination-bullet {
      margin: 0 8px !important;
      width: 16px !important;
      height: 16px !important;
    }
  }
`;
