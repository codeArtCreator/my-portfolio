import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [status, setStatus] = useState({});
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    let x = document.forms["myForm"]["user_name"].value;
    let y = document.forms["myForm"]["user_email"].value;
    let z = document.forms["myForm"]["message"].value;

    if (x == "") {
      alert("Name must be filled out");
      return false;
    }else if(y == ""){
      alert("Email must be filled out");
    }else if(z == ""){
      alert("Message must be filled out");
    }else{

        emailjs.sendForm('service_2iqw2va', 'template_2uznd5d', form.current, 'ZuWl2vIbIs5-DyUe4')
          .then((result) => {
              console.log(result.status);
              if (result.status == 200) {
                setStatus({ succes: true, message: 'Message sent successfully'});
              } else {
                setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
              }

          }, (error) => {
              console.log(error.text);
          });
      };
    }


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>

                <form ref={form} name="myForm" onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_name" placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" placeholder="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="mobile"   placeholder="Phone No."/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message" ></textarea>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "text-danger" : "text-white"}>{status.message}</p>
                        </Col>
                    }
                      <button type="submit" value="Send"><span>Send</span></button>

                    </Col>
                 
                    
                                    
                  </Row>
                    
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
