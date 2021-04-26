import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import killua from "./killua.png";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-top: 40px;
  .logo {
    visibility: hidden;
  }

  a {
    padding: 18px 20px;
    color: #ffffff;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    font-family: "Khula", sans-serif;
    .dot {
      color: #98fb4a;
    }
  }
  a:hover {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #8888ff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    opacity: ${({ visible }) => (visible ? 0 : 1)};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 0;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    .logo {
      visibility: visible;
      padding-left: 10px;
    }
    .links {
      padding-top: 200px;
      display: flex;
      flex-flow: column nowrap;
      a {
        color: #ffffff;
        font-size: x-large;
      }
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <div className="logo">
        <img src={killua} alt="logo" />
      </div>
      <div className="links">
      <Link
        className="link"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => {
          setOpen(false);
        }}
      >
        <span className="dot"> Home</span>
      </Link>
      <Link
        className="link"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => {
          setOpen(false);
        }}
      >
        Projects
      </Link>
      <Link
        className="link"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => {
          setOpen(false);
        }}
      >
        Connect{" "}
      </Link>
      </div>
    </Ul>
  );
};

export default RightNav;
