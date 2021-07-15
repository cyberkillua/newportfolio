import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import killua from "../../imgs/Bkillua.svg";
import { animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  position: fixed;
  background-color: var(--primary-color);
  z-index: 9999;
  width: 100%;
  height: 12rem;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10rem;
  padding-right: 10rem;
  @media (max-width: 48em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .logo {
    cursor: pointer;
    height: 5.5rem;
    @media (max-width: 48em) {
      height: 3.8rem;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <header
        className="logo"
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <img src={killua} alt="logo" />
      </header>
      <Burger />
    </Nav>
  );
};

export default Navbar;
