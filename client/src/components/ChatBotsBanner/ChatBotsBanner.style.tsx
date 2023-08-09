import { colors } from "colors";
import styled, { keyframes } from "styled-components";
import { ReactComponent as PaintedArrowSVG } from "assets/painted-arrow.svg";
import { bounceIn } from "react-animations";
import { Socials } from "components/Header/Header.types";

const mapSocialToColor = {
  [Socials.Instagram]: colors.darkPink,
  [Socials.Whatsapp]: colors.whatsAppGreen,
  [Socials.Telegram]: colors.telegramBlue,
  [Socials.VK]: colors.purpleDarker,
  [Socials.Viber]: colors.purpleDarker,
};

const bounceInAnimation = keyframes`
 from { 
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
  ${bounceIn}`;

const draw = keyframes`
  to {
      stroke-dashoffset: 0;
    }
`;
const fade = keyframes`
  to {
      fill-opacity: 1;
    }
`;

export const ChatbotsBannerWrap = styled.section`
  background-color: ${colors.purpleMain};
  width: 96%;
  padding: 155px 200px 300px 200px;
  position: relative;
  color: white;
  border-radius: 30px;
  @media (max-width: 1600px) {
    padding: 75px 100px;
  }
  display: flex;
  justify-content: space-between;
`;

export const BannerTitle = styled.h1`
  font-size: 65px;
  font-weight: 500;
  line-height: 70px;
  max-width: 507px;
`;

export const BannerText = styled.p`
  font-family: Graphik LCG;
  font-size: 24px;
  font-weight: 200;
  line-height: 37px;
  margin-top: 40px;
  max-width: 518px;
`;

export const VolumetricBall = styled("div").withConfig({
  shouldForwardProp: (prop) => !["big"].includes(prop),
})<{
  big?: boolean;
}>`
  background-image: linear-gradient(135deg, #6535e5 0%, #331b73 100%);
  width: ${({ big }) => (big ? "268px" : "165px")};
  height: ${({ big }) => (big ? "268px" : "165px")};
  position: absolute;
  top: ${({ big }) => (big ? "311px" : "120px")};
  right: ${({ big }) => (big ? "164px" : "811px")};
  border-radius: 50%;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CodeSection = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-width: 1px;
  border-color: #fff;
  border-radius: 20px;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.16));
  backdrop-filter: blur(10px);
  width: 720px;
  height: 471px;
  position: relative;
  padding-top: 108px;
  padding-left: 30px;
`;

export const Phone = styled("div").withConfig({
  shouldForwardProp: (prop) => !["social"].includes(prop),
})<{
  social: Socials;
}>`
  width: 310px;
  height: 585px;
  border: 4px solid black;
  border-radius: 40px 40px 0 0;
  background-color: ${({ social }) => mapSocialToColor[social]};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: absolute;
  right: 90px;
  bottom: 0;
  border-bottom: 0;
  transition: all 0.3s ease;
`;

export const PhoneClock = styled.span`
  font-family: Inter;
  font-size: 62px;
  font-style: normal;
  font-weight: 400;
  line-height: 67px;
  margin-top: 58px;
`;

export const PhoneDate = styled.span`
  text-align: center;
  font-family: Graphik LCG;
  font-size: 14px;
  font-weight: 400;
  line-height: 52px;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 48px;
  padding-left: 22px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const Message = styled("div").withConfig({
  shouldForwardProp: (prop) => !["reply", "social"].includes(prop),
})<{
  reply?: boolean;
  social: Socials;
}>`
  width: ${({ reply }) => (reply ? "262px" : "193px")};
  padding: 10px 20px;
  border-radius: ${({ reply }) =>
    reply ? "32px 0 32px 32px" : "0 32px 32px 32px"};
  background-color: ${({ reply, social }) =>
    reply
      ? social === Socials.VK || social === Socials.Viber
        ? colors.telegramBlue
        : colors.purpleDarker
      : "white"};
  color: ${({ reply }) => (reply ? "white" : colors.purpleDarker)};
  ${({ reply }) => (reply ? "margin-top: 20px;" : "")};
  opacity: 0;
  animation: ${bounceInAnimation} 0.6s;
  animation-delay: ${({ reply }) => (reply ? "1.5s" : "0.5s")};
  animation-fill-mode: forwards;
`;

export const SocialPlacer = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: -20px;
  top: 130px;
  scale: 1.4;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.16));
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const SocialSwitcher = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SwitcherChip = styled("div").withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})<{
  active: boolean;
}>`
  color: ${({ active }) => (active ? "black" : "white")};
  padding: 5px 12px;
  background-color: ${({ active }) => (active ? "white" : "transparent")};
  border-radius: 28px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledPaintedArrow = styled(PaintedArrowSVG)`
  & > path {
    fill: white;
    fill-opacity: 0;
    stroke: white;
    stroke-width: 1;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${draw} 2s ease-in forwards 2s,
      ${fade} 0.8s ease-in forwards 2.8s;
  }
  position: absolute;
  bottom: 0;
  left: 232px;
`;
