import { colors } from "colors";
import { styled } from "styled-components";

export const CommonButtonWrap = styled("button").withConfig({
  shouldForwardProp: (prop) => !["mt", "common"].includes(prop),
})<{
  mt?: string;
  common?: boolean;
  width?: string;
}>`
  color: ${({ common }) => (common ? "white" : colors.purpleMain)};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 54px;
  border-radius: 14px;
  border: 2px solid ${({ common }) => (common ? "white" : colors.purpleMain)};
  /* background-color: ${({ common }) =>
    common ? "transparent" : colors.purpleMain}; */
  background-color: transparent;
  margin-top: ${({ mt }) => (mt ? mt : "0px")};
  transition: 0.3s ease;
  padding-inline: 22px;
  text-align: center;
  width: ${({ width }) => (width ? width : "fit-content")};

  @media (max-width: 700px) {
    padding-inline: 8px;
    height: 41.929px;
    font-size: 14px;
  }

  &:hover {
    background-color: ${({ common }) => (common ? "white" : colors.purpleMain)};
    color: ${({ common }) => (common ? colors.purpleMain : "white")};
  }
  &:active {
    scale: 1.1;
  }
`;
