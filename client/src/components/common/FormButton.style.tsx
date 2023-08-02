import styled from "styled-components";

export const FormButton = styled("button").withConfig({
  shouldForwardProp: (prop) => !["mt", "width"].includes(prop),
})<{
  mt?: string;
  width?: string;
}>`
  color: white;
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid #ededed;
  box-shadow: 6px 6px 3px 0px rgba(112, 112, 112, 0.4);
  height: 60px;
  margin-top: ${({ mt }) => (mt ? mt : "50px")};
  padding: 18px;
  width: ${({ width }) => (width ? width : "100%")};
`;
