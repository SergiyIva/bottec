import { HeaderPageState } from "components/Header/Header.types";
import { MainBanner } from "components/MainBanner";
import { PageLayout } from "components/PageLayout";
import React from "react";
import { styled } from "styled-components";

const Contentmock = styled.div`
  height: 1000px;
  width: 96%;
  background: blueviolet;
  border-radius: 20px;
`;

export const MainPage: React.FC = () => {
  return (
    <>
      <PageLayout headerSelectedPage={HeaderPageState.None}>
        {/* <MainBanner /> */}
        <Contentmock></Contentmock>
      </PageLayout>
    </>
  );
};
