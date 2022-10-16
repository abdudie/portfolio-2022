import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="headerWrapper">
        <div className="topLeft">
          <img className="logoImg" src="./images/logo.png" alt="logo"></img>
          <span className="logoName">Portfolio Page - Abhimanyu</span>
        </div>

        <div className="togglePage">
          <Link to="/" className="links">
            <span>Home</span>
          </Link>
          <Link to="/skills" className="links">
            <span>My Skills</span>
          </Link>
          <Link to="/projects" className="links">
            <span>Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
