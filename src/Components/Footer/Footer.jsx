import React from "react";
import { Navbar, Container, Row } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <Navbar className="footerNav" collapseOnSelect>
        <Container className="justify-content-center" expand="lg">
          <a
            href="https://www.linkedin.com/in/bilal-avvad/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="3rem" color="#DFDDF1" />
          </a>
          <a
            href="https://github.com/awadbilal"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="3rem" color="#DFDDF1" className="ms-4 me-2" />
          </a>
          <a href="mailto:awadbilal99@gmail.com" rel="noreferrer">
            <FaGoogle size="3rem" color="#DFDDF1" className="ms-2 me-4" />
          </a>
          <a
            href="https://www.instagram.com/awadbilal/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size="3rem" color="#DFDDF1" />
          </a>
          <br />
        </Container>
      </Navbar>
      <Row>
        <h5>Copyright ©2022 All rights reserved</h5>
      </Row>
    </div>
  );
}

export default Footer;
