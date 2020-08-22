import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    padding: 18px 10px;
    color: black;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #cc66ff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      opacity: ${({ visible }) => visible ? 0 : 1};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 100px;
    text-align: center;
    transition: transform 0.3s ease-in-out;

    a {
      color: white;
      font-size: x-large;
    }
  }
`;

const RightNav = ({ open, setOpen}) => {
  return (
    <Ul open = {open}  >
      <Link
        className="link"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={()=>{setOpen(false)}}
        >
        HOME
      </Link>
      <Link
        className="link"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={()=>{setOpen(false)}}
        >
        PROJECTS
      </Link>
      <Link
        className="link"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={()=>{setOpen(false)}}>
        CONTACT ME{" "}

      </Link>
    </Ul>
  );
};

export default RightNav;
