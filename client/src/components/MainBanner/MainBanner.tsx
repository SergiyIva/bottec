import React from "react";

import { MainBannerProps } from "./MainBanner.types";
import {
  BannerHeading,
  BannerTextSection,
  MainBannerWrapper,
} from "./MainBanner.style";

export const MainBanner: React.FC<MainBannerProps> = () => {
  return (
    <MainBannerWrapper>
      <BannerTextSection>
        <BannerHeading>Готовы вывести бизнес на новый уровень?</BannerHeading>
      </BannerTextSection>
    </MainBannerWrapper>
  );
};
