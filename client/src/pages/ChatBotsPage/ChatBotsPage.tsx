import { FaqSection } from "components/FaqSection";
import { NewsSection } from "components/NewsSection";
import { PageLayout } from "components/PageLayout";
import { ReviewsSection } from "components/ReviewsSection";

import React from "react";

export const ChatBotsPage: React.FC = () => {
  return (
    <PageLayout>
      <ReviewsSection />
      <NewsSection />
      <FaqSection />
    </PageLayout>
  );
};
