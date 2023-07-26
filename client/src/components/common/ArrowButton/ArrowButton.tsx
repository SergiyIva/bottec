import React, { PropsWithChildren } from "react";

import { ArrowButtonProps } from "./ArrowButton.types";
import { ArrowCircle, StyledArrowButton } from "./ArrowButton.style";
import { ReactComponent as SideArrowSVG } from "assets/side-arrow.svg";

export const ArrowButton: React.FC<PropsWithChildren<ArrowButtonProps>> = ({
  outlined,
  children,
}) => {
  return (
    <StyledArrowButton outlined={outlined}>
      {children}
      <ArrowCircle outlined={outlined}>
        <SideArrowSVG />
      </ArrowCircle>
    </StyledArrowButton>
  );
};
