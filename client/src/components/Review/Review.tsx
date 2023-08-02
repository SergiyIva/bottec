import React from "react";

import { ReviewProps } from "./Review.types";
import {
  ReviewAuthor,
  ReviewAvatarWrap,
  ReviewHeader,
  ReviewHeaderText,
  ReviewJobTitle,
  ReviewText,
  ReviewWrap,
} from "./Review.style";

export const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <ReviewWrap>
      <ReviewHeader>
        <ReviewAvatarWrap avatarUrl={review.avatarUrl} />
        <ReviewHeaderText>
          <ReviewAuthor>{review.author}</ReviewAuthor>
          <ReviewJobTitle>{review.jobTitle}</ReviewJobTitle>
        </ReviewHeaderText>
      </ReviewHeader>
      <ReviewText>{review.text}</ReviewText>
    </ReviewWrap>
  );
};
