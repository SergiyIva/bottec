import { colors } from "colors";
import styled from "styled-components";
import avatarMock from "assets/avatar-mock.png";

export const NewsCardWrap = styled("div").withConfig({
  shouldForwardProp: (prop) => !["background"].includes(prop),
})<{
  background?: string;
}>`
  width: 454px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ background }) =>
    background ? background : colors.purpleMain};
  padding: 40px;
  z-index: 0;
`;

export const NewsUpperSection = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
`;

export const NewsChip = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding-inline: 10px;
  color: ${colors.textBlack};
  font-size: 14px;
  font-weight: 500;
  line-height: 37px;
  border-radius: 10px;
  width: fit-content;
`;

export const NewsShortText = styled.p`
  margin-top: 120px;
  font-size: 27px;
  font-weight: 500;
  line-height: 32px;
  color: white;
`;

export const NewsFooter = styled.div`
  display: flex;
  gap: 25px;
  position: relative;
  z-index: 2;
`;

export const NewsDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsAuthor = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const NewsReadingTime = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #dedede;
`;

export const NewsAvatarWrap = styled("div").withConfig({
  shouldForwardProp: (prop) => !["avatarUrl"].includes(prop),
})<{
  avatarUrl?: string;
}>`
  width: 73px;
  height: 73px;
  border-radius: 50%;
  background: url(${({ avatarUrl }) => (avatarUrl ? avatarUrl : avatarMock)}),
    #e5e5e5;
  background-position: ${({ avatarUrl }) =>
    avatarUrl ? "50% 50%" : "60% 50%"};
  background-size: ${({ avatarUrl }) => (avatarUrl ? "cover" : "60%")};
  background-repeat: no-repeat;

  @media (max-width: 680px) {
    width: 44px;
    height: 44px;
  }
`;

export const NewsCircleOne = styled("div").withConfig({
  shouldForwardProp: (prop) => !["background", "even"].includes(prop),
})<{
  background?: string;
  even?: boolean;
}>`
  position: absolute;
  background-color: ${({ background }) =>
    background ? background : colors.purpleMain};
  width: 346px;
  height: 346px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border-radius: 50%;
  ${({ even }) =>
    even ? "left: -95px; bottom: -272px" : "top: -130px; left: -64px"}
`;

export const NewsCircleTwo = styled("div").withConfig({
  shouldForwardProp: (prop) => !["background", "even"].includes(prop),
})<{
  background?: string;
  even?: boolean;
}>`
  position: absolute;
  background-color: ${({ background }) =>
    background ? background : colors.purpleMain};
  width: 346px;
  height: 346px;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border-radius: 50%;

  ${({ even }) =>
    even ? "top: 51px; right: -151px;" : "right: 1px; bottom: -152px;"}
`;
