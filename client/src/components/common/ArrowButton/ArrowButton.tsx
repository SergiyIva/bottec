import React, { PropsWithChildren } from "react";

import { ArrowButtonProps } from "./ArrowButton.types";
import { ArrowCircle, StyledArrowButton } from "./ArrowButton.style";
import { ReactComponent as SideArrowSVG } from "assets/side-arrow.svg";

export const ArrowButton: React.FC<PropsWithChildren<ArrowButtonProps>> = ({
  outlined,
  mt,
  inverted,
  children,
}) => {
  return (
    <StyledArrowButton outlined={outlined} mt={mt} inverted={inverted}>
      {children}
      <ArrowCircle outlined={outlined} inverted={inverted}>
        <SideArrowSVG />
      </ArrowCircle>
    </StyledArrowButton>
  );
};
