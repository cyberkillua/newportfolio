import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  color: black;
  background: white;
  border-bottom: 0px solid #f1f1f1;
  padding: 0px 20px;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    color: white;
    text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;
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
        Alimi Moshood Abiola
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
