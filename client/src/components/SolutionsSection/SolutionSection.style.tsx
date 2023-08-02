import { colors } from "colors";
import styled, { keyframes } from "styled-components";
import { ReactComponent as MessageSVG } from "assets/message.svg";
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "first first"
    "second third"
    "fourth fourth";
  width: 100%;
  gap: 30px;
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 680px) {
    margin-top: 40px;
    gap: 14px;
  }
`;

export const SectionCard = styled("div").withConfig({
  shouldForwardProp: (prop) =>
    !["wide", "gridArea", "color", "visible", "tablet"].includes(prop),
})<{
  wide?: boolean;
  gridArea?: string;
  color?: string;
  visible: boolean;
  tablet?: boolean;
}>`
  position: relative;
  padding: 120px 70px 70px 120px;
  border-radius: 20px;
  height: ${({ wide }) => (wide ? "560px" : "735px")};
  background: ${({ color }) => (color ? color : colors.purpleMain)};
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : "none")};
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
  color: white;

  @media (max-width: 680px) {
    padding: 24px 70px 50px 24px;
    height: 445px;
  }

  opacity: 0;

  animation: ${({ visible }) => (visible ? fadeInLeftAnimation : "none")};
  animation-duration: 1s;
  animation-delay: ${({ gridArea, tablet }) =>
    gridArea === "third" ? (tablet ? "0.5s" : "1s") : "0.5s"};
  animation-fill-mode: forwards;
`;

export const SolutionCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 2;
  @media (max-width: 680px) {
    justify-content: flex-start;
  }
`;

export const SolutionCardTitle = styled.h3`
  font-size: 48px;
  font-weight: 500;
  line-height: 52px;
  max-width: 450px;
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
  font-weight: 400;
  line-height: 24px;
  max-width: ${({ small }) => (small ? "280px" : "325px")};
  @media (max-width: 680px) {
    margin-top: ${({ small }) => (small ? "50px" : "8px")};
  }
  @media (max-width: 550px) {
    font-size: 12px;
    line-height: 24px;
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
    margin-top: 16px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    opacity: 0.5;
  }
`;

export const StyledMessageSVG = styled(MessageSVG)`
  @media (max-width: 680px) {
    scale: 0.61;
    position: relative;
    left: -22px;
  }
`;

export const ImageWrap1 = styled.div`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 15%;
  width: 372px;
  height: 956px;
  @media (max-width: 1050px) {
    width: 126.688px;
    height: 230.55px;
  }
`;

export const IphoneMockup = styled.div`
  position: absolute;
  bottom: -285px;
  width: 372px;
  height: 956px;
  @media (max-width: 1050px) {
    width: 126.688px;
    height: 230.55px;
    bottom: 0;
  }
`;

export const IphoneMockup2 = styled.div`
  position: absolute;
  right: 10%;
  bottom: 0;
  z-index: 1;
  @media (max-width: 1050px) {
    width: 129px;
    height: 260px;
  }
`;

const pulsingCircleMatcher = {
  width: ["424px", "613px", "834px", "1054px"],
  top: ["-60px", "-155px", "-260px", "-375px"],
  left: ["-60px", "-155px", "-260px", "-375px"],
  widthSmall: ["240px", "347px", "472px", "596px"],
  topSmall: ["-35px", "-87px", "-148px", "-212px"],
  leftSmall: ["-34px", "-87px", "-147px", "-212px"],
};

export const CircleHider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

export const PulsingCircle = styled("div").withConfig({
  shouldForwardProp: (prop) => !["cirlceno"].includes(prop),
})<{ circleno: number }>`
  width: ${({ circleno }) => pulsingCircleMatcher["width"][circleno - 1]};
  height: ${({ circleno }) => pulsingCircleMatcher["width"][circleno - 1]};
  border-radius: 50%;
  background: #3772ff;
  box-shadow: 0px 3px 6px 0px #7252dc inset;
  position: absolute;
  top: ${({ circleno }) => pulsingCircleMatcher["top"][circleno - 1]};
  left: ${({ circleno }) => pulsingCircleMatcher["left"][circleno - 1]};
  @media (max-width: 680px) {
    width: ${({ circleno }) =>
      pulsingCircleMatcher["widthSmall"][circleno - 1]};
    height: ${({ circleno }) =>
      pulsingCircleMatcher["widthSmall"][circleno - 1]};
    top: ${({ circleno }) => pulsingCircleMatcher["topSmall"][circleno - 1]};
    left: ${({ circleno }) => pulsingCircleMatcher["leftSmall"][circleno - 1]};
  }
`;

export const IphoneMockupLeft = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: calc(10% + 200px);
  @media (max-width: 1050px) {
    top: auto;
    bottom: 0;
    right: calc(2% + 110px);
  }
`;

export const IphoneMockupRight = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 10%;
  @media (max-width: 1050px) {
    right: 2%;
    top: auto;
    bottom: 0;
  }
`;

export const ArrowButtonContainer = styled.div`
  margin-top: 58px;
  @media (max-width: 680px) {
    position: absolute;
    bottom: -18px;
    left: calc(50% - 72px);
    margin-top: 16px;
  }
`;
