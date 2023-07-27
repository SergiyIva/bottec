import { HeaderPageState } from "components/Header/Header.types";
import { MainBanner } from "components/MainBanner";
import { PageLayout } from "components/PageLayout";
import React from "react";

export const MainPage: React.FC = () => {
  return (
    <>
      <PageLayout headerSelectedPage={HeaderPageState.None}>
        <MainBanner />
      </PageLayout>
    </>
  );
};
