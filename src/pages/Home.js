import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="detailsWrapper">
        <div className="card">
          <h3 className="p1">Hi,</h3>
          <h4 className="p2">This is Abhimanyu Singh</h4>
          <div className="objective">
            <p className="p3">
              My objectives are to work in an organization at responsible
              position where my technical and management skills enhance and
              should be implemented for the organization's growth. Seeking
              position as an engineer which offers key participation, team
              oriented tasks, immediate challanges, and career opportunity.
            </p>
          </div>
        </div>
        <div className="detailContainer">
          <div className="detailWrapper1">
            <h3>About</h3>
            <p>
              Full Stack Trainee | Newton School - Java, JavaScript, HTML, CSS,
              React. - Fluent Communication Skills. - Other software skills -
              Solidworks, ANSYS, AutoCAD
            </p>
          </div>
          <div className="detailWrapper1">
            <h3>Expirience</h3>
            <p>
              Timeline - 2 yrs. <br />
              Profile - Project Engineer. <br />
              Role: <br />={">"} Direct & supervise multiple teams at multiple
              projects and maintaining man-material-management.
              <br />={">"} Client handling & ensuring work completion within
              timeline. <br />={">"} Estimation & procurement. Designing &
              preparation of BOQ/BOM.
              <br />={">"} Document preparation.
            </p>
          </div>
        </div>
        <div className="game">
          <a
            className="game1"
            href="https://splendid-stardust-5224d4.netlify.app/"
          >
            There's a 2 player game
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
