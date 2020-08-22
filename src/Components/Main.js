import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
import Projects from "./Projects";
import ContactME from "./ContactMe";



const Main = () => {
  return (
    <div>
      <Navbar />
      <Home title="home" id="home" />
      <Projects title="projects" id="projects" />
      <ContactME title="contact" id="contact" />
    </div>
  );
};

export default Main;
