import React from "react";
import styled from "styled-components";
// import cry from "../imgs/crypto.jpg";

const Projectss = styled.section`
  padding: 9rem 0px;
  width: 100%;
  h3 {
    font-weight: 800;
    font-size: 5rem;
    line-height: 5.9rem;
    letter-spacing: 0em;
    text-align: left;
    @media (max-width: 48em) {
      font-size: 2.5rem;
      line-height: 2.9rem;
    }
  }
  .ProjectGrid {
    margin-top: 6rem;
    display: grid;
    grid-row-gap: 6rem;
    grid-column-gap: 7.5rem;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));

    @media (max-width: 48em) {
      margin-top: 3rem;
      grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
      grid-column-gap: 5rem;
    }
    a {
      color: white;
      animation: all .2s;
    }
    a:hover {
      text-decoration: none;
      transform: scale(1.05);
    }
    .box {
      position: relative;
      padding: 0 2rem;
      height: 70rem;
      border-radius: 10px;
      @media (max-width: 48em) {
        height: 50rem;
        margin: auto;
        padding-left: 1rem;
      }
      .text {
        padding: 4rem 2rem 2rem;
        height: 30rem;
        @media (max-width: 48em) {
          height: 25rem;
          padding-right: 1rem;
        }
        h4 {
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 3px;
          font-size: 1.8rem;
          line-height: 4.1rem;
          color: #fff;
          @media (max-width: 64em) {
            font-size: 1.5rem;
          }
          @media (max-width: 48em) {
            font-size: 1.3rem;
          }
        }

        p {
          font-family: "Manrope", sans-serif;
          font-weight: 800;
          font-size: 3.5rem;
          padding-right: 6rem;
          margin-top: 1.5rem;
          line-height: 1.2;
          @media (max-width: 64em) {
            font-size: 3rem;
          }
          @media (max-width: 48em) {
            font-size: 2rem;
            padding-right: 0;
          }
        }
      }
    }
  }
`;

const Projects = () => {
  return (
    <>
      <Projectss id="projects">
        <h3>My Projects</h3>

        <div className="ProjectGrid">
          <a
            href="https://getcryptonews.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="box" style={{ background: "#D1D43F" }}>
              <div className="text" style={{ color: "#5E5A00" }}>
                <h4 style={{ color: "#5E5A00" }}>Crypto News </h4>
                <p>
                  A website that displays news about Crypto currencies made with
                  Vue
                </p>
              </div>
              <div className="photo">
                {/* <img src={cry} alt="crypto mockup" /> */}
              </div>
            </div>
          </a>
         
          <a
            href="https://moshchatapp.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="box" style={{ background: "#FCB64C" }}>
              <div className="text">
                <h4 style={{ color: "#5D3800" }}>Chat App </h4>
                <p style={{ color: "#5D3800" }}>
                  {" "}
                  A messaging app made with Nuxtjs, Vue, Vuetify and Firebase{" "}
                </p>
              </div>
              <div className="chat">
                {/* <img src={cry} alt="crypto mockup" /> */}
              </div>
            </div>
          </a>
          <a
            href="https://www.fezzant.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="box" style={{ background: "#8888FF" }}>
              <div className="text">
                <h4 style={{ color: "#131F5D" }}>Fezzant</h4>
                <p style={{ color: "#131F5D" }}>
                  Fezzant offical website made with HTML, tailwind css and javascript{" "}
                </p>
              </div>
              <div className="quiz">
                {/* <img src={cry} alt="crypto mockup" /> */}
              </div>
            </div>
          </a>

          <a
            href="https://relaxed-shirley-f10c3b.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="box" style={{ background: "#47D54C" }}>
              <div className="text">
                <h4 style={{ color: "#064600" }}>Whoisng </h4>
                <p style={{ color: "#064600" }}>
                  A website that searches and displays information about domain,
                  made with React
                </p>
              </div>
              <div className="who">
                {/* <img src={cry} alt="crypto mockup" /> */}
              </div>
            </div>
          </a>
        </div>
      </Projectss>
    </>
  );
};

export default Projects;
