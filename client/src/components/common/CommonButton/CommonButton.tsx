import React, { PropsWithChildren } from "react";

import { CommonButtonProps } from "./CommonButton.types";
import { CommonButtonWrap } from "./CommonButton.style";

export const CommonButton: React.FC<PropsWithChildren<CommonButtonProps>> = ({
  mt,
  children,
}) => {
  return <CommonButtonWrap mt={mt}>{children}</CommonButtonWrap>;
};
