import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";
import Logo from "./Logo";



const NAV__LINK = [
  {
    path: "/",
    display: "Inicio",
  },
  {
    path: "#about",
    display: "Sobre mi",
  },
  {
    path: "#services",
    display: "Servicios",
  },
  {
    path: "#portfolio",
    display: "Portafolio",
  },
  {
    path: "#contact",
    display: "Contacto",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (

    <header className={`${classes.header}`} ref={headerRef}>
      <meta name="description" content="Desarrollador con más de 4 años de experiencia, creando mi primera página web en el 2016, Actualmente CEO en Nova Technology, Soy Emprendedor en Maracaibo, Venezuela y mejor conocido como @kristopherjafeth en redes sociales."></meta>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
          <Logo height="90px" />
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              <div className={`${classes.nav__right}`}>
              <Link href="https://github.com/kristopherjafeth">
                <i className="ri-github-line"></i>
              </Link>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
