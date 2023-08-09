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
  MobileContactsSection,
  MobileMenuWrapper,
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
import { Link, useNavigate } from "react-router-dom";

export const urlPageStateMap = {
  "/": HeaderPageState.None,
  "/webapps": HeaderPageState.Turnkey,
  "/chatbots": HeaderPageState.Turnkey,
};

export const Header: React.FC<HeaderProps> = ({
  selectedPage,
  onPageChange,
}) => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState<boolean>(false);
  const navigate = useNavigate();

  const onNavigate = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    onPageChange(urlPageStateMap[url as keyof typeof urlPageStateMap]);
    setShowMobileNav(false);
    setShowMobileDropdown(false);
    navigate(url);
  };

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
          <HeaderLogo onClick={(e) => onNavigate(e, "/")}>
            <BottecSVG />
            BOTTEC
          </HeaderLogo>
          <HeaderBottomRight>
            {showMobileNav ? (
              <BodyPortal>
                <MobileMenuWrapper>
                  <MobileNavbar>
                    <MobileNavbarElement
                      onClick={() => setShowMobileDropdown((p) => !p)}
                    >
                      Разработка под ключ
                      <StyledDropdownArrow
                        mobile
                        mobileActive={showMobileDropdown}
                      />
                    </MobileNavbarElement>
                    {showMobileDropdown && (
                      <>
                        <MobileNavbarElement sub>Webapps</MobileNavbarElement>
                        <MobileNavbarElement
                          sub
                          onClick={(e) => onNavigate(e, "/chatbots")}
                        >
                          Чат-боты
                        </MobileNavbarElement>
                      </>
                    )}
                    <MobileNavbarElement>Кейсы</MobileNavbarElement>
                    <MobileNavbarElement>Готовые решения</MobileNavbarElement>
                    <MobileNavbarElement>Блог</MobileNavbarElement>
                    <MobileNavbarElement>Контакты</MobileNavbarElement>
                  </MobileNavbar>
                  <MobileContactsSection>
                    <SocialIcons>
                      <SocialIcon mobile social={Socials.Instagram}>
                        <InstagramSVG />
                      </SocialIcon>
                      <SocialIcon mobile social={Socials.Whatsapp}>
                        <WhatsappSVG />
                      </SocialIcon>
                      <SocialIcon mobile social={Socials.Telegram}>
                        <TelegramSVG />
                      </SocialIcon>
                      <SocialIcon mobile social={Socials.VK}>
                        <VkSVG />
                      </SocialIcon>
                    </SocialIcons>
                    <HeaderPhoneNumber href="tel://+74952262824" mobile>
                      +7 ( 495 ) 226 28 24
                    </HeaderPhoneNumber>
                  </MobileContactsSection>
                </MobileMenuWrapper>
              </BodyPortal>
            ) : (
              <HeaderNavbar>
                <NavbarDropdownElement
                  selected={selectedPage === HeaderPageState.Turnkey}
                >
                  <NavbarElementText
                    selected={selectedPage === HeaderPageState.Turnkey}
                    data-text={"Разработка под ключ"}
                  >
                    Разработка под ключ
                  </NavbarElementText>
                  <StyledDropdownArrow
                    selected={selectedPage === HeaderPageState.Turnkey}
                  />
                  <DropdownContent
                    selected={selectedPage === HeaderPageState.Turnkey}
                  >
                    <DropdownItem>
                      <a href="#">Webapps</a>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        to="/chatbots"
                        onClick={(e) => onNavigate(e, "/chatbots")}
                      >
                        Чат-боты
                      </Link>
                    </DropdownItem>
                  </DropdownContent>
                </NavbarDropdownElement>
                <NavbarElement
                  selected={selectedPage === HeaderPageState.Cases}
                >
                  <NavbarElementText
                    selected={selectedPage === HeaderPageState.Cases}
                    data-text={"Кейсы"}
                  >
                    Кейсы
                  </NavbarElementText>
                </NavbarElement>
                <NavbarElement
                  selected={selectedPage === HeaderPageState.Solutions}
                >
                  <NavbarElementText
                    selected={selectedPage === HeaderPageState.Solutions}
                    data-text={"Готовые решения"}
                  >
                    Готовые решения
                  </NavbarElementText>
                </NavbarElement>
                <NavbarElement selected={selectedPage === HeaderPageState.Blog}>
                  <NavbarElementText
                    selected={selectedPage === HeaderPageState.Blog}
                    data-text={"Блог"}
                  >
                    Блог
                  </NavbarElementText>
                </NavbarElement>
                <NavbarElement
                  selected={selectedPage === HeaderPageState.Contacts}
                >
                  <NavbarElementText
                    selected={selectedPage === HeaderPageState.Contacts}
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
