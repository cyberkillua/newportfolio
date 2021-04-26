import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import killua from "./killua.png";
import { animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 120px;
  left: 0px;
  top: 0px;
  color: #ffffff;
  background: #050505;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  .logo {
    padding-top: 40px;
    color: white;
    cursor: pointer;
    height: 57px;
    width: 131px;
    @media (max-width: 768px) {
      height: 38px;
      width: 88px;
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
        }}
      >
        <img src={killua} alt="logo" />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
