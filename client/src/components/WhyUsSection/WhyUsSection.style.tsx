import { colors } from "colors";
import styled from "styled-components";

import { ReactComponent as PeopleBubblesSVG } from "assets/people-bubbles.svg";
import { ReactComponent as CalendarSVG } from "assets/calendar.svg";
import { ReactComponent as CallIconSVG } from "assets/call-icon.svg";
import { ReactComponent as CodeSectionSVG } from "assets/code-section.svg";

export const WhyUsSectionBackgroundWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background-color: ${colors.backgroundGray};
  margin-top: 110px;
  padding-bottom: 110px;
  @media (max-width: 1050px) {
    margin-top: 44px;
  }
  @media (max-width: 680px) {
    padding-bottom: 24px;
  }
`;

export const WhyUsSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin-top: 100px;
  @media (max-width: 1350px) {
    width: 95%;
  }
  @media (max-width: 1050px) {
    margin-top: 44px;
  }
`;

export const WhyUsGrid = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "first first second"
    "third fourth second";
  width: 100%;
  gap: 30px;
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 680px) {
    margin-top: 54px;
    gap: 16px;
  }
`;

export const WhyUsCard = styled("div").withConfig({
  shouldForwardProp: (prop) => !["gridArea"].includes(prop),
})<{
  gridArea?: string;
}>`
  position: relative;
  height: ${({ gridArea }) => (gridArea === "second" ? "844px" : "407px")};
  padding: ${({ gridArea }) =>
    gridArea === "first" ? "10px 0 10px 55px" : "70px 70px 50px 55px"};
  border-radius: 20px;
  box-shadow: 15px 15px 0px 0px ${colors.lightShadow};
  background: white;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : "none")};
  display: flex;
  flex-direction: column;
  justify-content: ${({ gridArea }) =>
    gridArea === "first" ? "center" : "space-between"};
  @media (max-width: 1550px) {
    justify-content: space-between;
    padding: 70px 70px 50px 55px;
  }

  @media (max-width: 1350px) {
    justify-content: ${({ gridArea }) =>
      gridArea === "first" ? "center" : "space-between"};
    padding: ${({ gridArea }) =>
      gridArea === "first" ? "142.5px 0 142.5px 55px" : "70px 70px 50px 55px"};
  }
  @media (max-width: 1200px) {
    justify-content: space-between;
    padding: 70px 70px 50px 55px;
  }
  @media (max-width: 1050px) {
    padding: 70px 70px 50px 55px;
    height: auto;
    justify-content: flex-start;
  }
  @media (max-width: 680px) {
    padding: 28px 12px 28px 34px;
  }
`;

export const CodeSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 75px;
`;

export const CardText = styled.div`
  font-family: Graphik LCG;
  padding: 0;
  margin: 0;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  @media (max-width: 1050px) {
    margin-top: 28px;
  }
  @media (max-width: 680px) {
    font-size: 16px;
    line-height: 8px;
  }
`;

export const CardDescription = styled.p`
  color: ${colors.textSub};
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  max-width: 345px;
  @media (max-width: 680px) {
    font-size: 12px;
    line-height: 16px;
    margin-top: 12px;
  }
  text-wrap: balance;
`;

export const StyledPeopleBubblesSVG = styled(PeopleBubblesSVG)`
  position: absolute;
  right: 7%;
  top: calc(50% - 69px);

  @media (max-width: 1550px) {
    position: static;
  }
  @media (max-width: 1350px) {
    position: absolute;
  }
  @media (max-width: 1200px) {
    position: static;
  }
  @media (max-width: 680px) {
    width: 115px;
    height: 51px;
  }
`;
export const StyledCalendarSVG = styled(CalendarSVG)`
  @media (max-width: 680px) {
    width: 59px;
    height: 59px;
  }
`;
export const StyledCallIconSVG = styled(CallIconSVG)`
  @media (max-width: 680px) {
    width: 59px;
    height: 59px;
  }
`;
export const StyledCodeSectionSVG = styled(CodeSectionSVG)`
  @media (max-width: 680px) {
    margin-bottom: 50px;
  }
  @media (max-width: 330px) {
    height: auto;
    width: 220px;
  }
`;
