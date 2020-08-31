import React from "react";
import styled from "styled-components";
import emoji from "react-easy-emoji";
import twitter from "../imgs/twitter.png";
import link from "../imgs/link.png";
import git from "../imgs/git.png";
import languages from "../imgs/languages.PNG";
import frameworks from "../imgs/fremeworks.PNG";
import database from "../imgs/database.PNG";
import tools from "../imgs/tools.PNG";

const Section = styled.section`
  margin-top: 7rem;
  padding: 25px;
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 10px;
  }
  .skills {
    margin-top: 20px;
    padding-top: 30px;

    h3 {
      color: #ffffff;
      padding-left: 0px;
      font-family: "Khula", sans-serif;
      font-weight: 500;
    }
    h6 {
      font-family: "Khula", sans-serif;
      font-weight: 300;
    }
    .stuff {
      display: flex;
      justify-content: space-around;
      margin-left: 20px;
      img {
        height: fit-content;
        
        @media (max-width: 768px) {
          padding-top: 25px;
        }
      }
      .imaged{
        padding-top: 25px;
        @media (max-width: 768px) {
          margin: 20px;
        }
      }
      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-content: center;
        padding-left: 60px;
      }

    }
  }
  .aboutMe {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
    p {
      font-size: 30px;
      line-height: 35px;
      font-family: "Khula", sans-serif;
      padding-bottom: 10px;
    }
    h4 {
      font-family: "Poppins", sans-serif;
      font-weight: 800;
      .dot {
        color: #98fb4a;
      }
    }
    h5 {
      font-family: Poppins;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
    }
    .touch {
      padding-top: 40px;
      display: flex;
      img {
        padding: 13px 25px 13px 0px;
      }
      .dot {
        color: #98fb4a;
        font-size: 10px;
        padding-top: 30px;
      }
    }
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <div className="aboutMe">
        <p>Heyyy! {emoji("👋")}</p>
        <h4>
          I'm Moshood Alimi "Killua",
          <br />
          I'm a Web Developer<span className="dot">.</span>
        </h4>
        <h5>
          I'm Alimi Moshood a Frontend Developer focused on building responsive
          and accessible interfaces & experiences on the web.
        </h5>
        <div className="touch">
          <a
            href="https://twitter.com/Killua713"
            target="_blank"
            rel="noopener noreferrer"
            title="twitter">
            <img src={twitter} alt="twitter"/>
          </a>
          <a
            href="https://www.linkedin.com/in/moshood-alimi-413869199/"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin">
            <img src={link} alt="linkdln" />
          </a>
          <a
            href="https://github.com/cyberkillua"
            target="_blank"
            rel="noopener noreferrer"
            title="github">
            <img src={git} alt="github" />
          </a>
          <div className="dot"> Get in touch</div>
        </div>
      </div>
      <div className="skills">
        <h3>My skillset</h3>
        <h6>
          I'm proficient in several skills and i am constanly improving and
          gaining experience. Here are some of the technologies I have
          experience with:
        </h6>
        <div className="stuff">
          <img src={languages} style={{"paddingLeft":"15px"}}/>
         <span className="imaged"> <img src={frameworks} alt="frameworks" /></span>
         <span className="imaged"><img src={database} alt="database" /></span>
         <span className="imaged"> <img src={tools} alt="tools" /></span>
        </div>
      </div>
    </Section>
  );
};

export default Home;
