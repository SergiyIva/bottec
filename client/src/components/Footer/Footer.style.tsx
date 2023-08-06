import styled from "styled-components";
import {Socials} from "../Footer/Footer.types";
import {colors} from "../../colors";

const mobileBreakpoint = "1075px";
export const FooterWrapper = styled.div`
  background-color: #7252DC;
  color: white;
  padding: 75px 250px 29px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 350px;
  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
    padding: 50px 25px;
    height: 610px;
    padding: 28px 98px 0px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    //justify-content: norma
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${mobileBreakpoint}) {
    align-items: center;
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Co Headline Corp Bold";
  font-size: 24px;
  gap: 18px;
  @media (max-width: 1075px) {
    height: 45px;
    font-family: "Co Headline Corp Bold";
    font-size: 24px;
  }
  @media (max-width: 470px) {
    height: 45px;
    font-size: 14px;
    //gap: 8px;
    svg {
      height: 45px;
      font-family: "Co Headline Corp Bold";
      //width: fit-content;
    }
  }
`;

export const H1 = styled.h1`
  margin-bottom: 21px;
  font-family: "Gordita Medium";
  font-size: 16px;
  font-weight: 300;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 14px;
    font-family: "Gordita Medium";
    margin-bottom: 5px;
  }
`;

export const H2 = styled.h2`
  margin: 0;
  font-family: "Gordita Light";
  font-size: 16px;
  font-family: "Gordita Light";
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 14px;
  }
`;

export const PhoneNumber = styled.p`
  display: flex;
  position: absolute;
  top: 229px;
  font-family: "Gordita Medium";
  @media (max-width: ${mobileBreakpoint}) {
    top: 460px;
    font-size: 14px;
    font-family: "Gordita Medium";
  }
`;

export const Line = styled.div`
  position: absolute;
  bottom: 76px;
  left: 249px;
  right: 249px; 
  height: 1px;
  background-color: #ffffff;
  @media (max-width: ${mobileBreakpoint}) {
    left: 0;
    right: 0;
    bottom: 107px;
  }
`;
export const Copyright = styled.p`
  position: absolute;
  bottom: 26px;
  left: 250px;
  font-family: "Gordita Light";
  font-size: 16px;
  @media (max-width: ${mobileBreakpoint}) {
    font-family: "Gordita Light";
    position: static;
    text-align: center;
    margin-top: 60px;
    font-size: 14px;
  }
`;
const mapSocialToColor = {
  [Socials.Instagram]: colors.darkPink,
  [Socials.Whatsapp]: colors.whatsAppGreen,
  [Socials.Telegram]: colors.telegramBlue,
  [Socials.VK]: colors.purpleDarker,
};
export const SocialIcons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 10px;
  bottom: 18px;
  right: 250px;
  @media (max-width: ${mobileBreakpoint}) {
    position: static;
    display: flex;
    bottom: 0px;
    width: 100%;
    gap: 8px;
    right: 250px;
    margin-bottom: -10px;
  }
`;
export const SocialIcon = styled("div").withConfig({
  shouldForwardProp: (prop) => !["social", "mobile"].includes(prop),
})<{ social: Socials; mobile?: boolean }>`
  height: ${({ mobile }) => (mobile ? "32px" : "40px")};
  width: ${({ mobile }) => (mobile ? "32px" : "40px")};
  background-color: ${(props) => mapSocialToColor[props.social]};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  &:hover {
    scale: 1.15;
  }
  cursor: pointer;
`;