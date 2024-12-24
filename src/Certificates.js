import React from "react";
import "./certificates.css";

export default function Certificates() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">
              Developing AI Applications With Python And Flask{" "}
            </span>
            <span className="issuing-authority">Coursera </span>
          </div>{" "}
          <div>
            <a
              className="credential-link d-flex flex-column"
              href="https://coursera.org/share/9cfda6115c0004465852d89e1c359538"
              target="_blank"
            >
              Credential Link
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">Cloud Computing </span>
            <span className="issuing-authority">Coursera </span>
          </div>{" "}
          <div>
            <a
              className="credential-link d-flex flex-column"
              href="https://coursera.org/share/637535831000a062ea8b0bc9aa8caa71"
              target="_blank"
            >
              Credential Link
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">Advanced Web Development</span>
            <span className="issuing-authority">Coding Ninjas </span>
          </div>{" "}
          <div>
            <a
              className="credential-link d-flex flex-column"
              href="https://ninjasfiles.s3.amazonaws.com/certificate140925248083444f1272c01cb39c40018832299.pdf"
              target="_blank"
            >
              Credential Link
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">Machine Learning </span>
            <span className="issuing-authority">Coursera </span>
          </div>{" "}
          <div>
            <a
              className="credential-link d-flex flex-column"
              href="https://coursera.org/share/4cd1896d002be28a679f37f318176cdd"
              target="_blank"
            >
              Credential Link
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="certificate-name">
              Design and Analysis of Algorithms{" "}
            </span>
            <span className="issuing-authority">Coding Ninjas </span>
          </div>{" "}
          <div>
            <a
              className="credential-link d-flex flex-column"
              href="https://ninjasfiles.s3.amazonaws.com/certificate220636841a07bb487d2ff33311cb4e20c537ba8.pdf"
              target="_blank"
            >
              Credential Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
