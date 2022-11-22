import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const ProjectTag = ({ tag }) => {
  return (
    <RootContainer>
      {tag.map((el, idx) => {
        return (
          <DescriptContainer>
            <Descript>
              <FaCheck size={25} />
              <Lable>{el.lable}</Lable>
            </Descript>
            {el.isLink ? (
              <LinkValue href={el.value} target="_blank">
                {el.value}
              </LinkValue>
            ) : (
              <Value>{el.value}</Value>
            )}
          </DescriptContainer>
        );
      })}
    </RootContainer>
  );
};

export default ProjectTag;

const Value = styled.div`
  font-size: 1.3rem;
`;

const LinkValue = styled.a`
  font-size: 1.3rem;
  text-decoration: none;
  color: rgb(76, 157, 224);

  :hover {
    text-decoration: underline;
  }
`;

const Lable = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
`;

const DescriptContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: flex-start;
`;

const Descript = styled.div`
  /* border: 1px solid red; */
  width: 8vw;
  display: flex;
  align-items: flex-start;
`;

const RootContainer = styled.div`
  /* border: 1px solid rebeccapurple; */
  padding: 1rem 0;
  width: 100%;
`;
