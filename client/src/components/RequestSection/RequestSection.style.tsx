import styled from "styled-components";

export const RequestSectionWrap = styled.section`
  width: 100%;
  position: relative;
  background: #d9d9d9;
  margin-top: 110px;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 110px 300px 80px 300px;

  @media (max-width: 1050px) {
    margin-top: 50px;
  }
`;

export const RequestSectionColorizer = styled.div`
  background: linear-gradient(
    135deg,
    #3b1375 0%,
    #451aeb 30.47%,
    #0d0c64 64.06%
  );
  opacity: 0.9;
  background-blend-mode: hard-light;
  mix-blend-mode: hard-light;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const BackgroundCircle = styled.div`
  width: 1182px;
  height: 1182px;
  border-radius: 50%;
  background: linear-gradient(134deg, #b355ed 0%, rgba(255, 17, 17, 0) 100%);
  background-blend-mode: hard-light;
  position: absolute;
  right: -296px;
  bottom: -556px;
  z-index: 1;
`;

export const LeftSection = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.form`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  max-width: 354px;
`;
