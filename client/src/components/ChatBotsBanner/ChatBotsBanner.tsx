import React, { useEffect, useState } from "react";

import { ChatBotsBannerProps } from "./ChatBotsBanner.types";
import {
  BannerText,
  BannerTitle,
  ChatbotsBannerWrap,
  CodeSection,
  LeftSection,
  Message,
  Messages,
  Phone,
  PhoneClock,
  PhoneDate,
  RightSection,
  SocialPlacer,
  SocialSwitcher,
  StyledPaintedArrow,
  SwitcherChip,
  VolumetricBall,
} from "./ChatBotsBanner.style";
import { CommonButton } from "components/common/CommonButton";
import { ReactComponent as ChatCodeSectionSVG } from "assets/code-section-chat.svg";
import { Socials } from "components/Header/Header.types";
import { SocialIcon } from "components/Header/Header.style";
import { ReactComponent as InstagramSVG } from "assets/instagram.svg";
import { ReactComponent as WhatsappSVG } from "assets/whatsapp.svg";
import { ReactComponent as TelegramSVG } from "assets/telegram.svg";
import { ReactComponent as VkSVG } from "assets/vk.svg";
import { ReactComponent as ViberSVG } from "assets/viber.svg";

export const ChatBotsBanner: React.FC<ChatBotsBannerProps> = () => {
  const [dateState, setDateState] = useState<Date>(new Date());

  const [selectedSocial, setSelectedSocial] = useState<Socials>(
    Socials.Telegram
  );
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <ChatbotsBannerWrap>
      <VolumetricBall />
      <VolumetricBall big />
      <LeftSection>
        <BannerTitle>
          Разработка
          <br /> чат-ботов для вашего бизнеса
        </BannerTitle>
        <BannerText>
          Автоматизируем бизнес-процессы и рутинные задачи, увеличивая конверсию
          и продажи, сэкономив затраты на персонал.
        </BannerText>
        <CommonButton common mt={"63px"}>
          Заказать чат-бота
        </CommonButton>
      </LeftSection>
      <RightSection>
        <CodeSection>
          <ChatCodeSectionSVG />
          <Phone social={selectedSocial}>
            <PhoneClock>
              {(dateState.getHours() < 10
                ? "0" + dateState.getHours().toString()
                : dateState.getHours().toString()) +
                ":" +
                (dateState.getMinutes() < 10
                  ? "0" + dateState.getMinutes().toString()
                  : dateState.getMinutes().toString())}
            </PhoneClock>
            <PhoneDate>
              {dateState
                .toLocaleString("ru-RU", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })
                .split("")
                .map((char, index) => (index === 0 ? char.toUpperCase() : char))
                .join("")}
            </PhoneDate>
            <Messages>
              <Message social={selectedSocial}>
                Здравствуйте, а что <br />
                такое чат-бот?
              </Message>
              <Message social={selectedSocial} reply>
                Чат-бот – это суперменеджер, который помогает обрабатывать
                рутинные запросы ваших клиентов, а так же повышает конверсию и
                оказывает поддержку ваших клиентов 24/7.
              </Message>
            </Messages>
            <SocialPlacer>
              <SocialIcon social={selectedSocial}>
                {selectedSocial === Socials.Instagram && <InstagramSVG />}
                {selectedSocial === Socials.Telegram && <TelegramSVG />}
                {selectedSocial === Socials.Whatsapp && <WhatsappSVG />}
                {selectedSocial === Socials.VK && <VkSVG />}
                {selectedSocial === Socials.Viber && <ViberSVG />}
              </SocialIcon>
            </SocialPlacer>
          </Phone>
          <StyledPaintedArrow />
        </CodeSection>
        <SocialSwitcher>
          <SwitcherChip
            active={selectedSocial === Socials.Viber}
            onClick={() => setSelectedSocial(Socials.Viber)}
          >
            Viber
          </SwitcherChip>
          <SwitcherChip
            active={selectedSocial === Socials.Telegram}
            onClick={() => setSelectedSocial(Socials.Telegram)}
          >
            Telegram
          </SwitcherChip>
          <SwitcherChip
            active={selectedSocial === Socials.Instagram}
            onClick={() => setSelectedSocial(Socials.Instagram)}
          >
            Instagram
          </SwitcherChip>
          <SwitcherChip
            active={selectedSocial === Socials.Whatsapp}
            onClick={() => setSelectedSocial(Socials.Whatsapp)}
          >
            Whatsapp
          </SwitcherChip>
          <SwitcherChip
            active={selectedSocial === Socials.VK}
            onClick={() => setSelectedSocial(Socials.VK)}
          >
            Vkontakte
          </SwitcherChip>
        </SocialSwitcher>
      </RightSection>
    </ChatbotsBannerWrap>
  );
};
