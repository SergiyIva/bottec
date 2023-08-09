import React from "react";

import { BotTypesSectionProps } from "./BotTypesSection.types";
import {
  BotTypeAvatarWrap,
  BotTypeCard,
  BotTypeCardText,
  BotTypeCardTitle,
  BotTypeCardTitleHighlight,
  BotTypesCards,
  BotTypesSectionWrap,
  SocialsPathShort,
} from "./BotTypesSection.style";
import {
  SectionText,
  SectionTitle,
  SectionTitleHighlight,
} from "components/common/Section.style";
import { ArrowButton } from "components/common/ArrowButton";
import { SectionChip } from "components/common/SectionChip";
import { colors } from "colors";

export const BotTypesSection: React.FC<BotTypesSectionProps> = () => {
  return (
    <BotTypesSectionWrap>
      <SectionChip mt="68px" color="#C2FDC5" textColor={colors.textBlack}>
        Каждому своё
      </SectionChip>
      <SectionTitle mt="16px">
        Для каждой задачи <br />
        <SectionTitleHighlight>есть простые решения</SectionTitleHighlight>
      </SectionTitle>
      <SectionText maxWidth="696px" mt="35px">
        Мы можем разработать бота, который не только автоматизирует ваше общение
        с клиентами, но и поможет оптимизировать работу внутри компании.
      </SectionText>
      <SocialsPathShort />
      <BotTypesCards>
        <BotTypeCard>
          <BotTypeAvatarWrap />
          <BotTypeCardTitle>
            Коммуникационные <br />
            <BotTypeCardTitleHighlight>чат-боты</BotTypeCardTitleHighlight>
          </BotTypeCardTitle>
          <BotTypeCardText>
            Это боты, отвечающие за взаимодействие с клиентами, их используют
            преимущественно для общения, оказания помощи в подборе товаров или
            услуг, информирования о скидках, акциях и т.д.
          </BotTypeCardText>
          <ArrowButton mt="51px">Подробнее</ArrowButton>
        </BotTypeCard>
        <BotTypeCard func>
          <BotTypeAvatarWrap func />
          <BotTypeCardTitle>
            Функциональные <br />
            <BotTypeCardTitleHighlight>чат-боты</BotTypeCardTitleHighlight>
          </BotTypeCardTitle>
          <BotTypeCardText>
            Облегчают работу персонала компании, сотрудники могут проверять
            наличие товара на складе, получать информацию по запросам,
            обучаться, собирать и структурировать данные.
          </BotTypeCardText>
          <ArrowButton mt="51px">Подробнее</ArrowButton>
        </BotTypeCard>
      </BotTypesCards>
    </BotTypesSectionWrap>
  );
};
