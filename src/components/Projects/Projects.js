import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import Weather from "../../Assets/Projects/WeatherApp.png";
import canva from "../../Assets/Projects/courtcanva.png";
import tasTest from "../../Assets/Projects/TASTest.png";
import worldClock from "../../Assets/Projects/world_clock.png"

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
              imgPath={canva}
              isBlog={false}
              title="Court Canva"
              description="CourtCanva build with react.js, Next.js, Node.js and Chakra. Have features which allows user for choosing from various templates or fully customize their basketball court."
              ghLink="https://github.com/xunli253/cc-app"
              demoLink="https://www.courtcanva.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasTest}
              isBlog={false}
              title="TAS Test"
              description="The purpose of the project is to investigate whether a new computer test that has been developed at the University of Tasmania could potentially predict cognitive decline and subsequent risk of dementia. The new test is called ‘TAS Test’ and it assesses hand and other body movements (motor control) and thinking processes (cognition). It build with Vue, Sass, Typescript, eslint, and prettier. I also implemented responsive design principles to ensure the TAS Test was accessible on a wide range of devices, including mobile phones and tablets, using Vue.js and its built-in mobile-first design features."
              ghLink="https://github.com/xunli253/tastest-candidate-web"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="My Blog"
              description="My Blog is a web application that records my developer blog posts and experiences. It build with Next.js, Tailwind Css, Dark mode support, Vercel. "
              ghLink="https://github.com/xunli253/My-Blog"
              demoLink="https://velvety-sherbet-e82f3d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="Weather app is a simple-styled website that allows users to quickly look up global weather conditions. It build with react.js, Google Maps Embed API."
              ghLink="https://github.com/xunli253/weather-app-react"
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldClock}
              isBlog={false}
              title="World Clock"
              description="World Clock is a web application that display time in 4 different time zones. It build with react.js, Css "
              ghLink="https://github.com/xunli253/world_clock"
              demoLink="https://worldclockxun.netlify.app/"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
