import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard2";
import colorSharp2 from "../assets/img/color-sharp2.png";
import wellfound from "../assets/img/wellfoundgif.gif";
import w3school from "../assets/img/w3school.jpg";
import upspash from "../assets/img/upspash.gif";
import techwama from "../assets/img/techwama.png";


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      imgUrl: wellfound,
      gitlink:'https://github.com/codeArtCreator/wellFound',
    },
    {
      imgUrl: w3school,
      gitlink:'https://github.com/codeArtCreator/w3school',
    },
    {
      imgUrl: upspash,
      gitlink:'https://github.com/codeArtCreator/upsplashnav',
    }
  ];

  const projects2 = [
    {
      imgUrl: techwama,
      gitlink:'https://github.com/codeArtCreator/TechWama',
    },
  ];


  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my web developer project page! As an experienced web developer with a passion for creating innovative and user-friendly websites, I take pride in showcasing my skills and projects in this portfolio. With a strong background in front-end technologies such as HTML5, CSS3, and JavaScript, as well as expertise in back-end technologies like PHP and CMS platforms like WordPress, I have successfully delivered a wide range of projects for clients in various industries. From responsive e-commerce websites to interactive web applications, my projects demonstrate my ability to create modern, visually appealing, and high-performing websites. Through effective problem-solving, efficient coding practices, and attention to detail, I am dedicated to delivering exceptional results that exceed client expectations. Feel free to explore my portfolio below to see examples of my work and learn more about my skills and experience. If you have any inquiries or project opportunities, I would be happy to connect with you. Let's bring your web development ideas to life!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Completed</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Ongoing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Ongoing</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
