import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import usepopcorn from "../../Assets/Projects/usepopcorn.png";
import eatSplit from "../../Assets/Projects/eat_split.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usepopcorn}
              isBlog={false}
              title="UsePopcorn"
              description="usePopcorn is a react application that provides users with a way to explore movies, rate them, and manage their watched movies list. By leveraging the OMDB API (Open Movie Database), the app gains access to an extensive movie database, allowing users to quickly and easily find movie information, including genre, cast, director, ratings, and much more."              
              ghLink="https://github.com/nafya611/usepopcorn"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eatSplit}
              isBlog={false}
              title="Eat and Split"
              description="Eat and Split is a simple React page that helps you calculate the fair split of a restaurant bill among friends. It allows you to enter the total bill amount, and then calculates the equal share for each person, displays the result."              
              ghLink="https://github.com/nafya611/eat-split"
              
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
