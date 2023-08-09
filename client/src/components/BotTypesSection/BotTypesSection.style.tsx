import { colors } from "colors";
import styled from "styled-components";
import { ReactComponent as SocialsPathShortSVG } from "assets/socials-path-short.svg";
import avatarC from "assets/avatar-mock-c.png";
import avatarF from "assets/avatar-mock-f.png";

export const BotTypesSectionWrap = styled.section`
  background: ${colors.backgroundGray};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const SocialsPathShort = styled(SocialsPathShortSVG)`
  margin-top: 46px;
`;

export const BotTypesCards = styled.div`
  display: flex;
  gap: 152px;
  margin-top: 38px;
`;

export const BotTypeCard = styled("div").withConfig({
  shouldForwardProp: (prop) => !["func"].includes(prop),
})<{
  func?: boolean;
}>`
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 92px 60px 30px 60px;
  background-color: white;
  border-radius: 0 0 10px 10px;
  border-top: 4px solid
    ${({ func }) => (func ? colors.accentGreen : colors.purpleMain)};
  position: relative;
  box-shadow: 20px 20px 0px 0px ${colors.lightShadow};
`;

export const BotTypeCardTitle = styled.h3`
  color: ${colors.textBlack};
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
`;

export const BotTypeCardTitleHighlight = styled.span`
  color: ${colors.purpleMain};
`;
export const BotTypeCardText = styled.p`
  margin-top: 24px;
  color: ${colors.textSub};
  text-align: center;
  font-family: Graphik LCG;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

export const BotTypeAvatarWrap = styled("div").withConfig({
  shouldForwardProp: (prop) => !["func"].includes(prop),
})<{
  func?: boolean;
}>`
  width: 81px;
  height: 81px;
  border-radius: 50%;
  border: 4px solid white;
  background: url(${({ func }) => (func ? avatarF : avatarC)}),
    ${({ func }) => (func ? colors.accentGreen : colors.purpleMain)};
  background-position: ${({ func }) => (func ? "62% 50%" : "50% 50%")};
  background-size: ${({ func }) => (func ? "50%" : "45%")};
  background-repeat: no-repeat;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.16));
  @media (max-width: 680px) {
    width: 44px;
    height: 44px;
  }
  position: absolute;
  top: -42px;
  left: calc(50% - 41.5px);
`;
