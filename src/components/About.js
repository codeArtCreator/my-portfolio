import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import MY_Photo from "../assets/img/myPhoto.jpg";

export const About = () => {
  return (
    <Container className="About-header" id="about">
        <Row className=" mt-3 pt-md-3">

            <Col lg="8">
                <h1 className="display-4 mb-4">About me</h1>
                <hr className="t_border my-4 ml-0 text-left" />
            </Col>
        </Row>
        <Row>
            <Col lg="2">
                <div class="card">
                    <img src={MY_Photo}></img>
                </div>
            </Col>
        </Row>

        <Row className="sec_sp">
            <Col lg="3">
                <h3 className="color_sec py-4">A bit about myself</h3>
            </Col>
            <Col lg="8" className="d-flex align-items-center">
                <div>
                <p>“As a versatile full stack web developer, I am passionate about creating end-to-end solutions that deliver exceptional user experiences. With a comprehensive skillset that spans both front-end and back-end technologies, I am well-equipped to tackle a wide range of web development projects. From designing and implementing responsive user interfaces using HTML5, CSS3, and JavaScript, to developing robust server-side applications using frameworks like Node.js and Django, I have a solid understanding of the entire web development stack. I am experienced in working with databases, APIs, and third-party integrations, and have a strong foundation in version control, testing, and deployment practices. My ability to seamlessly switch between different programming languages and frameworks allows me to adapt to the unique requirements of each project and deliver scalable and maintainable code. In addition to my technical prowess, I am a proactive problem solver, an excellent communicator, and a team player. I am passionate about staying up-to-date with the latest industry trends and continuously improving my skills. I am excited to bring my full stack expertise to your next web development project and create innovative solutions that exceed expectations.”</p>
                </div>
            </Col>
        </Row>  

        <Row className="sec_sp">
            <Col lg="3">
                <h3 className="color_sec py-1">Skills</h3>
            </Col>
            <Col lg="8">
                <div>
                <ul>
                    <li>JavaScript</li>
                        <p className="skill-p">Strong proficiency in JavaScript, including ES6+ features, and understanding of JavaScript runtime and event loop.</p>
                    <li>React</li>
                        <p className="skill-p">Experience with building modern, scalable, and reusable user interfaces using React library, including state management with Redux or MobX.</p>
                    <li>Node.js</li>
                        <p className="skill-p">Proficiency in building server-side applications using Node.js, including working with Express or other popular Node.js frameworks.</p>
                    <li>MongoDB</li>
                        <p className="skill-p">Strong understanding of NoSQL databases, particularly MongoDB, and experience with designing and implementing MongoDB schemas, querying, and data manipulation.</p>
                    <li>Express</li>
                        <p className="skill-p">Knowledge of Express, a popular web application framework for Node.js, and experience with building RESTful APIs using Express.</p>
                    <li>Front-end Technologies</li>
                        <p className="skill-p">Proficiency in front-end technologies such as HTML5, CSS3, and responsive design principles for building modern and visually appealing web applications.</p>
                    <li>RESTful API Design</li>
                        <p className="skill-p">Understanding of RESTful architecture and experience with designing and implementing RESTful APIs for client-server communication.</p>
                    <li>Version Control</li>
                        <p className="skill-p">Familiarity with version control systems such as Git for managing and collaborating on code changes.</p>
                    <li>Collaborative Skills</li>
                        <p className="skill-p">Strong teamwork and collaboration skills, including effective communication, problem-solving, and project management skills.</p>
                    <li>Continuous Learning</li>
                        <p className="skill-p">Eagerness to stay updated with the latest trends and best practices in MERN stack development, and willingness to learn new technologies and tools to improve skills and deliver high-quality solutions.</p>

                </ul>
                </div>
            </Col>
        </Row>
        <Row className="sec_sp">
            <Col lg="3">
                <h3 className="color_sec py-1">Services</h3>
            </Col>
            <Col lg="8">
                <div>
                <p>Web Development, API Development, Google Analytics, Theme Development, Ecommerce Website, Web Design</p>
                </div>
            </Col>
        </Row>
    </Container>
  );
};