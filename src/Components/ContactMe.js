import React from "react";
import styled from "styled-components";
import twitter from "../imgs/twitter.png";
import link from "../imgs/link.png";
import git from "../imgs/git.png";
import mail from "../imgs/maill.PNG";

const Footer = styled.footer`
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:#204294;
  width: 100%;
  height: 160px;
  margin: 20px 0px;
  position: absolute;
  right: 0;
  @media (max-width: 768px) {
    display:block;
    text-align: center;
    padding: 10px 50px;
  }

  .contactLinks {
    @media (max-width: 768px) {
        display:flex;
        padding: 0px 50px;
      }
    a {
      position: relative;
      display: inline-block;
      color: #cc66ff !important;
      text-transform: uppercase;
      font-weight: 700;
      margin: 0 15px;
      outline: 0;
      @media (max-width: 768px) {
        margin: 10px 5px;
        
      }
    }
  }
`;

const ContactME = () => {
  return (
    <Footer id="contact">
      <div className="copyright">
        <div className="top">
          <h6>Developed By Killua</h6>
        </div>
        <div className="bottom">
          <h6> Inspired by Ibrahim & Abdy</h6>
        </div>
      </div>
      <div className="contactLinks">
        <a href="mailto:moshood988@gmail.com" target="_blank" rel="noopener noreferrer" title="email">
        <img src={mail} alt="mail" />
        </a>
        <a href="https://github.com/cyberkillua" target="_blank" rel="noopener noreferrer" title="github">
        <img src={git} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/moshood-alimi-413869199/" target="_blank" rel="noopener noreferrer" title="linkedin">
        <img src={link} alt="linkdln" />
        </a>
        <a href="https://twitter.com/Killua713" target="_blank" rel="noopener noreferrer" title="twitter">
        <img src={twitter} alt="twitter" />
        </a>
        
      </div>
    </Footer>
  );
};

export default ContactME;
