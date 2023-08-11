import { colors } from "colors";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";

const fadeInLeftAnimation = keyframes` 
  from { 
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
  ${fadeInLeft}
`;

export const SolutionSectionWrap = styled.section`
  margin-top: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;

  @media (max-width: 1350px) {
    width: 95%;
  }
  @media (max-width: 1050px) {
    margin-top: 42px;
  }
`;

export const SolutionsGrid = styled.div`
  margin-top: 86px;
  width: 100%;
  @media (max-width: 680px) {
    margin-top: 40px;
  }
`;

export const SectionCard = styled("div").withConfig({
    shouldForwardProp: (prop) =>
        !["wide", "gridArea", "visible", "tablet"].includes(prop),
})<{
    wide?: boolean;
    gridArea?: string;
    visible: boolean;
    tablet?: boolean;
}>`
  position: relative;
  padding: 120px 70px 70px 120px;
  border-radius: 20px;
  height: ${({ wide }) => (wide ? "560px" : "735px")};
  background: linear-gradient(to right, ${colors.pink} 0%, ${colors.purple} 50%, ${colors.blue} 100%);
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : "none")};
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
  color: white;

  @media (max-width: 750px) {
    padding: 24px 70px 50px 24px;
    height: 445px;
  }

  @media (max-width: 680px) {
    height: 600px;
  }

  @media (max-width: 550px) {
    height: 550px;
  }

  opacity: 0;

  animation: ${({ visible }) => (visible ? fadeInLeftAnimation : "none")};
  animation-duration: 1s;
  animation-delay: ${({ gridArea, tablet }) =>
    gridArea === "third" ? (tablet ? "0.5s" : "1s") : "0.5s"};
  animation-fill-mode: forwards;
`;

export const TopIconDivider = styled.div`
  position: absolute;
  display: none;
  transform: scale(0.85);
  @media screen and (min-width: 1250px) {
    display: block;
    top: 80px;
    right: 42%;
  }
`
export const BottomIconDivider = styled.div`
  position: absolute;
  display: none;
  transform: scale(0.5);
  @media screen and (min-width: 1250px) {
    display: block;
    bottom: 50px;
    left: 30%;
  }
`
export const SolutionCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 100;
  @media (max-width: 750px) {
    justify-content: flex-start;
  }
`;

export const SolutionCardTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  max-width: 420px;
  @media (max-width: 680px) {
    margin-top: 12px;
  }

  @media (max-width: 550px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const SolutionCardDescription = styled("p").withConfig({
    shouldForwardProp: (prop) => !["small"].includes(prop),
})<{ small?: boolean }>`
  margin-top: 32px;
  font-size: 16px;
  text-wrap: balance;
  font-weight: 400;
  line-height: 24px;
  max-width: ${({ small }) => (small ? "280px" : "400px")};
  @media (max-width: 680px) {
    line-height: 1.2;
    margin-top: ${({ small }) => (small ? "50px" : "24px")};
  }
  @media (max-width: 550px) {
    font-size: 14px;
  }
`;

export const SolutionCardRealization = styled.span`
  display: block;
  margin-top: 92px;
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  @media (max-width: 680px) {
    margin-top: 64px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.4px;
  }
`;


export const ImageWrap1 = styled.div`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 372px;
  height: 956px;
  @media (max-width: 1050px) {
    //width: 126.688px;
    //height: 230.55px;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 600px;
`

export const IphoneMockup = styled.div`
  position: absolute;
  bottom: -285px;
  width: 372px;
  height: 956px;
  @media (max-width: 1050px) {
    right: 0;
    width: 150px;
    height: auto;
    bottom: 0;
  }
`;

export const TgMokup = styled.div`
  position: absolute;
  bottom: -50px;
  z-index: 3;
  width: auto;
  height: auto;
  right: 20%;
  @media (max-width: 1050px) {
    right: 85px;
    width: 150px;
    height: auto;
    bottom: 25px;
  }
`
