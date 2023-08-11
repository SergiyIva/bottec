import React from "react";
import {
    AchievmentHeading,
    AchievmentText,
    BannerAchievment,
    BannerAchievments,
    BannerButtons,
    BannerHeading,
    ImageWrap,
    MainBannerWrapper, OverflowContainer,
} from "./TopBanner.style.tsx";
import {ArrowButton} from "components/common/ArrowButton";
import {ReactComponent as Blocks} from "assets/webapps/banner/blocks.svg"
import {ReactComponent as ChecCel} from "assets/webapps/banner/check_cel.svg"
import {ReactComponent as PercentFire} from "assets/webapps/banner/percent_fire.svg"
import phoneCode from "assets/webapps/banner/phone_code.png";
import phone from "assets/webapps/banner/phone.png";
import { ReactComponent as ArrowDownSVG } from "assets/down-arrow.svg";
import {ArrowDownCircle} from "../../../components/MainBanner/MainBanner.style.tsx";

type MainBannerProps = {
    text?: string;
};

export const TopBanner: React.FC<MainBannerProps> = () => {
  return (
      <>
          <MainBannerWrapper>
              <OverflowContainer>
              <BannerHeading>Разработка WebApps в Telegram для вашего бизнеса.</BannerHeading>
              <BannerButtons>
                  <ArrowButton outlined>Оставить заявку</ArrowButton>
                  <ArrowButton outlined>Узнать подробнее</ArrowButton>
              </BannerButtons>
              <BannerAchievments>
                  <BannerAchievment>
                      <AchievmentHeading><ChecCel/></AchievmentHeading>
                      <AchievmentText>
                          Не более 4-х недель <br />
                          на разработку
                      </AchievmentText>
                  </BannerAchievment>
                  <BannerAchievment>
                      <AchievmentHeading><PercentFire/></AchievmentHeading>
                      <AchievmentText>
                          Дешевле в 3 раза, <br />
                          чем приложение
                      </AchievmentText>
                  </BannerAchievment>
                  <BannerAchievment>
                      <AchievmentHeading><Blocks/></AchievmentHeading>
                      <AchievmentText>
                          Уникальный интерфейс <br />
                          внутри телеграмм бота
                      </AchievmentText>
                  </BannerAchievment>
              </BannerAchievments>
              <ImageWrap>
                  <picture>
                      <source srcSet={phoneCode} media={"((min-width: 1050px) and (max-width: 1250px)) or (min-width:1600px)"}/>
                      <img src={phone} alt="phoneCode"/>
                  </picture>
              </ImageWrap>
              </OverflowContainer>
              <ArrowDownCircle>
                  <ArrowDownSVG />
              </ArrowDownCircle>
          </MainBannerWrapper>

      </>

  );
};
