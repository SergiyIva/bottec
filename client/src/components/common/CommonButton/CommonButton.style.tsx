import { colors } from "colors";
import { styled } from "styled-components";

export const CommonButtonWrap = styled("button").withConfig({
  shouldForwardProp: (prop) => !["mt"].includes(prop),
})<{
  mt?: string;
}>`
  color: ${colors.purpleMain};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 54px;
  border-radius: 14px;
  border: 2px solid ${colors.purpleMain};
  background-color: white;
  margin-top: ${({ mt }) => (mt ? mt : "0px")};
  transition: 0.3s ease;
  padding-inline: 22px;
  text-align: center;

  @media (max-width: 700px) {
    padding-inline: 8px;
    height: 41.929px;
    font-size: 14px;
  }

  &:hover {
    background-color: ${colors.purpleMain};
    color: white;
  }
  &:active {
    scale: 1.1;
  }
`;
