import React from "react";
import styled from "styled-components";
import twitter from "../imgs/twitter.svg";
import link from "../imgs/link.svg";
import git from "../imgs/git.svg";
import mail from "../imgs/maill.svg";
import killua from "../imgs/Bkillua.svg";

const Footer = styled.footer`
  margin-top: 10rem;
  padding-right: 2rem;
  padding-left: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #050505;
  width: 100%;
  height: 16.3rem;
  position: absolute;
  right: 0;
  @media (max-width: 48em) {
    height: 8.4rem;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .copyright {
    img {
      height: 5.7rem;
    }
    @media (max-width: 48em) {
      display: none;
    }
  }
  .copi {
    display: none;
    @media (max-width: 48em) {
      display: inline;
      font-weight: 100;
      font-size: 0.6rem;
      line-height: 1.2rem;
      color: #98fb4a;
      padding-top: 1.5rem;
    }
  }
  .contactLinks {
    @media (max-width: 48em) {
      display: flex;
      padding-left: 1rem;
    }
    img {
      height: 3rem;
      width: 3rem;
      @media (max-width: 48em) {
        width: 2rem;
        height: 2rem;
      }
    }
    a {
      position: relative;
      display: inline-block;
      color: #cc66ff !important;
      text-transform: uppercase;
      font-weight: 700;
      margin: 0 1.5rem;
      outline: 0;
      @media (max-width: 48em) {
        margin: 1rem 0.5rem;
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
          title="email"
        >
          <img src={mail} alt="mail" />
        </a>
        <a
          href="https://github.com/cyberkillua"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          <img src={git} alt="github" />
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
          href="https://twitter.com/Killua713"
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
        >
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
