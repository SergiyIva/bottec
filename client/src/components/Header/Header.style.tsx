import styled from "styled-components";
import { colors } from "../../colors";
import { Socials } from "./Header.types";
import { ReactComponent as DropdownSVG } from "assets/dropdownarrow.svg";

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  position: sticky;
  height: 96px;
  top: 0px;
  backdrop-filter: blur(50px);
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  z-index: 3;
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
`;

const mapSocialToColor = {
  [Socials.Instagram]: colors.darkPink,
  [Socials.Whatsapp]: colors.whatsAppGreen,
  [Socials.Telegram]: colors.telegramBlue,
  [Socials.VK]: colors.purpleDarker,
};

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialIcon = styled("div").withConfig({
  shouldForwardProp: (prop) => !["social"].includes(prop),
})<{ social: Socials }>`
  height: 40px;
  width: 40px;
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

export const HeaderPhoneNumber = styled.a`
  display: flex;
  margin-right: 42px;
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
  width: 75%;
  height: 1px;
  background-color: ${colors.lightGrey};
`;

export const HeaderBottomItems = styled.div`
  display: flex;
  width: 75%;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  align-content: center;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Co Headline Corp Bold";
  font-size: 24px;
  gap: 18px;
`;

export const HeaderNavbar = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavbarDropdownElement = styled("div").withConfig({
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
  border-radius: ${(props) => (props.selected ? "15px" : "none")};
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
  border-radius: ${(props) => (props.selected ? "15px" : "none")};

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
`;

export const StyledDropdownArrow = styled(DropdownSVG)<{ selected: boolean }>`
  fill: none;
  margin-left: 8px;
  margin-top: 3px;
  path {
    stroke: ${({ selected }) =>
      selected ? colors.purpleMain : colors.textBlack};
    stroke-width: ${({ selected }) => (selected ? "2px" : "1px")};
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 48px;
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
`;
