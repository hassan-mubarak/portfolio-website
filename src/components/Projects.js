import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";

import projImg1 from "../assets/img/hassan 1.png";
import projImg2 from "../assets/img/hassan 2.png";
import projImg3 from "../assets/img/hassan 3.png";
import projImg4 from "../assets/img/hassan 4.png";
import projImg5 from "../assets/img/hassan 7.png";
import projImg6 from "../assets/img/Capture.PNG";


export const Projects = () => {
  const projects = [
  {
    title: "Project 1",
    description: "Design",
    imgUrl: projImg1,
  },
  {
    title: "Project 2",
    description: "Development",
    imgUrl: projImg2,
  },
  {
    title: "Project 3",
    description: "React",
    imgUrl: projImg3,
  },
  {
    title: "Project 4",
    description: "UI Design",
    imgUrl: projImg4,
  },
  {
    title: "Project 5",
    description: "Web App",
    imgUrl: projImg5,
  },
  {
    title: "Project 6",
    description: "Web App",
    imgUrl: projImg6,
  },

];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 d-flex justify-content-center gap-3"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <p>Simple text content for Tab 2.</p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>Simple text content for Tab 3.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};