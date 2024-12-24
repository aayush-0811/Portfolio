import React from "react";
import "./work.css";
export default function Work() {
  return (
    <>
      <div className="work-inside-new mx-2 my-3">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Tech Mahindra</span>
            <spa className="year-passedout">Jan 2024-July 2024</spa>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Java Developer Trainee</span>
          <span className="description-position">
            <ul>
              <span>
                <b>
                  Tech used: Angular, HTML, CSS, TypeScript, Spring Boot, Java,
                  Hibernate/JPA, MySQL, RESTful APIs, Git, Agile Methodologies
                </b>
              </span>
              <li>
                Built ”MediHub,” a fully functional online platform to
                efficiently manage medical supplies, orders, and transactions,
                tailored to address the complexities of the healthcare supply
                chain.{" "}
              </li>
              <li>
                Developed a dynamic and responsive user interface using Angular,
                ensuring a seamless user experience with features like order
                tracking and transaction management.
              </li>
              <li>
                Leveraged the Spring Boot framework to build a robust and
                scalable backend, ensuring efficient data processing and
                seamless integration of services. Collaborated effectively
                within a team, following Agile methodologies to deliver project
                milestones efficiently and maintain consistent communication.
              </li>
              <li>
                Assisted in deploying the application to a staging environment,
                monitoring performance, and resolving any production-level
                issues to ensure system reliability.
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div className="work-inside-new mx-2 my-3">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Verzeo</span>
            <spa className="year-passedout">June 2023-Aug 2023</spa>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Full Stack Intern</span>
          <span className="description-position">
            <ul>
              <span>
                <b>
                  React.js, HTML, CSS, JavaScript, Node.js, Express.js Database:
                  MongoDB, RESTful APIs, JSON Web Tokens (JWT), bcrypt (for
                  secure user authentication)
                </b>
              </span>
              <li>
                Designed and developed a blood donation platform from scratch,
                incorporating user authentication, real-time blood type
                matching, and location-based services using modern frameworks
                like React.js, Node.js, and MongoDB.
              </li>
              <li>
                Built a secure, scalable backend architecture with RESTful APIs
                and integrated advanced features like donation history tracking
                and geolocation-based search to enhance platform usability.
              </li>
              <li>
                Delivered a cloud-deployed, responsive web application,
                rigorously tested for functionality and performance using tools
                like Postman and Git, ensuring a seamless user experience.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
