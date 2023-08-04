import styled from "styled-components";
import {Socials} from "../Footer/Footer.types";
import {colors} from "../../colors";


export const FooterWrapper = styled.div`
  background-color: #7252DC;
  color: white;
  padding: 75px 250px 29px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 350px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Co Headline Corp Bold";
  font-size: 24px;
  gap: 18px;
  @media (max-width: 1075px) {
    margin-left: 26px;
  }
  @media (max-width: 470px) {
    height: 22px;
    font-size: 14px;
    margin-left: 14px;
    gap: 8px;
    svg {
      height: 29px;
      width: fit-content;
    }
  }
`;

export const H1 = styled.h1`
  margin-bottom: 21px;
  font-family: "Gordita Medium";
  font-size: 16px;
`;

export const H2 = styled.h2`
  margin: 0;
  font-family: "Gordita Light";
  font-size: 16px;
`;

export const PhoneNumber = styled.p`
  margin-top: 100px;
`;

export const Line = styled.div`
  position: absolute;
  bottom: 76px;
  left: 249px;
  right: 249px; 
  height: 1px;
  background-color: #ffffff;
`;
export const Copyright = styled.p`
  position: absolute;
  bottom: 26px;
  left: 250px;
  font-family: "Gordita Light";
  font-size: 16px;
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