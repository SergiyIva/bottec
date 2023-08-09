import styled, { keyframes } from "styled-components";
import { ReactComponent as SocialPathsSVG } from "assets/social-paths.svg";
import iphoneMockup from "assets/iphonemock.png";
import { colors } from "colors";

const pulse = keyframes`
    0% {
        transform: scale(0.6);
        opacity: 0;
      }

      50% {
        transform: scale(0.6);
        opacity: 0.5;
      }

      60% {
        transform: scale(0.9);
        opacity: 0.26;
      }

      70% {
        transform: scale(1.1);
        opacity: 0.1;
      }

      80% {
        transform: scale(1.25);
        opacity: 0;
      }

      100% {
        transform: scale(1.4);
        opacity: 0;
      }
`;

export const WhatsThatSectionWrap = styled.section`
  margin-top: -222px;
  background: white;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: 1112px;
  position: relative;
  z-index: 2;

  @media (max-width: 1350px) {
    width: 95%;
  }
  @media (max-width: 1050px) {
    margin-top: 42px;
  }
`;

export const StyledSocialPaths = styled(SocialPathsSVG)`
  margin-top: 25px;
`;

export const IphoneMockup = styled("div").withConfig({
  shouldForwardProp: (prop) => !["n"].includes(prop),
})<{ n: number }>`
  background-image: url(${iphoneMockup});
  background-repeat: no-repeat;
  background-size: cover;
  width: 272px;
  height: 551px;
  position: absolute;
  bottom: -150px;
  left: calc(
    50%
      ${({ n }) =>
        n < 3 ? "- " + (136 + 288 * n) : "+ " + (154 + 288 * (n - 3))}px
  );
`;

export const MockupHider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CircleText = styled.div`
  width: 314px;
  height: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  background: ${colors.purpleMain};
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(15px);
  position: absolute;
  bottom: -157px;
  left: calc(50% - 157px);
  z-index: 2;
`;

export const CircleTextContent = styled.p`
  margin-top: 60px;
  max-width: 232px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

export const PulsingCircle = styled("div").withConfig({
  shouldForwardProp: (prop) => !["n"].includes(prop),
})<{ n: number }>`
  width: ${({ n }) => (n === 0 ? "400px" : n === 1 ? "450px" : "500px")};
  height: ${({ n }) => (n === 0 ? "400px" : n === 1 ? "450px" : "500px")};
  position: absolute;
  bottom: ${({ n }) => (n === 0 ? -200 : n === 1 ? -225 : -250)}px;
  right: calc(50% - ${({ n }) => (n === 0 ? 200 : n === 1 ? 225 : 250)}px);
  z-index: 1;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0);
  animation: ${pulse} 8s linear infinite
    ${({ n }) => (n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n === 3 ? 4 : 5)}s;
  border-radius: 50%;
  box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  border: 2px solid white;
`;
