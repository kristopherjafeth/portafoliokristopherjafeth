import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("Paginas Web");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Paginas Web") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Sistemas") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
    if (filter === "Tiendas") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
    if (filter === "Diseños") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" Mi Portafolio" />
            <h4 className="mt-4">Algunos de mis trabajos destacados</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Paginas Web" ? active : ""
                } secondary__btn `}
                onClick={() => setFilter("Paginas Web")}
              >
                Páginas Web
              </button>
              <button
                className={`${
                  filter === "Diseños" ? active : ""
                } secondary__btn `}
                onClick={() => setFilter("Diseños")}
              >
                Diseños
              </button>
              <button
                className={`${
                  filter === "Sistemas" ? active : ""
                } secondary__btn`}
                onClick={() => setFilter("Sistemas")}
              >
                Sistemas
              </button>
              <button
                className={`${
                  filter === "Tiendas" ? active : ""
                } secondary__btn `}
                onClick={() => setFilter("Tiendas")}
              >
                Tiendas
              </button>
             
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
