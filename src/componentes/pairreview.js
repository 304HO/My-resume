import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";

const PairReview = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const images = [
    "/img/pair/pair1.png",
    "/img/pair/pair2.png",
    "/img/pair/pair3.png",
    "/img/pair/pair4.png",
    "/img/pair/pair5.png",
    "/img/pair/pair6.png",
    "/img/pair/pair7.png",
    "/img/pair/pair8.png",
    "/img/pair/pair9.png",
    "/img/pair/pair10.png",
    "/img/pair/pair11.png",
    "/img/pair/pair12.png",
    "/img/pair/pair13.png",
  ];

  return (
    <RootContainer>
      <Icon onClick={goBack}>
        <FaAngleDoubleLeft size={50} color="white" />
      </Icon>
      <Title>Pair Reivew</Title>
      <Titledecript> Pair Review란?</Titledecript>
      <Div>
        <br />
        두 명 이상이 함께 프로그래밍 과제를 수행하는 것을 '페어
        프로그래밍'이라고 합니다.
        <br />
        페어 프로그래밍을 마친 후 페어에게 남기는 리뷰입니다.
        <br />
        이제까지 만난 페어분들이 저에 대해 남겨준 평가입니다.
      </Div>
      {images.map((el, idx) => {
        return (
          <ImgContainer key={idx}>
            <Img src={el} />
          </ImgContainer>
        );
      })}
    </RootContainer>
  );
};

export default PairReview;

const Icon = styled.div`
  position: fixed;
  right: 3rem;
  cursor: pointer;

  @keyframes skillHover {
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  :hover {
    animation-name: skillHover;
    animation-duration: 0.8s;
    animation-iteration-count: 2;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const Img = styled.img`
  border-radius: 2rem;

  @keyframes skillHover {
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  :hover {
    animation-name: skillHover;
    animation-duration: 0.8s;
    animation-iteration-count: 2;
  }
`;

const Div = styled.div`
  color: white;
  text-align: center;
`;

const Titledecript = styled.h2`
  color: white;
  padding-top: 1rem;
`;

const Title = styled.h1`
  color: white;
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
  background-color: rgb(22, 22, 22);
`;
