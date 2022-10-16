import React, { useState } from "react";
import { Image } from "../components/Images";
import "./skills.css";

const Skills = () => {
  // const [image, setImage] = useState([]);
  // setImage({ Image });
  return (
    <div className="skillsContainer">
      <div className="skillsWrapper">
        {Image.map((e) => {
          return (
            <>
              <div className="imgContainer">
                <h4 className="imgName">{e.name}</h4>
                <img className="img1" src={e.img} alt="img"></img>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
