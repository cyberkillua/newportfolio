import React from "react";
import styled from "styled-components";



const Projectss = styled.section`
  padding: 25px;
  width: 100%;
  h3 {
    font-weight: 800;
    font-style: italic;
    @media (max-width: 768px) {
      font-size: large;
    }
  }

  .ProjectGrid {
    width: 100%;
    margin-top: 2em;
    grid-gap: 50px 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    a {
      color: white;
    }
    a:hover {
      text-decoration: none;
      transform: scale(1.05);
    }
    div {
      height: 250px;
      width: 100%;
      padding: 35px;
      border: 2px solid #cc66ff;
      background: linear-gradient(180deg, #d090e0 0%, #7f7ff7 100%);

      p {
        padding-top: 10px;
        font-size: small;
      }
      h5 {
        background: #fb4a59;
        outline: none;
        border: none;
        width: 50px;
        margin-top: 40px;
        padding-left: 5px;
        font-weight: bold;
        letter-spacing: 0.07rem;
        color: #fff !important;
        display: flex;
        cursor: pointer;
        align-items: center;
        
      }
      @media (max-width: 768px) {
        margin-bottom: 40px;
        height:250px;
        width: 100%;
      }
    }
  }
`;

const Projects = () => {
  return (
    <>
    <Projectss id="projects">
      <h3>Check out some of my work</h3>
      <div className="ProjectGrid">
        <a href="https://instaclone70.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>Instagram Clone</h4>
            <h6>HTML + CSS + Javascript + React + Express + Nodejs + MongoDB</h6>
            <p>A web clone of Instagram</p>
            <h5>GO</h5>
          </div>
        </a>
        <a href="https://budgetappp.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>Budget Calculator</h4>
            <h6>HTML + CSS + Javascript</h6>
            <p>A web app that helps calculate income vs expense</p>
            <h5>GO</h5>
          </div>
        </a>
        <a href="https://killuaquiz.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>Quizer</h4>
            <h6>HTML + CSS + Javascript + React</h6>
            <p>An Online Quiz App  </p>
            <h5>GO</h5>
          </div>
        </a>
        <a href="https://dicedd.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>Pig Game</h4>
            <h6>HTML + CSS + Javascript</h6>
            <p>You vs Com, 2 dice who wins?</p>
            <h5>GO</h5>
          </div>
        </a>
        <a href="https://photowalled.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>Photowall</h4>
            <h6>HTML + CSS + Javascript + React + Firebase</h6>
            <p>An Online Album</p>
            <h5>GO</h5>
          </div>
        </a>
        <a href="https://thedicedgame.netlify.app/" target="_blank" rel="noopener noreferrer">
          <div>
            <h4>Pig Game</h4>
            <h6>HTML + CSS + Javascript</h6>
            <p>You vs Com, a dice who wins?</p>
            <h5>GO</h5>
          </div>
        </a>
      </div>
    </Projectss>
    </>
  );
};

export default Projects;
