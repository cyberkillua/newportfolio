import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display:block;
    text-align: center;
    padding: 50px; 40px;
  }

  .contactLinks {
    @media (max-width: 768px) {
        display:flex;
        
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
          <span className="text"> email </span>
        </a>
        <a href="https://github.com/cyberkillua" target="_blank" rel="noopener noreferrer" title="github">
          <span className="text"> github </span>
        </a>
        <a href="https://www.linkedin.com/in/moshood-alimi-413869199/" target="_blank" rel="noopener noreferrer" title="linkedin">
          <span className="text"> linkedin </span>
        </a>
        <a href="https://twitter.com/Killua713" target="_blank" rel="noopener noreferrer" title="twitter">
          <span className="text"> Twitter </span>
        </a>
        
      </div>
    </Footer>
  );
};

export default ContactME;
