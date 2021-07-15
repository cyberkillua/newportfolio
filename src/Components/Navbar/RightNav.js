import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import killua from "../../imgs/Killua.svg";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  .logo {
    visibility: hidden;
  }
  .links {
    display: flex;
    align-items: center;
  }
  a {
    padding: 0 2rem;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.3rem;
    .dot {
      color: var(--secondary-color);
    }
  }
  a:hover {
    text-decoration: none;
  }
  @media (max-width: 48em) {
    flex-flow: column nowrap;
    background-color: white;
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
      padding-left: 1rem;
      margin-top: 3rem;
      img {
        height: 5.7rem;
      }
    }
    .links {
      padding-top: 20rem;
      flex-flow: column;
      a {
        color: black;
        font-size: 3rem;
        padding: 1rem 0;
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
