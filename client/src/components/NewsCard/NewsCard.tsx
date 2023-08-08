import React from "react";

import { NewsCardProps } from "./NewsCard.types";
import {
  NewsAuthor,
  NewsAvatarWrap,
  NewsCardWrap,
  NewsChip,
  NewsCircleOne,
  NewsCircleTwo,
  NewsDescription,
  NewsFooter,
  NewsReadingTime,
  NewsShortText,
  NewsUpperSection,
} from "./NewsCard.style";

export const NewsCard: React.FC<NewsCardProps> = ({
  newsPiece,
  background,
  even,
}) => {
  return (
    <NewsCardWrap background={background}>
      <NewsCircleOne background={background} even={even} />
      <NewsCircleTwo background={background} even={even} />
      <NewsUpperSection>
        <NewsChip>Новости</NewsChip>
        <NewsShortText>{newsPiece.shortText}</NewsShortText>
      </NewsUpperSection>
      <NewsFooter>
        <NewsAvatarWrap avatarUrl={newsPiece.avatarUrl} />
        <NewsDescription>
          <NewsAuthor>{newsPiece.author}</NewsAuthor>
          <NewsReadingTime>{newsPiece.readingTime}</NewsReadingTime>
        </NewsDescription>
      </NewsFooter>
    </NewsCardWrap>
  );
};
