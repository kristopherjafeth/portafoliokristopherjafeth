import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/portfolio.png"
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

          <p>
          Desarrollador Web Full Stack, Mis principales lenguajes/plataformas de programación son: Javascript, Node.js, React Js, PHP y Laravel.  👍
          </p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
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