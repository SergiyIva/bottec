import { colors } from "colors";
import styled, {keyframes} from "styled-components";
import { fadeInUp } from "react-animations";

const fadeInUpAnimation = keyframes` 
  from { 
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
  ${fadeInUp}
`;
export const SectionTitle = styled("h2").withConfig({
  shouldForwardProp: (prop) => !["visible", "mt", "color", "textAlign"].includes(prop),
})<{ mt?: string; color?: string; textAlign?: string; visible?: boolean; }>`
  font-size: 48px;
  font-weight: 500;
  line-height: 52px;
  color: ${colors.textBlack};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  @media (max-width: 680px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
  }
  color: ${({ color }) => (color ? color : colors.textBlack)};
  opacity: ${({ visible }) => visible === undefined ? 1 : 0};
  animation: ${({ visible }) => (visible ? fadeInUpAnimation : "none")};
  animation-duration: 1s;
  animation-fill-mode: both;
`;

export const SectionTitleHighlight = styled.span`
  color: ${colors.purpleMain};
  font-size: inherit;
  line-height: inherit;
`;

export const SectionText = styled("p").withConfig({
  shouldForwardProp: (prop) =>
    !["visible", "maxWidth", "mt", "color", "textAlign"].includes(prop),
})<{ maxWidth?: string; mt?: string; color?: string; textAlign?: string; visible?: boolean; }>`
  width: 80%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "452px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  font-size: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: ${({ color }) => (color ? color : colors.textBlack)};
  margin-top: ${({ mt }) => (mt ? mt : "32px")};
  @media (max-width: 680px) {
    font-size: 12px;
    font-style: normal;
    line-height: 20px;
    margin-top: 8px;
  }
  opacity: ${({ visible }) => visible === undefined ? 1 : 0};
  animation: ${({ visible }) => (visible ? fadeInUpAnimation : "none")};
  animation-duration: 1s;
  animation-fill-mode: both;
`;
