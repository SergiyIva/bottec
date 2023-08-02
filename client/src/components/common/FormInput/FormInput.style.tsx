import { colors } from "colors";
import styled from "styled-components";

export const StyledFormInput = styled("input").withConfig({
  shouldForwardProp: (prop) => !["width", "height", "mt"].includes(prop),
})<{
  width?: string;
  height?: string;
  mt?: string;
}>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "55px")};
  border-radius: 15px;
  border: 1px solid #ededed;
  background: #f8f8f8;
  box-shadow: 6px 6px 3px 0px rgba(112, 112, 112, 0.4);
  padding: 15px 25px;
  margin-top: ${({ mt }) => (mt ? mt : "25px")};
  color: ${colors.textBlack};
  &::placeholder {
    color: ${colors.textSub};
  }
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  outline: none;
`;
