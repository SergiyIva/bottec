import React from "react";
import {
    NeedConsultWrapper,
    NeedConsultContainer,
    Title_contact,
    Subtitle_contact,
    Button_contact,
    TransparentCircleContainer_contact,
    TransparentCircle_contact,
    TransparentCircleContainer_contactbottom,
    TransparentCircle_contactbottom
} from "./NeedConsultSection.style";
export const NeedConsultSection = () => {
  return (
    <NeedConsultWrapper>
      <NeedConsultContainer>
        <Title_contact>
            Нужна консультация
            специалиста?
        </Title_contact>
        <Subtitle_contact>
          Напишите нам в любой из мессенджеров и получите бесплатную консультацию специалиста,
          который ответит на все ваши вопросы и подробно расскажет об этапах разработки чат-бота.
        </Subtitle_contact>
        <Button_contact>
            Отправить заявку
        </Button_contact>
      </NeedConsultContainer>
      <TransparentCircleContainer_contact>
        <TransparentCircle_contact />
      </TransparentCircleContainer_contact>
      <TransparentCircleContainer_contactbottom>
        <TransparentCircle_contactbottom />
      </TransparentCircleContainer_contactbottom>
    </NeedConsultWrapper>
  );
};