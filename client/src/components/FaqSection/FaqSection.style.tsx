import { colors } from "colors";
import styled from "styled-components";

export const FaqSectionColorizer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.backgroundGray};
  padding-bottom: 120px;
`;

export const FaqSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin-top: 230px;
  @media (max-width: 1350px) {
    width: 95%;
  }
`;

export const Questions = styled.div`
  margin-top: 90px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  transition: all 0.3s ease;
`;

export const QuestionWrap = styled("div").withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})<{
  active?: boolean;
}>`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  border-radius: 20px;
  transition: all 0.3s ease;
  max-height: ${({ active }) => (active ? "400px" : "80px")};
`;

export const Answer = styled("p").withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})<{
  active?: boolean;
}>`
  color: ${colors.textBlack};
  margin-top: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: opacity 2s ease;
`;

export const QuestionHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Question = styled.span`
  font-size: 18px;
  color: ${colors.purpleMain};
  font-weight: 500;
  line-height: 32px;
`;

export const Icon = styled.span`
  font-size: 36px;
  color: ${colors.purpleMain};
  font-style: normal;
  line-height: 36px;
  cursor: pointer;
  user-select: none;
`;
