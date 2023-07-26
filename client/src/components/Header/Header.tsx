import React, { useEffect, useState } from "react";

import { HeaderPageState, HeaderProps, Socials } from "./Header.types";
import {
  DropdownContent,
  DropdownItem,
  HeaderBottomItems,
  HeaderBottomRight,
  HeaderLine,
  HeaderLogo,
  HeaderNavbar,
  HeaderPhoneNumber,
  HeaderTop,
  HeaderTopItems,
  HeaderWrapper,
  MenuButton,
  MobileNavbar,
  MobileNavbarElement,
  NavbarDropdownElement,
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
import { ReactComponent as BurgerSVG } from "assets/burger.svg";
import { ReactComponent as CloseSVG } from "assets/close-round.svg";
import { BodyPortal } from "components/common/BodyPortal";

export const Header: React.FC<HeaderProps> = () => {
  const [selectedSection, setSelectedSection] = useState<HeaderPageState>(
    HeaderPageState.Turnkey
  );

  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  useEffect(() => {
    document.body.style.overflow = showMobileNav ? "hidden" : "";
  }, [showMobileNav]);

  return (
    <>
      <HeaderTop>
        <HeaderTopItems>
          <HeaderPhoneNumber href="tel://+74952262824">
            +7 ( 495 ) 226 28 24
          </HeaderPhoneNumber>
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
      <HeaderWrapper showMobileNav={showMobileNav}>
        <HeaderBottomItems>
          <HeaderLogo>
            <BottecSVG />
            BOTTEC
          </HeaderLogo>
          <HeaderBottomRight>
            {showMobileNav ? (
              <BodyPortal>
                <MobileNavbar>
                  <MobileNavbarElement>Разработка под ключ</MobileNavbarElement>
                  <MobileNavbarElement>Кейсы</MobileNavbarElement>
                  <MobileNavbarElement>Готовые решения</MobileNavbarElement>
                  <MobileNavbarElement>Блог</MobileNavbarElement>
                </MobileNavbar>
              </BodyPortal>
            ) : (
              <HeaderNavbar>
                <NavbarDropdownElement
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
                </NavbarDropdownElement>
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
              </HeaderNavbar>
            )}
            <RecallMeButton>Перезвоните мне</RecallMeButton>
            <MenuButton onClick={() => setShowMobileNav((p) => !p)}>
              {showMobileNav ? <CloseSVG /> : <BurgerSVG />}
            </MenuButton>
          </HeaderBottomRight>
        </HeaderBottomItems>
      </HeaderWrapper>
    </>
  );
};
