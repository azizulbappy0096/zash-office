// modules
import React from "react";
import { Col, Row } from "react-bootstrap";

// css
import "./Contact.css";

// components
import FormComponent from "./Form";
import { Facebook, Instagram, LinkedIn, Twitter } from "./SocialIcons";

function Contact() {
  return (
    <div className="container">
      <Row className="contact">
        <Col xs="12" lg="6" className="mb-4" style={{ zIndex: 1 }}>
          <div className="contact__title">
            <h6> Contact Us </h6>
            <h3> Say Hello </h3>
            <p>
              {" "}
              Your email address will not be published. We promise not to spam!{" "}
            </p>
          </div>
          <ul className="contact__list">
            <li className="d-flex gap-4 my-4">
              <div className="contact__info-icon">
                <img src="/images/contact/location.png" alt="map-icon" />
              </div>
              <div className="contact__info">
                <h4> Address </h4>
                <p>
                  {" "}
                  CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada{" "}
                </p>
              </div>
            </li>
            <li className="d-flex gap-4 my-4">
              <div className="contact__info-icon">
                <img src="/images/contact/mail.png" alt="map-icon" />
              </div>
              <div className="contact__info">
                <h4> Email </h4>
                <a href="mailto:zash@email.com">zash@email.com</a>
                <a href="mailto:zash@email.com">zash@email.com</a>
              </div>
            </li>
            <li className="d-flex gap-4 my-4">
              <div className="contact__info-icon">
                <img src="/images/contact/call.png" alt="map-icon" />
              </div>
              <div className="contact__info">
                <h4> Phone </h4>
                <a href="tel:44587154756">+44 587 154756</a>
                <a href="tel:44587154756">+44 587 154756</a>
              </div>
            </li>
          </ul>
          <ul className="contact__social list-unstyled d-flex gap-3">
            <li>
              {" "}
              <a href="/#">
                {" "}
                <Facebook />{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/#">
                {" "}
                <Twitter />{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/#">
                {" "}
                <LinkedIn />{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/#">
                {" "}
                <Instagram />{" "}
              </a>{" "}
            </li>
          </ul>
        </Col>
        <Col xs="12" lg="6" className="mb-4" style={{ zIndex: 1 }}>
          <div className="contact__title">
            <h6> Have a Question? </h6>
            <h3> Send a Message </h3>
            <p>
              {" "}
              Your email address will not be published. We promise not to spam!{" "}
            </p>
          </div>
          <FormComponent />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
