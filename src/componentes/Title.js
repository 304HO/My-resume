import React from "react";
import styled from "styled-components";

const Title = ({ homeRef }) => {
  return (
    <RootContainer ref={homeRef}>
      <Text1>
        제경모
        <br />
        포트폴리오
      </Text1>

      <Text2>
        배우는것에는 즐거움을,
        <br />
        새로운것에는 도전 정신을 느끼는
        <br />
        프론트엔드 개발자 제경모 입니다.
      </Text2>
    </RootContainer>
  );
};

export default Title;

const Text2 = styled.div`
  font-size: 1.5rem;
  color: black;
`;

const Text1 = styled.div`
  font-size: 4rem;
  color: Black;
  font-weight: 700;
  padding: 1rem 0;
`;

const RootContainer = styled.div`
  background: url(${`/img/title.jpeg`}) 50% no-repeat;
  z-index: -1;
  background-size: cover;
  padding: 7rem 3rem;
`;
