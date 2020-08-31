import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-top:35px;
  a {
    padding: 18px 20px;
    color: #ffffff;
    cursor: pointer;
    font-size: 15px;
    font-family: "Khula", sans-serif;
    .dot{
      color:#98FB4A;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    opacity: ${({ visible }) => (visible ? 0 : 1)};
    top: 100px;
    right: 0;
    height: 250px;
    width: 250px;
    padding-top: 0px;
    text-align: center;
    transition: transform 0.3s ease-in-out;

    a {
      color: #204294;
      font-size: x-large;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <Link
        className="link"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => {
          setOpen(false);
        }}>
       <span className="dot"> HOME</span>
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
        }}>
        PROJECTS
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
        }}>
        CONTACT ME{" "}
      </Link>
    </Ul>
  );
};

export default RightNav;
