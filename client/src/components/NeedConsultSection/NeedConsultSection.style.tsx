import styled from "styled-components";

export const NeedConsultWrapper = styled.div`
  background-color: #7252dc;
  height: 548px;
  width: 100%;
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 580px) {
    height: 330px;
  }
`;

export const NeedConsultContainer = styled.div`
  display: flex;
  text-align: center;
  color: white;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 98px;
  @media (max-width: 580px) {
    margin-top: 38px;
  }
`;

export const Title_contact = styled.h1`
  width: 540px;
  text-align: center;
  font-size: 48px;
  line-height: 52px;
  z-index: 1;
  font-weight: 500;
  @media (max-width: 580px) {
    width: 320px;
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Subtitle_contact = styled.h2`
  margin-top: 30px;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  width: 585px;
  z-index: 1;
  @media (max-width: 580px) {
    margin-top: 30px;
    font-size: 12px;
    line-height: 15px;
    width: 330px;
  }
`;

export const Button_contact = styled.button`
  background-color: white;
  display: flex;
  color: #7252dc;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 72px;
  border-radius: 15px;
  width: 354px;
  height: 60px;
  z-index: 1;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  @media (max-width: 580px) {
    width: 200px;
    height: 32px;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
`;

export const TransparentCircleContainer_contact = styled.div`
  position: absolute;
  width: 524px;
  height: 524px;
  overflow: hidden;
  left: 85px;
  @media (max-width: 1550px) {
    left: 35px;
    width: 495px;
    height: 495px;
  }
  @media (max-width: 580px) {
    width: 124px;
    height: 124px;
    left: 0px;
  }
`;

export const TransparentCircle_contact = styled.div`
  width: 524px;
  height: 524px;
  background: transparent 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.25);
  position: absolute;
  border-radius: 50%;
  bottom: 200px;
  @media (max-width: 1550px) {
    width: 485px;
    height: 485px;
    bottom: 220px;
  }
  @media (max-width: 580px) {
    width: 124px;
    height: 124px;
    bottom: 5px;
    right: 35px;
  }
`;
export const TransparentCircleContainer_contactbottom = styled.div`
  position: absolute;
  width: 346px;
  height: 346px;
  overflow: hidden;
  right: 85px;
  margin-top: 427px;
  @media (max-width: 1550px) {
    right: 85px;
    width: 330px;
    height: 330px;
  }
  @media (max-width: 580px) {
    width: 98px;
    height: 98px;
    margin-top: 282px;
    left: 290px;
  }
`;

export const TransparentCircle_contactbottom = styled.div`
  width: 346px;
  height: 346px;
  background: transparent 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.25);
  position: absolute;
  border-radius: 50%;
  @media (max-width: 1550px) {
    width: 330px;
    height: 330px;
  }
  @media (max-width: 580px) {
    width: 98px;
    height: 98px;
    left: 10px;
  }
`;
