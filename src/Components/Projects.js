import React from "react";
import styled from "styled-components";



const Projectss = styled.section`
  margin-top: 80px;
  width: 100%;
  h3 {
    font-weight: 800;
    font-family: "Khula", sans-serif;
    font-size: 50px;
    line-height: 59px;
    letter-spacing: 0em;
    text-align: left;
    @media (max-width: 768px){
      font-size: 25px;
      line-height: 29px;
    }
  }
  .ProjectGrid {
    width: 100%;
    margin-top: 60px;
    grid-gap: 60px 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr); 
      margin-top: 30px;
      
    }
    a {
      color: white;
    }
    a:hover {
      text-decoration: none;
      transform: scale(1.05);
    }
    .box {
      position: relative;
      width: 380px;
      height: 380px;
      background: #5252C2;
      border: 5px solid #98FB4A;
      box-sizing: border-box;
      border-radius: 10px;
      @media (max-width: 1024px) {
        height: 380px;
        width: 331px;
        margin: auto;
      }
      @media (max-width: 768px) {
        height: 259px;
        width: 331px;
        margin: auto;
        border: 3px solid #98FB4A;
      }
      h4{
          font-weight: 500;
          font-family: "Khula", sans-serif;
          font-size: 35px;
          line-height: 41px;
          color: #FFFFFF;
          padding-top: 25px;
          padding-left: 25px;
      }
      h6{
          font-weight: 300;
          font-family: "Khula", sans-serif;
          font-size: 20px;
          line-height: 23px;
          color: #FFFFFF;
          padding-left: 25px;
      }
      p {
          line-height: 29px;
          font-weight: 400;
          font-family: "Khula", sans-serif;
          font-size: 25px;
          line-height: 29px;
          padding-top: 35px;
          padding-left: 25px;
          @media (max-width: 768px) {
            padding-top: 25px;
            font-size: 20px;
            line-height: 23px;
          }
      }
      .go{
        position: absolute;
        bottom: 60px;
        left: 25px;
        height: 25px;
        width: 55px;
        border-radius: 0px;
        background: #FB4A59;
        text-align: center;
        @media (max-width: 768px) {
          bottom: 10px;
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
      <h3>Checkout some of my works</h3>
      <div className="ProjectGrid">
        <a href="https://instaclone70.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="box">
            <h4>Instagram Clone</h4>
            <h6>React + Nodejs + MongoDB</h6>
            <p>A web clone of Instagram</p>
            <div className="go">GO</div>
          </div>
        </a>
        <a href="https://budgetappp.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="box">
            <h4>Budget Calculator</h4>
            <h6>HTML + CSS + Javascript</h6>
            <p> Income vs expense</p>
            <div className="go">GO</div>
          </div>
        </a>
        <a href="https://killuaquiz.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="box">
            <h4>Quizer</h4>
            <h6>React</h6>
            <p>An Online Quiz App  </p>
            <div className="go">GO</div>
          </div>
        </a>
        <a href="https://dicedd.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="box">
            <h4>Pig Game</h4>
            <h6>HTML + CSS + Javascript</h6>
            <p>You vs Com, 2 dice who wins?</p>
            <div className="go">GO</div>
          </div>
        </a>
        <a href="https://photowalled.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="box">
            <h4>Photowall</h4>
            <h6>React + Firebase</h6>
            <p>An Online Album</p>
            <div className="go">GO</div>
          </div>
        </a>
        <a href="https://relaxed-shirley-f10c3b.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="box">
            <h4>Whoisng</h4>
            <h6>React</h6>
            <p>A webapp that searches and displays information about domains</p>
            <div className="go">GO</div>
          </div>
        </a>
        <a href="https://getcryptonews.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="box">
            <h4>Crypto News</h4>
            <h6>Vuejs</h6>
            <p>A webapp that displays news about Crypto currencies</p>
            <div className="go">GO</div>
          </div>
        </a>
      </div>
    </Projectss>
    </>
  );
};

export default Projects;
