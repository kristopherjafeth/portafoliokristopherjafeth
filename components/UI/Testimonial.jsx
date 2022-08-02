import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

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
           <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
           <iframe src="//lightwidget.com/widgets/cdd12828e0de5d75a976f4cf215c495a.html" style={{ width: "100%", overflow: "hidden", }} scrolling="no" allowtransparency="true" className="lightwidget-widget" ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
