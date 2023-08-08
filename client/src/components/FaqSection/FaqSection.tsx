import React, { useState } from "react";

import { FaqSectionProps } from "./FaqSection.types";
import {
  Answer,
  FaqSectionColorizer,
  FaqSectionWrap,
  Icon,
  Question,
  QuestionHead,
  QuestionWrap,
  Questions,
} from "./FaqSection.style";
import {
  SectionTitle,
  SectionTitleHighlight,
} from "components/common/Section.style";

export const FaqSection: React.FC<FaqSectionProps> = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(-1);
  return (
    <FaqSectionColorizer>
      <FaqSectionWrap>
        <SectionTitle>
          <SectionTitleHighlight>FAQ</SectionTitleHighlight>
        </SectionTitle>
        <Questions>
          <QuestionWrap active={selectedQuestion === 0}>
            <QuestionHead>
              <Question>Сколько времени уходит на создание чат-бота?</Question>
              <Icon
                onClick={() => setSelectedQuestion((p) => (p === -1 ? 0 : -1))}
              >
                {selectedQuestion === 0 ? "-" : "+"}
              </Icon>
            </QuestionHead>
            {selectedQuestion === 0 && (
              <Answer active={selectedQuestion === 0}>
                От 7 дней в зависимости от сложности задачи, поставленной
                заказчиком. <br />
                Сроки выполнения заказа обсуждаются в индивидуальном порядке.
              </Answer>
            )}
          </QuestionWrap>
          <QuestionWrap active={selectedQuestion === 1}>
            <QuestionHead>
              <Question>Возможно ли в будущем расширить функционал?</Question>
              <Icon
                onClick={() => setSelectedQuestion((p) => (p === -1 ? 1 : -1))}
              >
                {selectedQuestion === 1 ? "-" : "+"}
              </Icon>
            </QuestionHead>
            {selectedQuestion === 1 && (
              <Answer active={selectedQuestion === 1}>
                От 7 дней в зависимости от сложности задачи, поставленной
                заказчиком. <br />
                Сроки выполнения заказа обсуждаются в индивидуальном порядке.
              </Answer>
            )}
          </QuestionWrap>
          <QuestionWrap active={selectedQuestion === 2}>
            <QuestionHead>
              <Question>
                Для каких платформ можно заказать разработку ботов?
              </Question>
              <Icon
                onClick={() => setSelectedQuestion((p) => (p === -1 ? 2 : -1))}
              >
                {selectedQuestion === 2 ? "-" : "+"}
              </Icon>
            </QuestionHead>
            {selectedQuestion === 2 && (
              <Answer active={selectedQuestion === 2}>
                От 7 дней в зависимости от сложности задачи, поставленной
                заказчиком. <br />
                Сроки выполнения заказа обсуждаются в индивидуальном порядке.
              </Answer>
            )}
          </QuestionWrap>
          <QuestionWrap active={selectedQuestion === 3}>
            <QuestionHead>
              <Question>
                Может ли сотрудник подключиться в реальном времени к диалогу?
              </Question>
              <Icon
                onClick={() => setSelectedQuestion((p) => (p === -1 ? 3 : -1))}
              >
                {selectedQuestion === 3 ? "-" : "+"}
              </Icon>
            </QuestionHead>
            {selectedQuestion === 3 && (
              <Answer active={selectedQuestion === 3}>
                От 7 дней в зависимости от сложности задачи, поставленной
                заказчиком. <br />
                Сроки выполнения заказа обсуждаются в индивидуальном порядке.
              </Answer>
            )}
          </QuestionWrap>
        </Questions>
      </FaqSectionWrap>
    </FaqSectionColorizer>
  );
};
