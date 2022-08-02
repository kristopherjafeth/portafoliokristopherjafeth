import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";
import Instagram from "./script"

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          

          <Col lg="12" md="12">
            <SectionSubtitle subtitle="Redes" />
            <h4 className="mt-4 mb-5">Instagram</h4>
            <Instagram />
            <div className="elfsight-app-3b4a04a4-5b77-401d-b4a7-bcc4fe202869"></div>          
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
