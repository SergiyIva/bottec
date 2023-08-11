import { colors } from "colors.ts";
import { styled, keyframes } from "styled-components";
import { fadeIn, fadeInRight, fadeInLeft, zoomIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInLeftAnimation = keyframes` 
  from { 
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
  ${fadeInLeft}
`;
const zoomInAnimation = keyframes`
  from { 
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
  ${zoomIn}
`;

export const MainBannerWrapper = styled.section`
  width: 96%;
  color: white;
  position: relative;


`;

export const BannerButtons = styled.div`
  display: flex;
  gap: 34px;
  justify-content: flex-start;
  margin-top: 88px;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
  @media (max-width: 750px) {
    margin-top: 22px;
  }
  @media (max-width: 700px) {
    gap: 22px;
  }
`;

export const OverflowContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  padding: 160px 0 82px 10%;
  
  background: ${colors.purpleMain};
  border-radius: 30px;
  min-height: 250px;
  @media (max-width: 1250px) {
    padding: 60px;
  }
  @media (max-width: 470px) {
    padding: 30px;
  }
`

export const BannerHeading = styled.h1`
  font-size: 62px;
  line-height: 72px;
  font-weight: 500;
  width: 680px;
  animation: ${fadeInAnimation} 1s;
  @media (max-width: 840px) {
    line-height: 1.2;
    font-size: 36px;
    font-weight: 500;
    width: 400px;
  }
  @media (max-width: 580px) {
    max-width: 300px;
    font-size: 24px;
  }
  @media (max-width: 350px) {
    max-width: 200px;
    font-size: 24px;
  }
`;

export const BannerAchievment = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(1) > span {
    animation: ${fadeInLeftAnimation} 0.6s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
  &:nth-child(2) > span {
    animation: ${fadeInLeftAnimation} 0.6s;
    animation-delay: 1.1s;
    animation-fill-mode: forwards;
  }
  &:nth-child(3) > span {
    animation: ${fadeInLeftAnimation} 0.6s;
    animation-delay: 1.8s;
    animation-fill-mode: forwards;
  }
  &:nth-child(1) > p {
    animation: ${zoomInAnimation} 0.3s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  &:nth-child(2) > p {
    animation: ${zoomInAnimation} 0.3s;
    animation-delay: 1.6s;
    animation-fill-mode: forwards;
  }
  &:nth-child(3) > p {
    animation: ${zoomInAnimation} 0.3s;
    animation-delay: 2.1s;
    animation-fill-mode: forwards;
  }
  @media (max-width: 580px) {
    span {
      font-size: 16px;
      font-weight: 700;
      line-height: 17px;
    }
    p {
      font-size: 13px;
      font-weight: 500;
      line-height: 15px;
    }
  }
`;

export const AchievmentHeading = styled.span`
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  opacity: 0;
`;

export const AchievmentText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-top: 8px;
  opacity: 0;
`;

export const BannerAchievments = styled.div`
  width: 680px;
  margin-top: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 42px;
  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    width: fit-content;
  }
  @media (max-width: 750px) {
    margin-top: 22px;
  }
`;


export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  //height: 716px;
  position: absolute;
  bottom: 0;
  right: max(calc(100vw - 1750px), 3%);
  z-index: 1;
  animation: ${fadeInRightAnimation} 0.8s;
  @media screen and (min-width: 1920px) {
    right: 12%;
  }
  @media (max-width: 1550px) {
    right: 5%;
  }
  @media (max-width: 1350px) {
    //height: 850px;
    right: -2%;
    img {
      width: 85%;
    }
  }
  @media (max-width: 1250px) {
    right: 5%;
    img {
      width: 100%;
    }
  }
  @media (max-width: 750px) {
    right: -10%;
    img {
      width: 80%;
    }
  }
  @media (max-width: 660px) {
    right: -20%;
    img {
      width: 75%;
    }
  }
  @media (max-width: 580px) {
    right: -40%;
    img {
      width: 50%;
    }
  }
  @media (max-width: 470px) {
    left: 65%;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
