import styled from "styled-components";
import { colors } from "../../colors";
import { Socials } from "./Header.types";
import { ReactComponent as DropdownSVG } from "assets/dropdownarrow.svg";

export const HeaderWrapper = styled("header").withConfig({
  shouldForwardProp: (prop) => !["showMobileNav"].includes(prop),
})<{ showMobileNav: boolean }>`
  display: flex;
  width: 100%;
  position: sticky;
  height: 96px;
  top: 0px;
  backdrop-filter: blur(50px);
  transition: 0.3s;
  justify-content: center;
  background: ${({ showMobileNav }) =>
    showMobileNav ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.7)"};
  z-index: 3;
  @media (max-width: 1075px) {
    height: 82px;
  }
`;
export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderTopItems = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 72px;
  align-items: center;
  width: 75%;
  @media (max-width: 1350px) {
    width: 95%;
  }
  @media (max-width: 1075px) {
    display: none;
  }
`;

const mapSocialToColor = {
  [Socials.Instagram]: colors.darkPink,
  [Socials.Whatsapp]: colors.whatsAppGreen,
  [Socials.Telegram]: colors.telegramBlue,
  [Socials.VK]: colors.purpleDarker,
  [Socials.Viber]: colors.purpleDarker,
};

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
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

export const HeaderPhoneNumber = styled("a").withConfig({
  shouldForwardProp: (prop) => !["mobile"].includes(prop),
})<{ mobile?: boolean }>`
  display: flex;
  justify-content: center;
  margin-right: ${({ mobile }) => (mobile ? "0" : "42px")};
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.textBlack};

  &:hover {
    color: ${colors.purpleMain};
  }
`;

export const HeaderLine = styled.div`
  @media (max-width: 1350px) {
    width: 95%;
  }
  width: 75%;
  height: 1px;
  background-color: ${colors.lightGrey};
  @media (max-width: 1075px) {
    display: none;
  }
`;

export const HeaderBottomItems = styled.div`
  display: flex;
  width: 75%;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  @media (max-width: 1350px) {
    width: 95%;
  }
  @media (max-width: 1075px) {
    width: 100%;
  }
  @media (max-width: 470px) {
    font-size: 14px;
    width: 96%;
  }
`;

export const HeaderLogo = styled.a`
  display: flex;
  align-items: center;
  font-family: "Co Headline Corp Bold";
  font-size: 24px;
  gap: 18px;
  cursor: pointer;
  @media (max-width: 1075px) {
    margin-left: 26px;
  }
  @media (max-width: 470px) {
    height: 22px;
    font-size: 14px;
    margin-left: 14px;
    //gap: 8px;
    svg {
      height: 29px;
      //width: fit-content;
    }
  }
`;

export const HeaderNavbar = styled.nav`
  display: flex;
  gap: 20px;
  @media (max-width: 1075px) {
    display: none;
  }
