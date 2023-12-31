import { colors } from "colors";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";
import puzzle from "assets/puzzle.png";
import { ReactComponent as ConstructorSVG } from "assets/constructor.svg";
import { ReactComponent as MobileConstructorSVG } from "assets/constructor-mobile.svg";
import { ReactComponent as SocialsCircleSVG } from "assets/socials-circle.svg";
import { ReactComponent as SocialsCircleMobileSVG } from "assets/socials-circle-mobile.svg";

const fadeInLeftAnimation = keyframes` 
  from { 
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
  ${fadeInLeft}
`;

export const DevelopSectionWrap = styled.section`
  margin-top: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;

  @media (max-width: 1350px) {
    width: 95%;
  }
  @media (max-width: 1050px) {
    margin-top: 72px;
  }
`;

export const DevelopGrid = styled.div`
  margin-top: 72px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "first first"
    "second third";
  width: 100%;
  gap: 30px;
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 680px) {
    margin-top: 67px;
    gap: 14px;
  }
`;

const urlMatcher = (gridArea: string | undefined) =>
  gridArea === "third" ? puzzle : "";

export const DevelopCard = styled("div").withConfig({
  shouldForwardProp: (prop) =>
    !["gridArea", "color", "visible", "tablet"].includes(prop),
})<{
  gridArea?: string;
  color?: string;
  visible: boolean;
  tablet?: boolean;
}>`
  position: relative;
  border-radius: 20px;
  background: ${({ color }) => (color ? color : colors.purpleMain)};
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : "none")};
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
  color: white;
  height: 572px;
  padding: ${({ gridArea }) =>
    gridArea === "first" ? "0 0 0 120px" : "40px 0 0 0"};
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 52px;
  font-family: Graphik LCG, Gordita, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  display: flex;
  text-align: ${({ gridArea }) => (gridArea === "first" ? "start" : "center")};
  justify-content: center;
  flex-direction: ${({ gridArea }) =>
    gridArea === "first" ? "column" : "row"};

  @media (max-width: 1050px) {
    padding: ${({ gridArea }) =>
      gridArea === "third" ? "92px 0 0 0" : "47px 0 0 0"};
    flex-direction: row;
    text-align: center;
  }

  @media (max-width: 680px) {
    height: 371px;
    font-size: ${({ gridArea }) => (gridArea === "third" ? "32px" : "20px")};
    line-height: 20px;
  }

  opacity: 0;

  animation: ${({ visible }) => (visible ? fadeInLeftAnimation : "none")};
  animation-duration: 1s;
  overflow: hidden;
  animation-delay: ${({ gridArea, tablet }) =>
    gridArea === "third" ? (tablet ? "0.5s" : "1s") : "0.5s"};
  animation-fill-mode: forwards;
  background-image: url(${({ gridArea }) => urlMatcher(gridArea)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
`;

export const DevelopCardText = styled.span`
  position: relative;
  z-index: 2;
`;

export const BackgroundColorizer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #3772ff;
  mix-blend-mode: soft-light;
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

export const StyledConstructorSVG = styled(ConstructorSVG)`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 572px;
  z-index: 1;
`;

export const StyledMobileConstructorSVG = styled(MobileConstructorSVG)`
  position: absolute;
  bottom: 60px;
  right: 70px;
  scale: 1.5;
  @media (max-width: 680px) {
    scale: 1;
    bottom: 0;
    right: 0;
  }
`;

export const IphoneMockup = styled.img`
  position: absolute;
  width: 258px;
  height: auto;
  bottom: -135px;
  left: calc(50% - 129px);
  z-index: 1;

  @media (max-width: 1650px) {
    width: 200px;
    left: calc(50% - 100px);
  }
  @media (max-width: 680px) {
    width: 130px;
    left: calc(50% - 65px);
    bottom: -70px;
  }
`;

export const StyledSocialsCircle = styled(SocialsCircleSVG)`
  position: absolute;
  width: 100%;
  bottom: -40%;
  left: 0;
`;

export const StyledSocialsCircleMobile = styled(SocialsCircleMobileSVG)`
  position: absolute;
  bottom: -20%;
  width: 100%;
`;

const realizationMatcher = {
  width: ["755px", "598px", "439px", "303px"],
  bottom: ["-113px", "-34px", "44px", "113px"],
  right: ["23px", "101px", "180px", "249px"],
  widthSmall: ["293px", "216px", "158px", "109px"],
  bottomSmall: ["-35px", "-7px", "21px", "46px"],
  rightSmall: ["3px", "-32px", "60px", "85px"],
};

const turnKeyMatcher = {
  width: ["424px", "613px", "834px", "1054px"],
  top: ["-60px", "-155px", "-260px", "-375px"],
  left: ["-60px", "-155px", "-260px", "-375px"],
  widthSmall: ["240px", "347px", "472px", "596px"],
  topSmall: ["-35px", "-87px", "-148px", "-212px"],
  leftSmall: ["-34px", "-87px", "-147px", "-212px"],
};

const matchCircle = (
  property: string,
  realization: boolean | undefined,
  circleno: number
) => {
  return realization
    ? realizationMatcher[property as keyof typeof realizationMatcher][
        circleno - 1
      ]
    : turnKeyMatcher[property as keyof typeof turnKeyMatcher][circleno - 1];
};

export const PulsingCircle = styled("div").withConfig({
  shouldForwardProp: (prop) => !["cirlceno", "realization"].includes(prop),
})<{ circleno: number; realization?: boolean }>`
  width: ${({ circleno, realization }) =>
    matchCircle("width", realization, circleno)};
  height: ${({ circleno, realization }) =>
    matchCircle("width", realization, circleno)};
  border-radius: 50%;
  background: #7252dc;
  box-shadow: 0px 3px 6px 0px #4d0cac inset;
  position: absolute;
  bottom: ${({ circleno, realization }) =>
    matchCircle("bottom", realization, circleno)};
  right: ${({ circleno, realization }) =>
    matchCircle("right", realization, circleno)};

  @media (max-width: 680px) {
    width: ${({ circleno, realization }) =>
      matchCircle("widthSmall", realization, circleno)};
    height: ${({ circleno, realization }) =>
      matchCircle("widthSmall", realization, circleno)};
    bottom: ${({ circleno, realization }) =>
      matchCircle("bottomSmall", realization, circleno)};
    right: ${({ circleno, realization }) =>
      matchCircle("rightSmall", realization, circleno)};
  }
`;
