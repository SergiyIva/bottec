import React from "react";

import { ReviewsSectionProps } from "./ReviewsSection.types";
import { ReviewsSectionWrap } from "./ReviewsSection.style";
import { SectionChip } from "components/common/SectionChip";
import {
  SectionTitle,
  SectionTitleHighlight,
  SectionText,
} from "components/common/Section.style";
import { useMediaQuery } from "react-responsive";
import { Review } from "components/ReviewsSlider/ReviewsSlider.types";
import { ReviewsSlider } from "components/ReviewsSlider";

export const ReviewsSection: React.FC<ReviewsSectionProps> = () => {
  const mobile = useMediaQuery({
    query: "(max-width: 680px)",
  });

  const reviewsMock: Review[] = [
    {
      id: "1",
      author: "Ирина Сергеева",
      avatarUrl: "/review-avatar.png",
      jobTitle: "Директор по развитию",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum quis lacus at vulputate. Mauris et ante a tortor facilisis ultricies id malesuada arcu. Quisque non felis metus. Integer egestas commodo sagittis. Cras ",
    },
    {
      id: "2",
      author: "Дмитрий Соколов",
      jobTitle: "Директор",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum quis lacus at vulputate. Mauris et ante a tortor facilisis ultricies id malesuada arcu. Quisque non felis metus. Integer egestas commodo sagittis. Cras ornare rhoncus porta. Sed euismod porttitor leo, ",
    },
    {
      id: "3",
      author: "Ирина Сергеева",
      avatarUrl: "/review-avatar.png",
      jobTitle: "Директор по развитию",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum quis lacus at vulputate. Mauris et ante a tortor facilisis ultricies id malesuada arcu. Quisque non felis metus. Integer egestas commodo sagittis. Cras ",
    },
    {
      id: "4",
      author: "Ирина Сергеева",
      avatarUrl: "/review-avatar.png",
      jobTitle: "Директор по развитию",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum quis lacus at vulputate. Mauris et ante a tortor facilisis ultricies id malesuada arcu. Quisque non felis metus. Integer egestas commodo sagittis. Cras ",
    },
  ];
  return (
    <ReviewsSectionWrap>
      <SectionChip color="#24B4E8">Признание</SectionChip>
      <SectionTitle mt={mobile ? "40px" : "16px"}>
        <SectionTitleHighlight>
          Отзывы <br />
        </SectionTitleHighlight>
        о компании!
      </SectionTitle>
      <SectionText maxWidth="494px" mt={mobile ? "7px" : "35px"}>
        На протяжении многих лет наша компания пользуется уважением и работает с
        самыми требовательными заказчиками и вот что они о нас думают
      </SectionText>
      <ReviewsSlider reviews={reviewsMock} />
    </ReviewsSectionWrap>
  );
};
