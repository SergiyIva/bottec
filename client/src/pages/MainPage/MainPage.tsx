import { DevelopSection } from "components/DevelopSection";
import { MainBanner } from "components/MainBanner";
import { PageLayout } from "components/PageLayout";
import { RequestSection } from "components/RequestSection";
import { ReviewsSection } from "components/ReviewsSection";
import { SolutionSection } from "components/SolutionsSection/SolutionSection";
import { WhyUsSection } from "components/WhyUsSection";
import { NeedConsultSection } from "components/NeedConsultSection";
import React from "react";
import { RoadmapSection } from "components/RoadmapSection";
import { NewsSection } from "components/NewsSection";
import { FaqSection } from "components/FaqSection";

export const MainPage: React.FC = () => {
  return (
    <PageLayout>
      <MainBanner />
      <SolutionSection />
      <DevelopSection />
      <WhyUsSection />
      <ReviewsSection />
      <RequestSection />
      <RoadmapSection />
      <NewsSection />
      <FaqSection />
      <NeedConsultSection />
    </PageLayout>
  );
};
