import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contacto" />
            <h3 className="mt-4 mb-4">Estoy en linea</h3>
            <p>
              Si estas interesado en una cotizacion de mis servicios no dudes en enviarme un correo electronico.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Maracaibo, Venezuela</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>hola@kristopherjafeth.com</p>
              </li>
          
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://www.youtube.com/channel/UCl9WDpIrUU7viTCBAWB1DQA">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://github.com/kristopherjafeth">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/kristopherjafeth/">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://instagram.com/soykristopherjafeth">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
