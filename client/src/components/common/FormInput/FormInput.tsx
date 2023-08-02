import React from "react";

import { FormInputProps } from "./FormInput.types";
import { StyledFormInput } from "./FormInput.style";

export const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  width,
  height,
  mt,
}) => {
  return (
    <StyledFormInput
      placeholder={placeholder}
      width={width}
      height={height}
      mt={mt}
    ></StyledFormInput>
  );
};
