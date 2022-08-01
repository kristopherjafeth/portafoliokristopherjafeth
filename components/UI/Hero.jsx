import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/kristopher.png";
import classes from "../../styles/hero.module.css";



const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <div id="particles-js">
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="¡Hola! Me llamo" />
              <h2 className="mt-3 mb-3">Kristopher Jafeth</h2>
              <h1>
              <span>
              Desarrollador Web Full Stack 
              </span>
              </h1>
              
              <p>
              Desarrollador con más de 4 años de experiencia, creando mi primera página web en el 2016, Actualmente CEO en Nova Technology, Soy Emprendedor en Maracaibo, Venezuela y mejor conocido como @kristopherjafeth en redes sociales.              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#contact">Contacto</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="500" height="500" />

             

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experiencia</h6>
                  <h5 className="mb-0">5 Años</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </section>
    
  );
};

export default Hero;
