import React, { PropsWithChildren } from "react";
import { PageContent } from "./PageLayout.style";

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <PageContent>{children}</PageContent>;
};
