import React from "react";

import { WhyUsSectionProps } from "./WhyUsSection.types";
import {
  CardDescription,
  CardText,
  CardTitle,
  CodeSectionWrap,
  StyledCalendarSVG,
  StyledCallIconSVG,
  StyledCodeSectionSVG,
  StyledPeopleBubblesSVG,
  WhyUsCard,
  WhyUsGrid,
  WhyUsSectionBackgroundWrap,
  WhyUsSectionWrap,
} from "./WhyUsSection.style";
import {
  SectionTitle,
  SectionTitleHighlight,
  SectionText,
} from "components/common/Section.style";
import { useMediaQuery } from "react-responsive";

export const WhyUsSection: React.FC<WhyUsSectionProps> = () => {
  const mobile = useMediaQuery({
    query: "(max-width: 680px)",
  });
  const grid = useMediaQuery({
    query: "(min-width: 1050px)",
  });
  return (
    <WhyUsSectionBackgroundWrap>
      <WhyUsSectionWrap>
        <SectionTitle>
          <SectionTitleHighlight>
            Почему <br />
          </SectionTitleHighlight>
          выбирают нас?
        </SectionTitle>
        <SectionText maxWidth="692px" mt={mobile ? "8px" : "72px"}>
          Кроме самого конструктора ботов на нашей платформе вы получаете
          возможность общаться со своими клиентами при помощи онлайн-чатов,
          получать наглядные отчеты по пользователям с помощью инструмента
          веб-аналитики и совершать сегментированные рассылки по целевой
          аудитории.
        </SectionText>
        <WhyUsGrid>
          <WhyUsCard gridArea="first">
            <StyledPeopleBubblesSVG />
            <CardText>
              <CardTitle>Индивидуальный подход</CardTitle>
              <CardDescription>
                Персональный менеджер полностью погружается в детали вашего
                проекта
              </CardDescription>
            </CardText>
          </WhyUsCard>
          <WhyUsCard gridArea="second">
            <CodeSectionWrap>
              <StyledCodeSectionSVG />
              {grid && <StyledCodeSectionSVG />}
            </CodeSectionWrap>
            <CardText>
              <CardTitle>Гибкость</CardTitle>
              <CardDescription>
                При разработке мы учитываем все пожелания заказчиков, при этом
                внедряя передовые IT решения
              </CardDescription>
            </CardText>
          </WhyUsCard>
          <WhyUsCard gridArea="third">
            <StyledCalendarSVG />
            <CardText>
              <CardTitle>Опыт работы</CardTitle>
              <CardDescription>
                Более 5 лет занимаемся разработкой для наших клиентов
              </CardDescription>
            </CardText>
          </WhyUsCard>
          <WhyUsCard gridArea="fourth">
            <StyledCallIconSVG />
            <CardText>
              <CardTitle>Техподдержка</CardTitle>
              <CardDescription>
                Поддерживаем проекты на протяжении всего срока эксплуатации
              </CardDescription>
            </CardText>
          </WhyUsCard>
        </WhyUsGrid>
      </WhyUsSectionWrap>
    </WhyUsSectionBackgroundWrap>
  );
};
