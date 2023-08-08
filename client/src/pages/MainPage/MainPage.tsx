import { DevelopSection } from "components/DevelopSection";
import { HeaderPageState } from "components/Header/Header.types";
import { MainBanner } from "components/MainBanner";
import { PageLayout } from "components/PageLayout";
import { RequestSection } from "components/RequestSection";
import { ReviewsSection } from "components/ReviewsSection";
import { SolutionSection } from "components/SolutionsSection/SolutionSection";
import { WhyUsSection } from "components/WhyUsSection";
import { Footer } from "components/Footer";
import { NeedConsultSection } from "components/NeedConsultSection";
import React from "react";
import { RoadmapSection } from "components/RoadmapSection";

export const MainPage: React.FC = () => {
  return (
    <>
      <PageLayout headerSelectedPage={HeaderPageState.None}>
        <MainBanner />
        <SolutionSection />
        <DevelopSection />
        <WhyUsSection />
        <ReviewsSection />
        <RequestSection />
        <RoadmapSection />
        <NeedConsultSection />
        <Footer />
      </PageLayout>
    </>
  );
};
