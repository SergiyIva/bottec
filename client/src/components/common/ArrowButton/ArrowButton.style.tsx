import { colors } from "colors";
import { styled } from "styled-components";

export const StyledArrowButton = styled("button").withConfig({
  shouldForwardProp: (prop) => !["outlined", "inverted"].includes(prop),
})<{ outlined?: boolean; inverted?: boolean }>`
  background-color: ${({ outlined }) => (outlined ? "transparent" : "white")};
  color: ${({ outlined }) => (outlined ? "white" : colors.purpleMain)};
  border: 2px solid white;
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

  &:hover {
    background-color: ${({ outlined }) => (outlined ? "white" : "transparent")};
    color: ${({ outlined }) => (outlined ? colors.purpleMain : "white")};
    div {
      background-color: ${({ outlined }) =>
        outlined ? colors.purpleMain : "white"};
    }
    div > svg > path:nth-child(1) {
      fill: ${({ outlined }) => (outlined ? "white" : colors.purpleMain)};
    }
    div > svg > path:nth-child(2) {
      stroke: ${({ outlined }) => (outlined ? "white" : colors.purpleMain)};
    }
  }
  &:active {
    scale: 1.1;
  }
`;

export const ArrowCircle = styled("div").withConfig({
  shouldForwardProp: (prop) => !["outlined"].includes(prop),
})<{ outlined?: boolean }>`
  box-shadow: 0px 3px 3px 0px #00000029;
  background-color: ${({ outlined }) =>
    outlined ? "white" : colors.purpleMain};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 16px;
  svg > path:nth-child(1) {
    fill: ${({ outlined }) => (outlined ? colors.purpleMain : "white")};
  }
  svg > path:nth-child(2) {
    stroke: ${({ outlined }) => (outlined ? colors.purpleMain : "white")};
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
