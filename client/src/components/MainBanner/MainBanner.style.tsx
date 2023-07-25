import { colors } from "colors";
import { styled } from "styled-components";

export const MainBannerWrapper = styled.div`
  width: 96%;
  display: flex;
  background: ${colors.purpleMain};
  border-radius: 30px;
  min-height: 250px;
  color: white;
`;

export const BannerTextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 0 82px 10%;
`;

export const BannerHeading = styled.h1`
  font-size: 62px;
  line-height: 72px;
  font-weight: 500;
`;
