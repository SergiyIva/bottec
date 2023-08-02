import React from "react";

import { RequestSectionProps } from "./RequestSection.types";
import {
  BackgroundCircle,
  LeftSection,
  RequestSectionColorizer,
  RequestSectionWrap,
  RightSection,
} from "./RequestSection.style";
import { SectionText, SectionTitle } from "components/common/Section.style";
import { FormInput } from "components/common/FormInput";
import { FormButton } from "components/common/FormButton.style";
import { useMediaQuery } from "react-responsive";

export const RequestSection: React.FC<RequestSectionProps> = () => {
  const tablet = useMediaQuery({
    query: "(min-width: 1050px)",
  });
  return (
    <>
      {tablet ? (
        <RequestSectionWrap>
          <RequestSectionColorizer />
          <BackgroundCircle />
          <LeftSection>
            <SectionTitle color="white" textAlign="left">
              Не знаете, как вам <br /> может помочь чат-бот?
            </SectionTitle>
            <SectionText color="white" mt="28px" textAlign="left">
              Оставляйте заявку на нашем сайте, или свяжитесь с нами любым
              удобным способом, наш менеджер поможет со всем разобраться
            </SectionText>
          </LeftSection>
          <RightSection>
            <SectionTitle color="white" textAlign="left">
              Оставить <br /> заявку
            </SectionTitle>
            <FormInput placeholder="Имя" mt="45px" />
            <FormInput placeholder="Телефон" />
            <FormInput placeholder="Email" />
            <FormButton>Отправить заявку</FormButton>
          </RightSection>
        </RequestSectionWrap>
      ) : (
        <div>MOBILE</div>
      )}
    </>
  );
};
