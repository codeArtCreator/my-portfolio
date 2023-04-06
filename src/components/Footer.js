import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import git from "../assets/img/git2.png";

import { Git } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h2 className="text-white">codeArt</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/codeArtCreator" target="_blank"><img src={git} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/rakesh-p-r-612339161/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/000_white_devil_000" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
