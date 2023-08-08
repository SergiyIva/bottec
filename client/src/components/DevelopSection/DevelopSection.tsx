import React from "react";

import { DevelopSectionProps } from "./DevelopSection.types";
import {
  BackgroundColorizer,
  DevelopCard,
  DevelopCardText,
  DevelopGrid,
  DevelopSectionWrap,
  IphoneMockup,
  PulsingCircle,
  StyledConstructorSVG,
  StyledMobileConstructorSVG,
  StyledSocialsCircle,
  StyledSocialsCircleMobile,
} from "./DevelopSection.style";
import {
  SectionTitle,
  SectionTitleHighlight,
  SectionText,
} from "components/common/Section.style";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { colors } from "colors";
import iphonemu from "assets/iphone14mu.png";
import { ArrowButton } from "components/common/ArrowButton";

export const DevelopSection: React.FC<DevelopSectionProps> = () => {
  const tablet = useMediaQuery({
    query: "(max-width: 1050px)",
  });
  const mobile = useMediaQuery({
    query: "(max-width: 680px)",
  });

  const [firstCardRef, firstCardInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [secondCardRef, secondCardInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [thirdCardRef, thirdCardInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <DevelopSectionWrap>
      <SectionTitle>
        <SectionTitleHighlight>
          Для каждой задачи <br />
        </SectionTitleHighlight>
        есть свое решение
      </SectionTitle>
      <SectionText maxWidth="692px" mt={mobile ? "8px" : "72px"}>
        Кроме самого конструктора ботов на нашей платформе вы получаете
        возможность общаться со своими клиентами при помощи онлайн-чатов,
        получать наглядные отчеты по пользователям с помощью инструмента
        веб-аналитики и совершать сегментированные рассылки по целевой
        аудитории.
      </SectionText>
      <DevelopGrid>
        <DevelopCard
          ref={firstCardRef}
          gridArea="first"
          color={colors.purpleMain}
          visible={firstCardInView}
        >
          <DevelopCardText>
            Реализация
            <br /> на конструкторе
          </DevelopCardText>
          {tablet ? <StyledMobileConstructorSVG /> : <StyledConstructorSVG />}
          <PulsingCircle circleno={1} realization />
          <PulsingCircle circleno={2} realization />
          <PulsingCircle circleno={3} realization />
          <PulsingCircle circleno={4} realization />
        </DevelopCard>
        <DevelopCard
          ref={secondCardRef}
          gridArea="second"
          color="#9757D7"
          visible={secondCardInView}
        >
          <DevelopCardText>
            Разработка <br /> чат-бота под ключ
          </DevelopCardText>
          {mobile ? <StyledSocialsCircleMobile /> : <StyledSocialsCircle />}

          <IphoneMockup src={iphonemu} />
        </DevelopCard>
        <DevelopCard
          ref={thirdCardRef}
          gridArea="third"
          color="midnightblue"
          visible={thirdCardInView}
          tablet={tablet}
        >
          <DevelopCardText>
            Кастомное <br /> решение
          </DevelopCardText>
          <BackgroundColorizer />
        </DevelopCard>
      </DevelopGrid>
      <ArrowButton inverted mt={tablet ? "46px" : "112px"}>
        Создать чат-бота
      </ArrowButton>
    </DevelopSectionWrap>
  );
};
