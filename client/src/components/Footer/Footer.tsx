import React from "react";
import { Socials } from "./Footer.types";
import {
  FooterWrapper,
  FooterContainer,
  FooterColumn,
  FooterLogo,
  H1,
  H2,
  PhoneNumber,
  Line,
  Copyright,
  SocialIcons,
  SocialIcon,
  ArrowDownCircleafooter
} from "./Footer.style";
import { ReactComponent as FooterSVG } from "assets/footer_logo.svg";
import { ReactComponent as InstagramSVG } from "assets/instagram.svg";
import { ReactComponent as WhatsappSVG } from "assets/whatsapp.svg";
import { ReactComponent as TelegramSVG } from "assets/telegram.svg";
import { ReactComponent as VkSVG } from "assets/vk.svg";
import { ReactComponent as ArrowDownSVG } from "assets/down-arrow.svg";
export const Footer = () => {
  return (
    <FooterWrapper>
      <ArrowDownCircleafooter>
          <ArrowDownSVG />
        </ArrowDownCircleafooter>
      <FooterContainer>
        <FooterColumn>
          <FooterLogo>
            <FooterSVG />
            BOTTEC
          </FooterLogo>
        </FooterColumn>
        <FooterColumn>
          <H1>Разработка под ключ</H1>
          <H2>Lorem ipsum</H2>
          <H2>Сonsectetur</H2>
          <H2>Suspendisse</H2>
        </FooterColumn>
        <FooterColumn>
          <H1>Разработка под ключ</H1>
          <H2>Lorem ipsum</H2>
          <H2>Сonsectetur</H2>
          <H2>Suspendisse</H2>
        </FooterColumn>
        <FooterColumn>
          <H1>Разработка под ключ</H1>
          <H2>Lorem ipsum</H2>
          <H2>Сonsectetur</H2>
          <H2>Suspendisse</H2>
        </FooterColumn>
        <PhoneNumber>+7 ( 495 ) 226 28 24</PhoneNumber>
        <Copyright>© Bottec 2022</Copyright>
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
      </FooterContainer>
      <Line />
    </FooterWrapper>
  );
};

