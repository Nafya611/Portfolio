import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import usepopcorn from "../../Assets/Projects/usepopcorn.png";
import eatSplit from "../../Assets/Projects/eat_split.png";
import taskBoard from "../../Assets/Projects/taskBoard.png"


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
              ghLink="https://github.com/nafya611/eat_split"
              demoLink="https://eat-split-pink.vercel.app/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskBoard}
              isBlog={false}
              title="Taskboard"
              description="Its Vanila Javascript single page app that shows progress of tasks by categories Backlog,progress,complete,onhold. It also enable tasks to be draggable between those categories based on it's progres"              
              ghLink="https://github.com/nafya611/Task-Board"
              demoLink="https://task-board-flame.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskBoard}
              isBlog={false}
              title="Echobyte Fitness"
              descripttion="A responsive website for a fitness center that provides information about the gym, classes,services and contact information. The website is built using HTML, CSS, and JavaScript."              
              ghLink="https://github.com/nafya611/PRODIGY-WD-01"
              demoLink="https://prodigy-wd-01-git-master-nafyad-hailus-projects.vercel.app/"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
