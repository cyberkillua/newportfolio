import React from "react";
import styled from "styled-components";
import emoji from "react-easy-emoji";
import link from "../imgs/link.svg";
import git from "../imgs/git.svg";
import twitter from "../imgs/twitter.svg";
import html from "../imgs/html.svg";
import css from "../imgs/css.svg";
import sass from "../imgs/sass.svg";
import javascript from "../imgs/javascript.svg";
import react from "../imgs/react.svg";
import vue from "../imgs/vue.svg";
import node from "../imgs/nodejs.svg";
import mongo from "../imgs/mongodb.svg";
import fire from "../imgs/firebase.svg";
import hero from "../imgs/heroku.svg";
import net from "../imgs/netlify.svg";
import giticon from "../imgs/giticon.svg";

const Section = styled.section`
  margin-top: 10rem;
  padding-top: 10rem;
  @media (max-width: 48rem) {
    margin-top: 5rem;
  }
  .skills {
    margin-top: 2rem;
    padding-top: 3rem;

    h3 {
      font-weight: 800;
      font-size: 5rem;
      line-height: 5.9rem;
      letter-spacing: 0em;
      text-align: left;
      @media (max-width: 48px) {
        font-size: 2.5rem;
        line-height: 2.9rem;
      }
    }
    h6 {
      font-family: gilroy-light;
      font-weight: 300;
      font-size: 2.5rem;
      line-height: 2.9rem;
      text-align: left;
      @media (max-width: 48rem) {
        font-size: 1.5rem;
        line-height: 1.8rem;
      }
    }
    .stuff {
      margin-top: 8rem;
      display: grid;
      grid-gap: 1rem 3rem;
      grid-template-columns: repeat(4, 1fr);
      @media (max-width: 64rem) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 2rem;
      }
      @media (max-width: 48rem) {
        margin-top: 2rem;
        grid-template-columns: repeat(1, 1fr);
      }

      table {
        width: 25rem;
        height: 25rem;
        text-align: center;

        @media (max-width: 64rem) {
          width: auto;
          margin: auto;
        }
        @media (max-width: 48rem) {
          width: auto;
          margin: auto;
          margin-top: 5rem;
        }

        th {
          height: 4.3rem;
          width: 18.1rem;
          font-size: 3.5rem;
          line-height: 4.1rem;
          letter-spacing: 0em;
          padding-bottom: 2rem;
        }
        td {
          padding: 0;

          p {
            font-size: 1.5rem;
            line-height: 1.8rem;
            letter-spacing: 0em;
            color: #98fb4a;
            padding-top: 2rem;
          }
        }
      }
    }
  }
  .aboutMe {
    width: 95%;
    @media (max-width: 64rem) {
      width: 100%;
    }
    @media (max-width: 48rem) {
      width: 100%;
    }
    p {
      font-size: 30px;
      line-height: 35px;
      letter-spacing: 0em;
      text-align: left;
      font-weight: 500;
      padding-bottom: 1rem;
      @media (max-width: 48rem) {
        font-size: 1.5rem;
        line-height: 1.8rem;
      }
    }
    h4 {
      font-family: Poppins;
      font-size: 5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 7.5rem;
      letter-spacing: 0em;
      text-align: left;
      @media (max-width: 48rem) {
        font-size: 2rem;
        line-height: 2.3rem;
      }
      .dot {
        color: #98fb4a;
        border-radius: 0;
      }
    }
    h5 {
      font-family: Poppins;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 3.8rem;
      letter-spacing: 0em;
      text-align: left;
      @media (max-width: 48rem) {
        font-size: 1.5rem;
        line-height: 2.3rem;
      }
    }
    .touch {
      padding-top: 4rem;
      display: flex;
      img {
        height: 3rem;
        border-radius: 0px;
        margin-top: 2rem;
        margin-right: 4rem;

        @media (max-width: 48rem) {
          height: 2rem;
          width: 2rem;
          border-radius: 0px;
          margin-top: 2rem;
          margin-right: 1.5rem;
        }
      }
      .get-in-touch {
        width: 23rem;
        height: 7rem;
        border: 3px solid #98fb4a;
        box-sizing: border-box;
        padding-top: 1.5rem;
        margin-left: 6rem;
        font-family: Poppins;
        font-size: 2rem;
        line-height: 3.5rem;
        letter-spacing: 0em;
        text-align: center;
        color: var(--secondary-color);
        a {
          color: var(--secondary-color);
        }
        a:hover {
          text-decoration: none;
        }
        @media (max-width: 64rem) {
          margin-left: 3rem;
        }
        @media (max-width: 48rem) {
          height: 3.5rem;
          width: 8.8rem;
          font-size: 1.2rem;
          line-height: 1.4rem;
          margin-left: 1rem;
          border: 1.5px solid var(--secondary-color);
          padding-top: 1rem;
          margin-top: 1rem;
        }
      }
    }
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <main>
        <div className="aboutMe">
          <p>Heyyy! {emoji("👋🏾")}</p>
          <h4>
            I'm Moshood Alimi "Killua",
            <br />I build things for the web<span className="dot">.</span>
          </h4>
          <h5>
            I am a Frontend Developer based in Nigeria, focused on building
            responsive & accessible interfaces and experiences on the web.
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
            <div className="get-in-touch">
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
            Right now you can find me hacking away primarily with Reactjs,
            Nuxtjs, Tailwind and in general anything Javascript, HTML and CSS
            related. I Also dabble in Vuejs, typescript and react Native from
            time to time. Here are a few of the technologies i've been working
            with recently
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
            <table>
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
                  <td></td>
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
      </main>
    </Section>
  );
};

export default Home;
