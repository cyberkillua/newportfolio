import React from "react";
import styled from "styled-components";
import twitter from "../imgs/twitter.svg";
import link from "../imgs/link.svg";
import git from "../imgs/git.svg";
import mail from "../imgs/maill.svg";
import killua from "../imgs/Bkillua.svg";

const Footer = styled.footer`
  margin-top: 100px;
  padding-right: 20px;
  padding-left: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #050505;
  width: 100%;
  height: 163px;
  position: absolute;
  right: 0;
  @media (max-width: 768px) {
    height: 84px;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
  }
  .copyright {
    img {
      height: 57px;
      width: 131px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .copi {
    display: none;
    @media (max-width: 768px) {
      display: inline;
      font-family: "Khula", sans-serif;
      font-weight: 100;
      font-size: 6px;
      line-height: 12px;
      color: #98fb4a;
      padding-top: 15px;
    }
  }
  .contactLinks {
    @media (max-width: 768px) {
      display: flex;
      padding-left: 10px;
    }
    img {
      height: 30px;
      width: 30px;
      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }
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
        <img src={killua} alt="logo" />
      </div>
      <div className="contactLinks">
        <a
          href="mailto:moshood988@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="email">
          <img src={mail} alt="mail" />
        </a>
        <a
          href="https://github.com/cyberkillua"
          target="_blank"
          rel="noopener noreferrer"
          title="github">
          <img src={git} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/moshood-alimi-413869199/"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin">
          <img src={link} alt="linkdln" />
        </a>
        <a
          href="https://twitter.com/Killua713"
          target="_blank"
          rel="noopener noreferrer"
          title="twitter">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
      <div className="copi">
        <h6>All rights reserved</h6>
      </div>
    </Footer>
  );
};

export default ContactME;
