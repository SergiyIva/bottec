import { colors } from "colors";
import { styled } from "styled-components";

export const StyledArrowButton = styled("button").withConfig({
  shouldForwardProp: (prop) => !["outlined", "inverted", "mt"].includes(prop),
})<{ outlined?: boolean; inverted?: boolean; mt?: string }>`
  background-color: ${({ outlined, inverted }) =>
    outlined ? "transparent" : inverted ? colors.purpleMain : "white"};
  color: ${({ outlined, inverted }) =>
    outlined || inverted ? "white" : colors.purpleMain};
  border: ${({ inverted }) =>
    inverted ? "2px solid " + colors.purpleMain : "2px solid white"};
  border-radius: 35px;
  height: 51px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 10px 8px 10px 20px;
  width: fit-content;
  white-space: nowrap;
  transition: 0.3s ease;
  margin-top: ${({ mt }) => (mt ? mt : "0")};

  &:hover {
    background-color: ${({ outlined, inverted }) =>
      outlined || inverted ? "white" : "transparent"};
    color: ${({ outlined, inverted }) =>
      outlined || inverted ? colors.purpleMain : "white"};
    div {
      background-color: ${({ outlined, inverted }) =>
        outlined || inverted ? colors.purpleMain : "white"};
    }
    div > svg > path:nth-child(1) {
      fill: ${({ outlined, inverted }) =>
        outlined || inverted ? "white" : colors.purpleMain};
    }
    div > svg > path:nth-child(2) {
      stroke: ${({ outlined, inverted }) =>
        outlined || inverted ? "white" : colors.purpleMain};
    }
  }
  &:active {
    scale: 1.1;
  }

  @media (max-width: 700px) {
    height: 38px;
    font-size: 14px;
    div {
      height: 24px;
      width: 24px;
      svg {
        scale: 0.8;
      }
    }
  }
  @media (max-width: 310px) {
    font-size: 11px;
  }
`;

export const ArrowCircle = styled("div").withConfig({
  shouldForwardProp: (prop) => !["outlined", "inverted"].includes(prop),
})<{ outlined?: boolean; inverted?: boolean }>`
  box-shadow: 0px 3px 3px 0px #00000029;
  background-color: ${({ outlined, inverted }) =>
    outlined ? "white" : inverted ? "white" : colors.purpleMain};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 16px;
  svg > path:nth-child(1) {
    fill: ${({ outlined, inverted }) =>
      outlined ? colors.purpleMain : inverted ? colors.purpleMain : "white"};
  }
  svg > path:nth-child(2) {
    stroke: ${({ outlined, inverted }) =>
      outlined ? colors.purpleMain : inverted ? colors.purpleMain : "white"};
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
