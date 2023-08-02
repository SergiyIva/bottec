import React, { PropsWithChildren } from "react";

import { SectionChipProps } from "./SectionChip.types";
import { SectionChipWrap } from "./SectionChip.style";

export const SectionChip: React.FC<PropsWithChildren<SectionChipProps>> = ({
  color,
  mt,
  children,
}) => {
  return (
    <SectionChipWrap mt={mt} color={color}>
      {children}
    </SectionChipWrap>
  );
};
