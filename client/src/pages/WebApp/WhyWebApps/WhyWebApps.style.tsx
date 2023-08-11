import {colors} from "colors";
import styled from "styled-components";

import {ReactComponent as PeopleBubblesSVG} from "assets/people-bubbles.svg";
import {getTransition} from "../../../funcs/utilites.ts";

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

export const WhyUsWrapper = styled.div`
  position: relative;
  margin-top: 244px;
  width: 100%;
  @media (max-width: 1050px) {
    margin-top: 20px;
  }
`

export const PhoneContainer = styled.div`
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  display: flex;
`

export const Phone = styled.div`
  margin: -150px auto 0;
  div{
    position: sticky;
    top: 150px;
  }
  @media (max-width: 1050px) {
    display: none;
  }
`

export const FlexDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin-bottom: 2rem;
  }
`
export const WhyUsDivider = styled.div`
  margin: 30px 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1050px) {
    //display: flex;
    //flex-direction: column;
    //height: auto;
    justify-content: space-around;
  }
  @media (max-width: 770px) {
    margin: 16px 0;
  }
`;

export const WhyUsCard = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  padding: 3.5rem;
  border-radius: 20px;
  box-shadow: 0px 6px 3px 0px rgba(111, 111, 111, 0.16), 15px 15px 0px 0px ${colors.lightShadow};
  background: linear-gradient(44deg, #F052D8 0%, #6632CF 56.65%, #0BB4BA 100%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 360px;
  &:hover {
    color: white; 
    p {
      color: white;
    }
    svg {
      path {
        fill: white;
      }
    }
    >span {
      opacity: 0;
    }
  }
  ${getTransition()};
  @media (max-width: 1550px) {
    padding: 3rem 2rem;
  }
  
  @media (max-width: 770px) {
    padding: 1.5rem 1rem;
    
  }
  @media (max-width: 680px) {
    min-height: 260px;
    max-width: 250px;
  }
  
`;

export const BackGround = styled.span`
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: white;
    opacity: 1;
    ${getTransition(300, "opacity")};
`

export const CardText = styled.div`
  position: relative;
  z-index: 2;
  font-family: Graphik LCG;
  padding: 0;
  margin: 0;
  max-width: 275px; 
  svg {
    path {
      fill: ${colors.purpleMain}
    }
    margin-bottom: 3rem;
  }
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
  ${getTransition()};
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
