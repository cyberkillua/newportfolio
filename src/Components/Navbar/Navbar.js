import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import killua from "./killua.png"
import { animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 120px;
  left: 0px;
  top: 0px;
  color: #ffffff;
  background: #204294;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  padding-left: 116px;
  padding-right: 100px;
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 0px;
  }
  .logo {
    
    padding-top: 35px;
    color: white;
    cursor: pointer;
    font-size: 35px;
    line-height: 53px;
    font-family: "Khula", sans-serif;
    font-weight: 800;
    .dot{
      color:#98FB4A;
    }
    
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div
        className="logo"
        onClick={() => {
          scroll.scrollToTop();
        }}>
        <img src={killua} alt="logo"/>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
