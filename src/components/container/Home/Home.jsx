import React from 'react'
import portfolio from "../../../assets/portfolio.png"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hola, Soy <span>Kristopher Jafeth</span> </h3>
        <span className='job'>Desarrollador Full Stack</span>
        <h6 className='text'>Desarrollador Web</h6>
        
        
        
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Conecta conmigo </motion.a>
        <div
          className="web"

        >
          Javascript
        </div>
        <div
          className="ui"
        >
          React Js
        </div>
        <div
          className="freelance"
        >
          Laravel
        </div>

        <div
          className="wordpress"
        >
          Wordpress
        </div>
      </div>
    </motion.div>
  )
}

export default Home