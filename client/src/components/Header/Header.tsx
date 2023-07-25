import React, { useState } from "react";

import { HeaderPageState, HeaderProps, Socials } from "./Header.types";
import {
  DropdownContent,
  DropdownItem,
  HeaderBottomItems,
  HeaderLine,
  HeaderLogo,
  HeaderNavbar,
  HeaderPhoneNumber,
  HeaderTop,
  HeaderTopItems,
  HeaderWrapper,
  NavbarElement,
  NavbarElementText,
  RecallMeButton,
  SocialIcon,
  SocialIcons,
  StyledDropdownArrow,
} from "./Header.style";
import { ReactComponent as InstagramSVG } from "assets/instagram.svg";
import { ReactComponent as WhatsappSVG } from "assets/whatsapp.svg";
import { ReactComponent as TelegramSVG } from "assets/telegram.svg";
import { ReactComponent as VkSVG } from "assets/vk.svg";
import { ReactComponent as BottecSVG } from "assets/bottec.svg";

export const Header: React.FC<HeaderProps> = () => {
  const [selectedSection, setSelectedSection] = useState<HeaderPageState>(
    HeaderPageState.Turnkey
  );

  return (
    <>
      <HeaderTop>
        <HeaderTopItems>
          <HeaderPhoneNumber>+7 ( 495 ) 226 28 24</HeaderPhoneNumber>
          <SocialIcons>
            <SocialIcon social={Socials.Instagram}>
              <InstagramSVG />
            </SocialIcon>
            <SocialIcon social={Socials.Whatsapp}>
              <WhatsappSVG />
            </SocialIcon>
            <SocialIcon social={Socials.Telegram}>
              <TelegramSVG />
            </SocialIcon>
            <SocialIcon social={Socials.VK}>
              <VkSVG />
            </SocialIcon>
          </SocialIcons>
        </HeaderTopItems>
        <HeaderLine></HeaderLine>
      </HeaderTop>
      <HeaderWrapper>
        <HeaderBottomItems>
          <HeaderLogo>
            <BottecSVG />
            BOTTEC
          </HeaderLogo>
          <HeaderNavbar>
            <NavbarElement
              dropdown
              onClick={() => setSelectedSection(HeaderPageState.Turnkey)}
              selected={selectedSection === HeaderPageState.Turnkey}
            >
              <NavbarElementText
                selected={selectedSection === HeaderPageState.Turnkey}
                data-text={"Разработка под ключ"}
              >
                Разработка под ключ
              </NavbarElementText>
              <StyledDropdownArrow
                selected={selectedSection === HeaderPageState.Turnkey}
              />
              <DropdownContent className="dropdown-content">
                <DropdownItem>
                  <a href="#">Webapps</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#">Чат-боты</a>
                </DropdownItem>
              </DropdownContent>
            </NavbarElement>
            <NavbarElement
              onClick={() => setSelectedSection(HeaderPageState.Cases)}
              selected={selectedSection === HeaderPageState.Cases}
            >
              <NavbarElementText
                selected={selectedSection === HeaderPageState.Cases}
                data-text={"Кейсы"}
              >
                Кейсы
              </NavbarElementText>
            </NavbarElement>
            <NavbarElement
              onClick={() => setSelectedSection(HeaderPageState.Solutions)}
              selected={selectedSection === HeaderPageState.Solutions}
            >
              <NavbarElementText
                selected={selectedSection === HeaderPageState.Solutions}
                data-text={"Готовые решения"}
              >
                Готовые решения
              </NavbarElementText>
            </NavbarElement>
            <NavbarElement
              onClick={() => setSelectedSection(HeaderPageState.Blog)}
              selected={selectedSection === HeaderPageState.Blog}
            >
              <NavbarElementText
                selected={selectedSection === HeaderPageState.Blog}
                data-text={"Блог"}
              >
                Блог
              </NavbarElementText>
            </NavbarElement>
            <NavbarElement
              onClick={() => setSelectedSection(HeaderPageState.Contacts)}
              selected={selectedSection === HeaderPageState.Contacts}
            >
              <NavbarElementText
                selected={selectedSection === HeaderPageState.Contacts}
                data-text={"Контакты"}
              >
                Контакты
              </NavbarElementText>
            </NavbarElement>
            <RecallMeButton>Перезвоните мне</RecallMeButton>
          </HeaderNavbar>
        </HeaderBottomItems>
      </HeaderWrapper>
    </>
  );
};
