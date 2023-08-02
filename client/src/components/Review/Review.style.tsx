import { colors } from "colors";
import styled from "styled-components";
import avatarMock from "assets/avatar-mock.png";

export const ReviewWrap = styled.div`
  border-radius: 10px;
  box-shadow: 20px 20px 0px 0px ${colors.lightShadow};
  background: white;
  width: 574px;
  height: 455px;
  padding: 60px;
  transition: 0.5s ease;
  flex-shrink: 0;
  border: 2px solid ${colors.lightShadow};

  @media (max-width: 680px) {
    border: 1px solid ${colors.lightShadow};
    height: auto;
    padding: 40px 15px;
    width: 320px;
    box-shadow: 8px 8px 0px 0px ${colors.lightShadow};
  }

  @media (max-width: 370px) {
    width: 230px;
  }
  user-select: none;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewHeaderText = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
`;

export const ReviewAuthor = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${colors.textBlack};
  @media (max-width: 680px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const ReviewJobTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.textSub};
  @media (max-width: 680px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const ReviewText = styled.p`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 400;
  line-height: 37px;
  @media (max-width: 680px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const ReviewAvatarWrap = styled("div").withConfig({
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
