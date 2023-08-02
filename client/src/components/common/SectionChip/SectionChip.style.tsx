import { colors } from "colors";
import styled from "styled-components";

export const SectionChipWrap = styled("div").withConfig({
  shouldForwardProp: (prop) => !["color", "mt"].includes(prop),
})<{
  color?: string;
  mt?: string;
}>`
  background-color: ${({ color }) => (color ? color : colors.purpleMain)};
  color: white;
  height: 42px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 37px;
  padding-inline: 20px;
  border-radius: 10px;
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    height: 34.761px;
    font-size: 14px;
    line-height: 20px;
  }
`;
