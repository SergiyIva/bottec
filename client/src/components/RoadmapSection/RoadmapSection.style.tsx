import { colors } from "colors";
import styled from "styled-components";

export const RoadmapSectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 75%;

  @media (max-width: 1350px) {
    width: 95%;
  } */
  width: 100%;
  position: relative;
  padding-bottom: 110px;
`;
export const RoadmapSliderWrap = styled.div`
  position: relative;
  margin-top: 100px;
  overflow-x: hidden;
  height: 640px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
`;

const matchShift = (selectedYear: number) => {
  return "calc(50% - " + (200 + selectedYear * 420) + "px)";
};

export const SliderContent = styled.div`
  display: flex;
  gap: 20px;
`;

export const SliderMover = styled("div").withConfig({
  shouldForwardProp: (prop) => !["selectedYear"].includes(prop),
})<{
  selectedYear: number;
}>`
  width: 4000px;
  position: absolute;
  height: 100%;
  top: 0;
  transition: 0.5s ease-in-out;
  left: ${({ selectedYear }) => matchShift(selectedYear)};
`;

export const YearsWrap = styled.div`
  width: 100%;
  position: relative;
`;

export const Year = styled("span").withConfig({
  shouldForwardProp: (prop) => !["active", "pos"].includes(prop),
})<{
  active: boolean;
  pos: number;
}>`
  font-weight: 500;
  font-size: 48px;
  line-height: 52px;
  color: ${({ active }) => (active ? colors.purpleMain : colors.textFade)};
  position: absolute;
  top: 0;
  left: ${({ pos }) => 10 + pos * 420 + "px"};
`;

export const SliderText = styled("p").withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})<{
  active: boolean;
}>`
  padding-left: 10px;
  font-family: Graphik LCG;
  height: 420px;
  width: 400px;
  color: ${colors.textBlack};
  font-size: 18px;
  line-height: 28px;
  transition: 0.5s ease-in-out;
  opacity: ${({ active }) => (active ? "1" : "0")};
`;

export const Timeline = styled.div`
  display: flex;
  align-items: center;
  width: 4000px;
  height: 100px;
  position: relative;
  margin-top: 50px;
`;

export const DottedLine = styled.hr`
  border: 1px dashed ${colors.textFade};
  width: 100%;
`;

export const DotContainer = styled("div").withConfig({
  shouldForwardProp: (prop) => !["active", "pos"].includes(prop),
})<{
  active: boolean;
  pos: number;
}>`
  background: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 52px;
  padding-right: 10px;
  height: 42px;
  position: absolute;
  top: calc(50% - 21px);
  left: ${({ pos }) => pos * 420 + "px"};

  & > div {
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    width: ${({ active }) => (active ? "32px" : "20px")};
    height: ${({ active }) => (active ? "32px" : "20px")};
    background: ${({ active }) =>
      active ? colors.purpleMain : colors.textFade};
  }
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 110px;
  left: calc(50% - 190px);
  display: flex;
  gap: 24px;
`;

export const SliderButton = styled("button").withConfig({
  shouldForwardProp: (prop) => !["inverse"].includes(prop),
})<{
  inverse?: boolean;
}>`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
  svg {
    transform: rotate(${({ inverse }) => (inverse ? "180deg" : "0")});
  }
  svg > path:nth-child(1) {
    fill: ${colors.purpleMain};
  }
  svg > path:nth-child(2) {
    stroke: ${colors.purpleMain};
  }

  &:hover {
    background: ${colors.purpleMain};
    svg > path:nth-child(1) {
      fill: white;
    }
    svg > path:nth-child(2) {
      stroke: white;
    }
  }
  &:active {
    scale: 1.1;
  }
  transition: 0.3s ease;
`;
