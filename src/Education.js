import React from "react";
import "./education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="institute-name">Chitkara University, Punjab </span>
            <span className="institute-degree">
              B. Tech in Computer Science and Engineering | CGPA - 9.37{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2020-2024</span>
          </div>
        </div>
        <div className="education-two my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="institute-name">
              Nezamia Public School, Patna{" "}
            </span>
            <span className="institute-degree">
              Intermediate | Percentage - 69.70%{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2020</span>
          </div>
        </div>
        <div className="education-three my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="institute-name">The Tribhuvan School, Patna </span>
            <span className="institute-degree">
              Matriculation | Percentage - 74.6%{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2018</span>
          </div>
        </div>
      </div>
    </>
  );
}
