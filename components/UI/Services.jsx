import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Desarrollo de Apps" icon="ri-apps-line" />

                <ServicesItem title="Desarrollo Web" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Desarrollador Full Stack"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="¿Qué hago?" />
            <h3 className="mb-0 mt-4">Mis Servicios</h3>
            <p>
            Soy capaz de diseñar, crear y mantener sitios web y aplicaciones web desde un diseño de interfaz web.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
