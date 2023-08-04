import { DevelopSection } from "components/DevelopSection";
import { HeaderPageState } from "components/Header/Header.types";
import { MainBanner } from "components/MainBanner";
import { PageLayout } from "components/PageLayout";
import { RequestSection } from "components/RequestSection";
import { ReviewsSection } from "components/ReviewsSection";
import { SolutionSection } from "components/SolutionsSection/SolutionSection";
import { WhyUsSection } from "components/WhyUsSection";
import { Footer } from "components/Footer";
import React from "react";

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
        <Footer />
      </PageLayout>
    </>
  );
};
