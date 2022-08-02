import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";



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
            

            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
