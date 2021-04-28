import React from "react";
import styled from "styled-components";
import emoji from "react-easy-emoji";
import link from "../imgs/link.png";
import git from "../imgs/git.png";
import twitter from "../imgs/twitter.png";
import html from "../imgs/html.png";
import css from "../imgs/css.png";
import sass from "../imgs/sass.png";
import javascript from "../imgs/javascript.png";
import react from "../imgs/react.png";
import vue from "../imgs/vue.png";
import node from "../imgs/nodejs.png";
import mongo from "../imgs/mongodb.png";
import fire from "../imgs/firebase.png";
import hero from "../imgs/heroku.png";
import net from "../imgs/netlify.png";
import giticon from "../imgs/giticon.png";

const Section = styled.section`
  margin-top: 100px;
  padding-top: 100px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  .skills {
    margin-top: 20px;
    padding-top: 30px;

    h3 {
      font-weight: 800;
      font-family: "Khula", sans-serif;
      font-size: 50px;
      line-height: 59px;
      letter-spacing: 0em;
      text-align: left;
      @media (max-width: 768px) {
        font-size: 25px;
        line-height: 29px;
      }
    }
    h6 {
      font-family: "Khula", sans-serif;
      font-weight: 300;
      font-size: 25px;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 18px;
      }
    }
    .stuff {
      margin-top: 80px;
      display: grid;
      grid-gap: 10px 30px;
      grid-template-columns: repeat(4, 1fr);
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 768px) {
        margin-top: 20px;
        grid-template-columns: repeat(1, 1fr);
      }

      table {
        width: 250px;
        height: 250px;
        text-align: center;

        @media (max-width: 1024px) {
          width: auto;
          margin: auto;
        }
        @media (max-width: 768px) {
          width: auto;
          margin: auto;
          margin-top: 50px;
        }

        th {
          height: 43px;
          width: 181px;
          border-radius: nullpx;
          font-family: "Khula", sans-serif;
          font-size: 35px;
          line-height: 41px;
          letter-spacing: 0em;
          padding-bottom: 20px;
        }
        td {
          padding: 0px;

          p {
            font-family: "Khula", sans-serif;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0em;
            color: #98fb4a;
            padding-top: 20px;
          }
        }
      }
    }
  }
  .aboutMe {
    width: 65%;
    @media (max-width: 1025px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    p {
      font-size: 30px;
      line-height: 35px;
      letter-spacing: 0em;
      text-align: left;
      font-family: "Khula", sans-serif;
      font-weight: 500;
      padding-bottom: 10px;
      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 18px;
      }
    }
    h4 {
      font-family: Poppins;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: 75px;
      letter-spacing: 0em;
      text-align: left;
      @media (max-width: 768px) {
        font-size: 20px;
        line-height: 23px;
      }
      .dot {
        color: #98fb4a;
      }
    }
    h5 {
      font-family: Poppins;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: 0em;
      text-align: left;
      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 23px;
      }
    }
    .touch {
      padding-top: 40px;
      display: flex;
      img {
        height: 30px;
        width: 30px;
        border-radius: 0px;
        margin-top: 20px;
        margin-right: 40px;

        @media (max-width: 768px) {
          height: 20px;
          width: 20px;
          border-radius: 0px;
          margin-top: 20px;
          margin-right: 25px;
        }
      }
      .dot {
        width: 234px;
        height: 70px;
        border: 3px solid #98fb4a;
        box-sizing: border-box;
        border-radius: 5px;
        padding-top: 15px;
        margin-left: 160px;
        font-family: Poppins;
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        color: #98fb4a;
        a {
          color: #98fb4a;
        }
        a:hover {
          text-decoration: none;
        }
        @media (max-width: 1024px) {
          margin-left: 60px;
        }
        @media (max-width: 768px) {
          height: 35px;
          width: 88px;
          font-size: 12px;
          line-height: 14px;
          margin-left: 60px;
          border: 1.5px solid #98fb4a;
          padding-top: 10px;
          margin-top: 10px;
        }
      }
    }
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <div className="aboutMe">
        <p>Heyyy! {emoji("👋🏾")}</p>
        <h4>
          I'm Moshood Alimi "Killua",
          <br />I build things for the web<span className="dot">.</span>
        </h4>
        <h5>
          I am a self-taught Frontend Developer based in Nigeria, focused on
          building responsive & accessible interfaces and experiences on the
          web.
        </h5>
        <div className="touch">
          <a
            href="https://twitter.com/Killua713"
            target="_blank"
            rel="noopener noreferrer"
            title="twitter"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/moshood-alimi-413869199/"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
          >
            <img src={link} alt="linkdln" />
          </a>
          <a
            href="https://github.com/cyberkillua"
            target="_blank"
            rel="noopener noreferrer"
            title="github"
          >
            <img src={git} alt="github" />
          </a>
          <div className="dot">
            <a
              href="mailto:moshood988@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="email"
            >
              Get in touch
            </a>{" "}
          </div>
        </div>
      </div>
      <div className="skills">
        <h3>My skillset</h3>
        <h6>
          Right now you can find me hacking away primarily with Reactjs, Nuxtjs,
          Tailwind and in general anything Javascript, HTML and CSS related.
          I Also dabble in Vuejs from time to time. Here are a few of
          the technologies i've been working with recently:
        </h6>
        <div className="stuff">
          <table>
            <colgroup span="2"></colgroup>
            <thead>
              <tr>
                <th colSpan="2" scope="colgroup">
                  Languages
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={html} alt="html" />
                  <p>HTML</p>
                </td>
                <td>
                  {" "}
                  <img src={css} alt="css" />
                  <p>CSS3</p>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <img src={sass} alt="sass" />
                  <p>SASS</p>
                </td>
                <td>
                  <img src={javascript} alt="javascript" />
                  <p>Javascript</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <colgroup span="2"></colgroup>
            <thead>
              <tr>
                <th colSpan="2" scope="colgroup">
                  Frameworks
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={react} alt="react" />
                  <p>ReactJS</p>
                </td>
                <td>
                  {" "}
                  <img src={node} alt="NodeJS" />
                  <p>NodeJS</p>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <img src={vue} alt="VueJS" />
                  <p>VueJS</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table style={{ width: "200px", height: "200px" }}>
            <colgroup span="2"></colgroup>
            <thead>
              <tr>
                <th colSpan="2" scope="colgroup">
                  Database
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={fire} alt="Firebase" />
                  <p>Firebase</p>
                </td>
                <td>
                  {" "}
                  <img src={mongo} alt="MongoDB" />
                  <p>MongoDB</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <colgroup span="2"></colgroup>
            <thead>
              <tr>
                <th colSpan="2" scope="colgroup">
                  Tools
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={hero} alt="Heroku" />
                  <p>Heroku</p>
                </td>
                <td>
                  {" "}
                  <img src={net} alt="Netlify" />
                  <p>Netlify</p>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <img src={giticon} alt="Git/Git bash" />
                  <p>Git/Git bash</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default Home;
