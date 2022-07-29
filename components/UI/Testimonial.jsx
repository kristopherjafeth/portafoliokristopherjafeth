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
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonios" />
            <h4 className="mt-4 mb-5">¿Qué dicen mis clientes?</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Kenneth Quintero</h6>
                    <h6>Presidente BERKEN</h6>
                  </div>
                </div>

                <p>
                  Excelente servicio, la página web de mi empresa es rápida y esta de #1 en Google!
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Jesus Paz</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Adam Smith</h6>
                    <h6>Financial Accountant</h6>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
