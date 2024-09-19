import React, { useRef } from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import IntroContainer from "../../components/intro-container/intro-contianer";
import Recommendations from "../../components/Recommendations/Recommendations";
import Contact from "../../components/contact/contact";
import Experience from "../../components/experience/experience";
import Skills from "../../components/skills/skills";
import Timeline from "../../components/Timeline/Timeline";

function Home() {
  const introRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToIntro = () => {
    if (introRef.current) {
      introRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar onPortfolioClick={scrollToIntro} onContactClick={scrollToContact} />
      <div ref={introRef}>
        <IntroContainer />
      </div>
      <Timeline />
      <Skills />
      <Recommendations />
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default Home;