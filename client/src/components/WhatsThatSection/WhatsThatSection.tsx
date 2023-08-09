import React from "react";

import { WhatsThatSectionProps } from "./WhatsThatSection.types";
import {
  SectionText,
  SectionTitle,
  SectionTitleHighlight,
} from "components/common/Section.style";
import {
  CircleText,
  CircleTextContent,
  IphoneMockup,
  MockupHider,
  PulsingCircle,
  StyledSocialPaths,
  WhatsThatSectionWrap,
} from "./WhatsThatSection.style";
import { ArrowDownCircle } from "components/MainBanner/MainBanner.style";
import { ReactComponent as ArrowDownSVG } from "assets/down-arrow.svg";

export const WhatsThatSection: React.FC<WhatsThatSectionProps> = () => {
  return (
    <WhatsThatSectionWrap>
      <MockupHider>
        <IphoneMockup n={0} />
        <IphoneMockup n={1} />
        <IphoneMockup n={2} />
        <IphoneMockup n={3} />
        <IphoneMockup n={4} />
      </MockupHider>
      <SectionTitle mt="84px">
        Чат-бот <br />
        <SectionTitleHighlight>что это такое?</SectionTitleHighlight>
      </SectionTitle>
      <SectionText mt="14px">
        Чат-бот, это помощник для владельцев бизнеса, работает на различных
        площадках: сайтах, в мобильных приложениях, социальных сетях и
        мессенджерах.
      </SectionText>
      <StyledSocialPaths />
      <MockupHider>
        <IphoneMockup n={0} />
        <IphoneMockup n={1} />
        <IphoneMockup n={2} />
        <IphoneMockup n={3} />
        <IphoneMockup n={4} />
        <PulsingCircle n={0} />
        <PulsingCircle n={1} />
        <PulsingCircle n={2} />
        <PulsingCircle n={3} />
        <PulsingCircle n={4} />
        <CircleText>
          <CircleTextContent>
            Всего один <br /> виртуальный собеседник для всех клиентов!
          </CircleTextContent>
        </CircleText>
      </MockupHider>
      <ArrowDownCircle>
        <ArrowDownSVG />
      </ArrowDownCircle>
    </WhatsThatSectionWrap>
  );
};
