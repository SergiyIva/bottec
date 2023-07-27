import { colors } from "colors";
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
  display: flex;
  background: ${colors.purpleMain};
  border-radius: 30px;
  min-height: 250px;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 160px 0 82px 10%;
  position: relative;
  top: 0;
  left: 0;
  @media (max-width: 1250px) {
    padding: 60px;
  }
  @media (max-width: 470px) {
    padding: 30px;
  }
`;

export const BannerButtons = styled.div`
  display: flex;
  gap: 34px;
  justify-content: flex-start;
  margin-top: 88px;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    gap: 22px;
    button {
      height: 38px;
      font-size: 11px;
      div {
        height: 24px;
        width: 24px;
        svg {
          scale: 0.8;
        }
      }
    }
  }
  @media (max-width: 580px) {
    margin-top: 70px;
  }
`;

export const BannerHeading = styled.h1`
  font-size: 62px;
  line-height: 72px;
  font-weight: 500;
  width: 527px;
  animation: ${fadeInAnimation} 1s;
  @media (max-width: 700px) {
    font-size: 36px;
    font-weight: 500;
    line-height: 30px;
    width: 300px;
  }
  @media (max-width: 580px) {
    width: 200px;
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
  width: 660px;
  margin-top: 90px;
  display: flex;
  align-items: center;
  gap: 130px;
  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    width: fit-content;
  }
  @media (max-width: 580px) {
    margin-top: 28px;
  }
`;

export const ArrowDownCircle = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  z-index: 2;
  justify-content: center;
  background-color: ${colors.purpleMain};
  position: absolute;
  bottom: -26px;
  left: calc(50% - 26px);
  svg {
    transform: rotate(90deg);
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 716px;
  position: absolute;
  bottom: 0;
  right: 22%;
  z-index: 1;
  animation: ${fadeInRightAnimation} 0.8s;

  @media (max-width: 1550px) {
    right: 5%;
  }
  @media (max-width: 1250px) {
    height: 850px;
    img {
      height: 850px;
    }
  }
  @media (max-width: 990px) {
    height: 600px;
    img {
      height: 600px;
    }
  }
  @media (max-width: 580px) {
    height: 211px;
    img {
      height: 211px;
    }
    right: 10%;
  }
`;

export const GreenCircle = styled.div`
  width: 544px;
  height: 544px;
  border-radius: 50%;
  border: 100px solid ${colors.accentGreen};
  position: absolute;
  top: 42px;
  right: calc(22% - 69px);
  z-index: 0;

  @media (max-width: 1550px) {
    width: 350px;
    height: 350px;

    right: calc(5% + 34px);
    border-width: 50px;
  }
  @media (max-width: 1250px) {
    top: 180px;
    right: calc(5% + 75px);
  }
  @media (max-width: 990px) {
    top: 380px;
    right: calc(5%);
  }
  @media (max-width: 700px) {
    top: 300px;
  }
  @media (max-width: 580px) {
    width: 160px;
    height: 160px;
    border: none;
    background-color: ${colors.accentGreen};
    top: 400px;
    right: calc(10% - 20px);
  }
  @media (max-width: 470px) {
    top: 340px;
  }
`;

export const TransparentCircleContainer = styled.div`
  position: absolute;
  width: 364px;
  height: 364px;
  overflow: hidden;
  bottom: 0;
  right: 7.6%;
  @media (max-width: 1250px) {
    right: 35%;
  }
  @media (max-width: 990px) {
    right: 20%;
  }
  @media (max-width: 800px) {
    right: 0px;
  }
  @media (max-width: 580px) {
    width: 108px;
    height: 108px;
  }
`;

export const TransparentCircle = styled.div`
  width: 364px;
  height: 364px;
  background: transparent 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 100px;
  left: 0;
  border-radius: 50%;
  @media (max-width: 800px) {
    top: 35%;
    left: 35%;
  }
  @media (max-width: 580px) {
    width: 108px;
    height: 108px;
  }
`;
