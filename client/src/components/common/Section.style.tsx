import { colors } from "colors";
import styled from "styled-components";

export const SectionTitle = styled("h2").withConfig({
  shouldForwardProp: (prop) => !["mt", "color", "textAlign"].includes(prop),
})<{ mt?: string; color?: string; textAlign?: string }>`
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
`;

export const SectionTitleHighlight = styled.span`
  color: ${colors.purpleMain};
  font-size: inherit;
  line-height: inherit;
`;

export const SectionText = styled("p").withConfig({
  shouldForwardProp: (prop) =>
    !["maxWidth", "mt", "color", "textAlign"].includes(prop),
})<{ maxWidth?: string; mt?: string; color?: string; textAlign?: string }>`
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
`;
