import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ homeRef, aboutmeRef, skillRef, projectsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickOpenHandler = () => setIsOpen(!isOpen);
  const clickCloseHandler = () => setIsOpen(false);

  const [scrollPosition, setScriollPosition] = useState(0);
  const updateScroll = () => {
    setScriollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <RootContainer scrollPosition={scrollPosition}>
      <Title>
        <Link to="/">JGM's Portfolio</Link>
      </Title>
      <HamburgerMenu>
        <GiHamburgerMenu size={25} onClick={clickOpenHandler} />
      </HamburgerMenu>
      <Menu isOpen={isOpen}>
        <MenuList
          onClick={() => {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
            clickCloseHandler();
          }}
        >
          Home
        </MenuList>
        <MenuList
          onClick={() => {
            aboutmeRef.current.scrollIntoView({
              behavior: "smooth",
            });
            clickCloseHandler();
          }}
        >
          About me
        </MenuList>
        <MenuList
          onClick={() => {
            skillRef.current.scrollIntoView({
              behavior: "smooth",
            });
            clickCloseHandler();
          }}
        >
          Skills
        </MenuList>
        <MenuList
          onClick={() => {
            projectsRef.current.scrollIntoView({
              behavior: "smooth",
            });
            clickCloseHandler();
          }}
        >
          Projects
        </MenuList>
        <MenuList
          onClick={() => {
            contactRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            clickCloseHandler();
          }}
        >
          Contact
        </MenuList>
      </Menu>
    </RootContainer>
  );
};

export default Header;

const HamburgerMenu = styled.div`
  @media screen and (min-width: 901px) {
    display: none;
  }
`;

const MenuList = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 700;

  @media screen and (max-width: 900px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: absolute;
    top: 4rem;
    left: 0;
    background-color: white;
    width: 100%;
    text-align: center;
    box-shadow: 0px 3px 5px gray;
    padding: 1rem 0;
    line-height: 2;
  }
`;

const Title = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;

const RootContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 4rem;
  width: 100%;
  background-color: ${(props) =>
    props.scrollPosition < 100 ? "transparent" : "white"};
  box-shadow: ${(props) =>
    props.scrollPosition < 100 ? "none" : "0px 3px 5px gray"};
  position: fixed;
  z-index: 999;
  font-weight: 700;
  transition: all 0.4s ease 0s;

  @media screen and (max-width: 900px) {
    transition: all 0.4s ease 0s;
    background-color: white;
    box-shadow: 0px 3px 5px gray;
  }
`;
