import React from "react";

import { MainBannerProps } from "./MainBanner.types";
import {
  ArrowDownCircle,
  BannerButtons,
  BannerHeading,
  BannerTable,
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
        <ArrowButton>Получить консультацию</ArrowButton>
        <ArrowButton outlined>Создать чат-бота</ArrowButton>
      </BannerButtons>
      <BannerTable>
        <thead>
          <tr>
            <th>230+</th>
            <th>130</th>
            <th>510</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Проектов
              <br /> реализовано
            </td>
            <td>
              Млн. <br />
              сэкономлено
            </td>
            <td>
              Бизнес <br />
              идей реализовано
            </td>
          </tr>
        </tbody>
      </BannerTable>
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
