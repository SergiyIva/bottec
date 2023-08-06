import React from "react";

import { MainBannerProps } from "./MainBanner.types";
import {
  AchievmentHeading,
  AchievmentText,
  ArrowDownCircle,  
  BannerAchievment,
  BannerAchievments,
  BannerButtons,
  BannerHeading,
  GreenCircle,
  ImageWrap,
  MainBannerWrapper,
  TransparentCircle,
  TransparentCircleContainer,
} from "./MainBanner.style";
import { ArrowButton } from "components/common/ArrowButton";
import { ReactComponent as ArrowDownSVG } from "assets/down-arrow.svg";
import girlimg from "assets/girl.png";

export const MainBanner: React.FC<MainBannerProps> = () => {
  return (
    <MainBannerWrapper>
      <BannerHeading>Готовы вывести бизнес на новый уровень?</BannerHeading>
      <BannerButtons>
        <ArrowButton outlined>Получить консультацию</ArrowButton>
        <ArrowButton outlined>Создать чат-бота</ArrowButton>
      </BannerButtons>
      <BannerAchievments>
        <BannerAchievment>
          <AchievmentHeading>230+</AchievmentHeading>
          <AchievmentText>
            Проектов
            <br /> реализовано
          </AchievmentText>
        </BannerAchievment>
        <BannerAchievment>
          <AchievmentHeading>130</AchievmentHeading>
          <AchievmentText>
            Млн. <br />
            сэкономлено
          </AchievmentText>
        </BannerAchievment>
        <BannerAchievment>
          <AchievmentHeading>510</AchievmentHeading>
          <AchievmentText>
            Бизнес <br />
            идей реализовано
          </AchievmentText>
        </BannerAchievment>
      </BannerAchievments>
      <ArrowDownCircle>
        <ArrowDownSVG />
      </ArrowDownCircle>
      <ImageWrap>
        <img src={girlimg} alt="girl"></img>
      </ImageWrap>
      <GreenCircle />
      <TransparentCircleContainer>
        <TransparentCircle />
      </TransparentCircleContainer>
    </MainBannerWrapper>
  );
};
