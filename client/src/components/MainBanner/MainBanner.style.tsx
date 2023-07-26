import { colors } from "colors";
import { styled } from "styled-components";

export const MainBannerWrapper = styled.section`
  width: 96%;
  display: flex;
  background: ${colors.purpleMain};
  border-radius: 30px;
  min-height: 250px;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 160px 0 82px 10%;
  position: relative;
  top: 0;
  left: 0;
`;

export const BannerButtons = styled.div`
  display: flex;
  gap: 34px;
  justify-content: flex-start;
  margin-top: 88px;
`;

export const BannerHeading = styled.h1`
  font-size: 62px;
  line-height: 72px;
  font-weight: 500;
  width: 527px;
`;

export const BannerTable = styled.table`
  width: 660px;
  margin-top: 90px;
  th,
  td {
    text-align: left;
  }

  th {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
  }
  td {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding-top: 8px;
    &:not(:last-child) {
      padding-right: 130px;
    }
  }
`;

export const ArrowDownCircle = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purpleMain};
  position: absolute;
  bottom: -26px;
  left: 50%;
  svg {
    transform: rotate(90deg);
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 716px;
  position: absolute;
  bottom: 0;
  right: 22%;
  z-index: 1;
`;

export const GreenCircle = styled.div`
  width: 544px;
  height: 544px;
  border-radius: 544px;
  border: 100px solid ${colors.accentGreen};
  position: absolute;
  top: 42px;
  right: calc(22% - 69px);
  z-index: 0;
`;

export const TransparentCircleContainer = styled.div`
  position: absolute;
  width: 364px;
  height: 364px;
  overflow: hidden;
  bottom: 0;
  right: 7.6%;
`;

export const TransparentCircle = styled.div`
  width: 364px;
  height: 364px;
  background: transparent 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 100px;
  left: 0;
  border-radius: 50%;
`;
