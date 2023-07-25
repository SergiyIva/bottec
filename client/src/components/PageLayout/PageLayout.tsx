import React, { PropsWithChildren } from "react";

import { PageLayoutProps } from "./PageLayout.types";
import { Header } from "components/Header";
import { PageContent } from "./PageLayout.style";

export const PageLayout: React.FC<PropsWithChildren<PageLayoutProps>> = ({
  headerSelectedPage,
  children,
}) => {
  return (
    <>
      <Header selectedPage={headerSelectedPage} />
      <PageContent>{children}</PageContent>
    </>
  );
};
