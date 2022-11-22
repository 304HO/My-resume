import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterRootContainer>
      <a href="https://github.com/304HO" target="_blank">
        <AiFillGithub size="5rem" color="white" />
      </a>
      <Descript>© 2022. Jea Gyoung Mo. All rights reserved.</Descript>
    </FooterRootContainer>
  );
};

export default Footer;

const Descript = styled.div`
  color: white;
  padding-top: 2rem;
`;

const FooterRootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: rgb(34, 34, 34); ;
`;
