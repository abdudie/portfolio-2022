import React from "react";
import { Projects } from "../components/Images";
import "./project.css";

const Project = () => {
  return (
    <div className="projectContainer">
      <div className="projectWrapper">
        <h2 className="proj">Projects</h2>
        {Projects.map((e) => {
          return (
            <>
              <div className="projectDetails">
                <img className="projectImg" src={e.img} alt="img"></img>
                <div className="details">
                  <h3 className="w1">{e.name}</h3>
                  <h4 className="w2">{e.info}</h4>
                  <p className="w3">
                    <b>Tech Stack: {e.tech}</b>
                  </p>
                  <a className="linkWebsite" href={e.url}>
                    View Website
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
