export type ReviewsSliderProps = {
  reviews: Review[];
};

export type Review = {
  id: string;
  author: string;
  avatarUrl?: string;
  jobTitle: string;
  text: string;
};