`;

export const NavbarDropdownElement = styled("div").withConfig({
  shouldForwardProp: (prop) => !["selected"].includes(prop),
})<{
  selected: boolean;
}>`
  transition: 0.3s ease;
  text-decoration: none;
  font-size: 17px;
  /* padding: ${({ selected }) => (selected ? "15px 10px" : "0px")}; */
  padding: 15px 10px;
  color: ${(props) => (props.selected ? colors.purpleMain : "inherit")};
  line-height: 18px;
  background-color: ${(props) =>
    props.selected ? "rgba(114, 82, 220, 14.9%)" : "transparent"};
  border-radius: ${(props) => (props.selected ? "15px" : "0")};
  position: relative;
  cursor: pointer;
  &:hover {
    svg > path {
      stroke: ${colors.purpleMain};
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarElement = styled("a").withConfig({
  shouldForwardProp: (prop) => !["selected"].includes(prop),
})<{
  selected: boolean;
}>`
  transition: 0.3s ease;
  text-decoration: none;
  font-size: 17px;
  padding: ${({ selected }) => (selected ? "15px 10px" : "0px")};
  color: ${(props) => (props.selected ? colors.purpleMain : "inherit")};
  line-height: 18px;
  background-color: ${(props) =>
    props.selected ? "rgba(114, 82, 220, 14.9%)" : "transparent"};
  border-radius: ${(props) => (props.selected ? "15px" : "0")};

  cursor: pointer;
  &:hover {
    color: ${colors.purpleMain};
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarElementText = styled("span").withConfig({
  shouldForwardProp: (prop) => !["selected"].includes(prop),
})<{ selected: boolean }>`
  letter-spacing: ${({ selected }) => (selected ? "0.2px" : "normal")};
  &,
  &::before {
    text-align: center;
    display: inline-block;
    position: relative;
    top: 0;
    left: 0;
    white-space: nowrap;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    content: attr(data-text);
    opacity: ${({ selected }) => (selected ? "1" : "0")};
    font-weight: 500;
    transition: all 0.3s ease;
    letter-spacing: 0;
  }
`;

export const RecallMeButton = styled.button`
  margin-left: 32px;
  background-color: ${colors.purpleMain};
  font-weight: 500;
  color: white;
  height: 49px;
  border-radius: 15px;
  padding: 0px 26px;
  cursor: pointer;
  font-size: 16px;
  line-height: 16px;
  border: 1px solid transparent;
  transition: background-color 0.5s ease, color 0.5s ease, scale 0.1s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid ${colors.purpleMain};
    color: ${colors.purpleMain};
  }
  &:active {
    scale: 1.1;
  }

  @media (max-width: 1075px) {
    height: 30px;
    padding: 0 8px;
    margin-right: 10px;
  }

  @media (max-width: 470px) {
    height: 22px;
    font-size: 8px;
    margin-right: 0;
  }
`;

export const StyledDropdownArrow = styled(DropdownSVG).withConfig({
  shouldForwardProp: (prop) =>
    !["selected", "mobile", "mobileActive"].includes(prop),
})<{ selected?: boolean; mobile?: boolean; mobileActive?: boolean }>`
  fill: none;
  margin-left: 8px;
  margin-top: 3px;
  path {
    stroke: ${({ selected }) =>
      selected ? colors.purpleMain : colors.textBlack};
    stroke-width: ${({ selected, mobile }) =>
      selected || mobile ? "2px" : "1px"};
  }

  transform: rotate(
    ${({ mobileActive }) => (mobileActive ? "180deg" : "0deg")}
  );
`;

export const DropdownContent = styled("div").withConfig({
  shouldForwardProp: (prop) => !["selected"].includes(prop),
})<{ selected: boolean }>`
  display: none;
  position: absolute;
  top: ${({ selected }) => (selected ? "48px" : "48px")};
  z-index: 1;
  transition: display 1s ease;
`;

export const DropdownItem = styled.div`
  background: white;
  border-radius: 8px;
  color: ${colors.textBlack};
  padding: 12px 18px;
  display: block;
  text-decoration: none;
  &:hover {
    color: ${colors.purpleMain};
  }
`;

export const HeaderBottomRight = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1075px) {
    margin-right: 26px;
  }
  @media (max-width: 470px) {
    margin-right: 0;
  }
`;

export const MenuButton = styled.button`
  user-select: none;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  display: none;
  scale: 1.3;
  &:hover {
    background: rgba(114, 82, 220, 0.1);
  }
  &:active {
    background: rgba(114, 82, 220, 0.2);
  }

  @media (max-width: 1075px) {
    display: flex;
  }
  @media (max-width: 470px) {
    scale: 1;
  }
`;

export const MobileNavbar = styled.nav``;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  z-index: 4;
  top: 96px;
  @media (max-width: 1075px) {
    top: 82px;
    height: calc(100vh - 82px);
  }
  left: 0;
  width: 100%;
  background: white;
  height: 400px;
  height: calc(100vh - 96px);
  overflow-y: auto;
`;

export const MobileNavbarElement = styled("a").withConfig({
  shouldForwardProp: (prop) => !["sub"].includes(prop),
})<{
  sub?: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight: ${({ sub }) => (sub ? "400" : "500")};
  line-height: 24px;
  color: ${colors.textBlack};
  transition: 0.3s;
  user-select: none;
`;

export const MobileContactsSection = styled.div`
  margin-top: 50px;
  gap: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
