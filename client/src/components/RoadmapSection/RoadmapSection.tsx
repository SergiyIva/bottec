import React, { useState } from "react";

import { RoadmapSectionProps } from "./RoadmapSection.types";
import {
  DotContainer,
  DottedLine,
  RoadmapSectionWrap,
  RoadmapSliderWrap,
  SliderButton,
  SliderButtons,
  SliderContent,
  SliderMover,
  SliderText,
  Timeline,
  Year,
  YearsWrap,
} from "./RoadmapSection.style";
import {
  SectionTitle,
  SectionTitleHighlight,
} from "components/common/Section.style";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as SideArrowSVG } from "assets/side-arrow.svg";

export const RoadmapSection: React.FC<RoadmapSectionProps> = () => {
  const tablet = useMediaQuery({
    query: "(max-width: 1050px)",
  });

  const [selectedYear, setSelectedYear] = useState<number>(0);
  return (
    <RoadmapSectionWrap>
      <SectionTitle mt={tablet ? "58px" : "100px"}>
        <SectionTitleHighlight>
          Как мы сделали <br />
          лучший сервис&nbsp;
        </SectionTitleHighlight>
        по созданию <br />
        чат-ботов?
      </SectionTitle>
      <RoadmapSliderWrap>
        <SliderMover selectedYear={selectedYear}>
          <YearsWrap>
            <Year pos={0} active={selectedYear === 0}>
              2020
            </Year>
            <Year pos={1} active={selectedYear === 1}>
              2021
            </Year>
            <Year pos={2} active={selectedYear === 2}>
              2022
            </Year>
            <Year pos={3} active={selectedYear === 3}>
              2023
            </Year>
          </YearsWrap>
          <Timeline>
            <DottedLine />
            <DotContainer pos={0} active={selectedYear === 0}>
              <div></div>
            </DotContainer>
            <DotContainer pos={1} active={selectedYear === 1}>
              <div></div>
            </DotContainer>
            <DotContainer pos={2} active={selectedYear === 2}>
              <div></div>
            </DotContainer>
            <DotContainer pos={3} active={selectedYear === 3}>
              <div></div>
            </DotContainer>
          </Timeline>
          <SliderContent>
            <SliderText active={selectedYear === 0}>
              Все началось в 2020 году. Идея пришла, поскольку уже тогда было
              понятно, что все компании будут идти по пути автоматизации своих
              бизнес-процессов при помощи IT- решений. На рынке почти не было
              исполнителей, предоставляющих сервис должного уровня. Поэтому мы и
              решили закрыть эту клиентскую потребность
            </SliderText>
            <SliderText active={selectedYear === 1}>
              Мы начали быстро развиваться и совсем скоро нашли своих первых
              крупных клиентов. С течением времени мы выполняли все больше и
              больше разных проектов для разных сфер бизнеса. За этот период мы
              накопили огромный опыт в интеграции чат-ботов в бизнесы разных
              направлений, что дало нам больше понимания о нуждах клиента из той
              или иной отрасли. Основываясь на этих знаниях, мы поняли, как
              можно улучшить наш сервис, и принялись за разработку платформы.
            </SliderText>
            <SliderText active={selectedYear === 2}>
              Мы начали быстро развиваться и совсем скоро нашли своих первых
              крупных клиентов. С течением времени мы выполняли все больше и
              больше разных проектов для разных сфер бизнеса. За этот период мы
              накопили огромный опыт в интеграции чат-ботов в бизнесы разных
              направлений, что дало нам больше понимания о нуждах клиента из той
              или иной отрасли. Основываясь на этих знаниях, мы поняли, как
              можно улучшить наш сервис, и принялись за разработку платформы.
            </SliderText>
            <SliderText active={selectedYear === 3}>
              Мы начали быстро развиваться и совсем скоро нашли своих первых
              крупных клиентов. С течением времени мы выполняли все больше и
              больше разных проектов для разных сфер бизнеса. За этот период мы
              накопили огромный опыт в интеграции чат-ботов в бизнесы разных
              направлений, что дало нам больше понимания о нуждах клиента из той
              или иной отрасли. Основываясь на этих знаниях, мы поняли, как
              можно улучшить наш сервис, и принялись за разработку платформы.
            </SliderText>
          </SliderContent>
        </SliderMover>
      </RoadmapSliderWrap>
      <SliderButtons>
        <SliderButton
          onClick={() => setSelectedYear((prev) => (prev === 0 ? 0 : prev - 1))}
          inverse
        >
          <SideArrowSVG />
        </SliderButton>
        <SliderButton
          onClick={() => setSelectedYear((prev) => (prev === 3 ? 3 : prev + 1))}
        >
          <SideArrowSVG />
        </SliderButton>
      </SliderButtons>
    </RoadmapSectionWrap>
  );
};
