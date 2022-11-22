import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AboutMe = ({ aboutmeRef }) => {
  const navigator = useNavigate();

  const onClickHandler = () => {
    navigator("/review");
  };

  const images = [
    { src: "/img/icon1.png", label1: "전문분야", label2: "프론트엔드" },
    { src: "/img/icon2.png", label1: "협업에", label2: "능숙한 개발자" },
    { src: "/img/icon3.png", label1: "매일매일", label2: "성장하는 개발자" },
    { src: "/img/icon4.png", label1: "긍정적인", label2: "마인드" },
  ];
  return (
    <RootContainer ref={aboutmeRef}>
      <Title>About me</Title>
      <IconContainer>
        {images.map((el, i) => {
          return (
            <Content>
              <IconImgContainer key={i} src={el.src} />
              <br />
              <IconDescript>{el.label1}</IconDescript>
              <IconDescript>{el.label2}</IconDescript>
            </Content>
          );
        })}
      </IconContainer>
      <AboutMeDescript>
        많은 웹사이트를 이용하면서 느끼는 불편한점을 직접 개선하기위해 개발자의
        길을 걷기로 했습니다.
        <br />
        매사 긍정적이어서 '할 수 있다' 라는 생각으로 사람들과 적극적 소통하면
        협업하는 것을 좋아합니다.
        <br />
        웹개발자로 세상에 긍정적인 변화를 만들어 가치를 창출하는 것이 개발자로서
        궁극적인 목표입니다.
      </AboutMeDescript>
      <ReviewButton onClick={onClickHandler}>페어 리뷰</ReviewButton>
    </RootContainer>
  );
};

export default AboutMe;

const ReviewButton = styled.button`
  color: white;
  text-decoration: none;
  width: 10rem;
  padding: 0.8rem;
  height: 3rem;
  margin: 5px auto;
  max-width: 14rem;
  border: none;
  border-radius: 10rem;
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  background-color: rgb(46, 142, 255);
  cursor: pointer;
  :hover {
    transform: scale(1.03);
    transition: 0.2s;
  }
`;

const AboutMeDescript = styled.div`
  font-size: 1.2rem;
  line-height: 2;
  font-weight: 500;
`;

const IconDescript = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const IconImgContainer = styled.img`
  width: 6rem;
  height: 6rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-flow: row wrap;
    justify-content: center;
  }
`;

const Title = styled.h1`
  color: black;
  border-bottom: 1px solid rgb(204, 204, 204);
  line-height: 1.5;
`;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 4rem 3rem;
`;
