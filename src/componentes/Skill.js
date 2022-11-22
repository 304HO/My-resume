import React from "react";
import styled from "styled-components";

const SkillTool = ({ skillRef }) => {
  const images = [
    {
      name: "Front-End",
      src: "/img/Skills/Front-End.png",
    },
    {
      name: "Back-End",
      src: "/img/Skills/back-end.png",
    },
    {
      name: "Verstion-Control",
      src: "/img/Skills/version-control.png",
    },
    {
      name: "Communication",
      src: "/img/Skills/figma.png",
    },
    {
      name: "Deployment",
      src: "/img/Skills/deployment.png",
    },
  ];

  return (
    <RootContainer ref={skillRef}>
      <Title>{`Skills & Tool`}</Title>
      <Box>
        {images.map((el) => {
          return (
            <ContentContainer key={el.name}>
              <ContentTitle>{el.name}</ContentTitle>
              <ContentImg src={el.src} alt="" />
            </ContentContainer>
          );
        })}
      </Box>
    </RootContainer>
  );
};

export default SkillTool;

const Box = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  max-width: 1000px;
  margin: 0 auto;
  height: 50rem;
  gap: 2rem;

  @media screen and (max-width: 900px) {
    height: 100%;
  }
`;

const ContentImg = styled.img`
  padding-top: 1.5rem;
  max-width: 15rem;
`;

const ContentTitle = styled.div`
  color: black;
  font-size: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid gray;
`;

const ContentContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;

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

const Title = styled.h1`
  text-align: center;
  line-height: 1.5;
  color: white;
`;

const RootContainer = styled.div`
  background-color: rgb(22, 22, 22);
  padding: 4rem 2rem;
`;
