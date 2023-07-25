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
        <BannerHeading>Дауби</BannerHeading>
      </BannerTextSection>
    </MainBannerWrapper>
  );
};
