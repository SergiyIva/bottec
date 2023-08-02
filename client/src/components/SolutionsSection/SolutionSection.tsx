import React from "react";
import {
  SectionCard,
  SolutionSectionWrap,
  SolutionsGrid,
  SolutionCardContent,
  SolutionCardTitle,
  SolutionCardDescription,
  SolutionCardRealization,
  ImageWrap1,
  IphoneMockup,
  IphoneMockup2,
  CircleHider,
  PulsingCircle,
  IphoneMockupLeft,
  IphoneMockupRight,
  StyledMessageSVG,
  ArrowButtonContainer,
} from "./SolutionSection.style";
import { SolutionSectionProps } from "./SolutionSection.types";
import regionzoloto from "assets/region-zoloto.png";
import vympellogo from "assets/vympel.png";
import psychoparty from "assets/psychopartylogo.png";
import iphone14mu from "assets/iphone14mu.png";
import iphone14mu1 from "assets/iphone14mu1.png";
import iphone14muleftmobile from "assets/iphone14muleftmobile.png";
import iphone14murightmobile from "assets/iphone14murightmobile.png";
import iphone14muleft from "assets/iphone14muleft.png";
import iphone14muright from "assets/iphone14muright.png";
import { ArrowButton } from "components/common/ArrowButton";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";
import {
  SectionTitle,
  SectionTitleHighlight,
  SectionText,
} from "components/common/Section.style";
import { CommonButton } from "components/common/CommonButton";

export const SolutionSection: React.FC<SolutionSectionProps> = () => {
  const tablet = useMediaQuery({
    query: "(max-width: 1050px)",
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
  const [fourthCardRef, fourthCardInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <SolutionSectionWrap>
      <SectionTitle>
        <SectionTitleHighlight>
          Решения <br />
        </SectionTitleHighlight>
        для вашего бизнеса
      </SectionTitle>
      <SectionText>
        Наши IT решения идеально подойдут для цифровизации вашего бизнеса,
        оптимизации работы сотрудников, а также воплощения вашей бизнес идеи в
        жизнь
      </SectionText>
      <SolutionsGrid>
        <SectionCard
          wide
          gridArea={"first"}
          ref={firstCardRef}
          visible={firstCardInView}
        >
          <SolutionCardContent>
            <div>
              <img src={regionzoloto} />
            </div>
            <div>
              <SolutionCardTitle>Регион Золото</SolutionCardTitle>
              <SolutionCardDescription>
                Бот для автоматизации онлайн-чата компании с целью
                бесперебойной, круглосуточной работы поддержки.
              </SolutionCardDescription>
              <SolutionCardRealization>TELEGRAM</SolutionCardRealization>
            </div>
          </SolutionCardContent>
          <ImageWrap1>
            <IphoneMockup>
              <img src={iphone14mu} />
            </IphoneMockup>
          </ImageWrap1>
        </SectionCard>
        <SectionCard
          gridArea="second"
          color="#9757D7"
          ref={secondCardRef}
          visible={secondCardInView}
        >
          <SolutionCardContent>
            <div>
              <img src={vympellogo} />
            </div>
            <div>
              <SolutionCardTitle>Сбытовая компания Вымпел</SolutionCardTitle>
              <SolutionCardDescription>
                Бот для автоматизации онлайн-чата компании с целью
                бесперебойной, круглосуточной работы поддержки.
              </SolutionCardDescription>
              <SolutionCardRealization>Whatsapp</SolutionCardRealization>
            </div>
          </SolutionCardContent>
          <IphoneMockup2>
            <img src={iphone14mu1} />
          </IphoneMockup2>
        </SectionCard>
        <SectionCard
          gridArea="third"
          color="#3772FF"
          ref={thirdCardRef}
          visible={thirdCardInView}
          tablet={tablet}
        >
          <SolutionCardContent>
            <div>
              <StyledMessageSVG />
            </div>
            <div>
              <SolutionCardTitle>У вас есть интересная идея?</SolutionCardTitle>
              <SolutionCardDescription small>
                Мы будем рады ответить на все ваши вопросы и помочь с
                реализацией
              </SolutionCardDescription>

              <ArrowButtonContainer>
                <ArrowButton>Заказать чат-бота</ArrowButton>
              </ArrowButtonContainer>
            </div>
          </SolutionCardContent>
          <CircleHider>
            <PulsingCircle circleno={4} />
            <PulsingCircle circleno={3} />
            <PulsingCircle circleno={2} />
            <PulsingCircle circleno={1} />
          </CircleHider>
        </SectionCard>
        <SectionCard
          wide
          gridArea={"fourth"}
          color="#45B26B"
          ref={fourthCardRef}
          visible={fourthCardInView}
        >
          <SolutionCardContent>
            <div>
              <img src={psychoparty} />
            </div>
            <div>
              <SolutionCardTitle>PsychoParty</SolutionCardTitle>
              <SolutionCardDescription>
                Бот для автоматизации онлайн-чата компании с целью
                бесперебойной, круглосуточной работы поддержки.
              </SolutionCardDescription>
              <SolutionCardRealization>telegram</SolutionCardRealization>
            </div>
          </SolutionCardContent>
          <IphoneMockupLeft>
            <img src={tablet ? iphone14muleftmobile : iphone14muleft} />
          </IphoneMockupLeft>
          <IphoneMockupRight>
            <img src={tablet ? iphone14murightmobile : iphone14muright} />
          </IphoneMockupRight>
        </SectionCard>
      </SolutionsGrid>
      <CommonButton mt={tablet ? "42px" : "100px"}>Посмотреть все</CommonButton>
    </SolutionSectionWrap>
  );
};
