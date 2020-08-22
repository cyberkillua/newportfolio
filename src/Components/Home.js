import React from "react";
import styled from "styled-components";
import emoji from "react-easy-emoji";

const Section = styled.section`
  margin-top: 3rem;
  padding: 25px;
  .skills {
    margin-top: 20px;
    padding-top: 60px;
   
    h3 {
      color: #cc66ff;
      padding-left: 30px;
    }
    h6{
      padding-top: 25px;
      padding-left: 80px;
      font-size: x-large;
      
    }
    .stuff{
      padding-left: 80px;
      display: flex;
      
      justify-content: space-between;
      @media (max-width: 768px) {
        display:block;
        
      }
      div {
        
        height: max-content;
        width: 200px;
        text-align: center;
        h2 {
          color: #cc66ff;
          font-size: medium;
          margin-bottom: -20px;
          padding-top: 10px;
          
        }
        @media (max-width: 768px) {
          padding-bottom: 40px;
          
        }
      }
    }
  }
  .aboutMe {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
    p {
      font-size: x-large;
      padding-bottom: 10px;
    }
    h5 {
        padding-top 30px;
    }
    a {
        color: #cc66ff;
        @media (max-width: 768px) {
            font-size: small;
          }
    }
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <div className="aboutMe">
        <p>Hello! {emoji("👋")}</p>
        <h4>
          I'm Alimi Moshood a Frontend Developer focused on building responsive
          and accessible interfaces & experiences on the web.
        </h4>
        <h5>
          Get in touch {emoji("👉")}
          <a href="mailto:moshood988@gmail.com"> moshood988@gmail.com</a>
        </h5>
      </div>
      <div className="skills">
        <h3>SKILLS</h3>
        <h6>
          I am proficient in quite some skills and on my way to becoming a
          professional. Here are a few of the technologies I have experience
          with:
        </h6>
        <div className="stuff">
          <div>
           <h2> LANGUAGES</h2>
            <br /> HTML5 <br />
            CSS/Sass <br />
            JavaScript (ES6)
          </div>
          <div>
           <h2> FRAMEWORKS </h2>
            <br /> ReactJs
            <br/> Express
            <br /> NodeJs{" "}
          </div>
          <div>
           <h2> DATABASE</h2> 
            <br />
            MongoDB
            <br/> Firebase
          </div>
          <div>
           <h2> TOOLS </h2>
            <br />
            Bash
            <br />
            Git & Github
            <br />
            Netlify
            <br />
            Heroku
            <br />
            Chrome DevTools
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
