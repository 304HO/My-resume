import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import ProjectTag from "./projectsTag";
import projectData from "../projectdata";

const Projects = ({ projectsRef }) => {
  return (
    <RootContainer ref={projectsRef}>
      <Title>Project</Title>
      {projectData.map((data, idx) => {
        return (
          <ProjectContainer key={idx}>
            <ProjectTitle>{data.name}</ProjectTitle>
            <ProjectSubTitle>{data.date}</ProjectSubTitle>
            <ImgSlider img={data.img} key={idx} />
            <MainDescript>{data.mainDescript}</MainDescript>
            <ProjectTag tag={data.tagDescript} key={idx} />
          </ProjectContainer>
        );
      })}
    </RootContainer>
  );
};

export default Projects;

const MainDescript = styled.div`
  font-size: 1.5rem;
  padding: 2.5rem 0 1rem 0;
  border-bottom: 1px solid rgb(204, 204, 204);
`;

const ProjectSubTitle = styled.div`
  font-size: 1rem;
  color: gray;
  padding-bottom: 2rem;
`;

const ProjectTitle = styled.div`
  font-size: 4rem;
  font-weight: 900;
`;

const ProjectContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px 4px rgb(0 0 0 / 40%);
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 5rem;
  margin: 2rem auto;
`;

const Title = styled.h1`
  text-align: center;
  line-height: 1.5;
`;

const RootContainer = styled.div`
  background-color: rgb(28, 128, 159);
  padding: 4rem 2rem;
`;
