import React, { useRef } from "react";
import Header from "../componentes/Header";
import Title from "../componentes/Title";
import AboutMe from "../componentes/aboutme";
import SkillTool from "../componentes/Skill";
import Projects from "../componentes/projects";
import Contact from "../componentes/contact";
import Footer from "../componentes/footer";

const Main = () => {
  const homeRef = useRef();
  const aboutmeRef = useRef();
  const skillRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Header
        homeRef={homeRef}
        aboutmeRef={aboutmeRef}
        skillRef={skillRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Title homeRef={homeRef} />
      <AboutMe aboutmeRef={aboutmeRef} />
      <SkillTool skillRef={skillRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
};

export default Main;
