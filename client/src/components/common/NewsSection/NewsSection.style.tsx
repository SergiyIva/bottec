import { colors } from "colors";
import styled from "styled-components";

export const NewsSectionWrap = styled.section`
  margin-top: 100px;
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

export const NewsSlider = styled.div`
  width: 100%;
  position: relative;
  margin-top: 100px;
  height: 515px;
`;

export const NewsSliderHider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const NewsSliderContent = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  gap: 30px;
`;

export const SliderButton = styled("button").withConfig({
  shouldForwardProp: (prop) => !["inverse"].includes(prop),
})<{
  inverse?: boolean;
}>`
  position: absolute;
  top: calc(50% - 27px);
  ${({ inverse }) => (inverse ? "left: -27px;" : "right: -27px;")}
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
