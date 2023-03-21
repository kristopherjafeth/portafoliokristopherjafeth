import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import portfolio from "../../../assets/kristopher.jpg"
const About = () => {


  return (
    <div className="container " id='bio'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>¿Quien soy?</span>
        <h1>Un poco sobre mí</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <h4>
          Desarrollador Web Full Stack, Mis principales lenguajes/plataformas de programación son: Javascript, Node.js, React Js, PHP y Laravel.  👍
          </h4>
          <br/>
         
          <motion.a href='#' download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Solicitar CV
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}

export default About