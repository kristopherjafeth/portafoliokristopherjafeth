import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsGithub, BsMedium } from "react-icons/bs";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";

export const navLinks = ["home", "bio", "habilidades", "portafolio", "contacto"]

export const socialIcons = [

  <FaLinkedin />,
  <BsMedium />
]

export const bios = [

  {
    id: 1,
    icon: <FaPaperPlane />,
    key: "",
    value: "#"
  },
  {
    id: 2,
    icon: <BsGithub />,
    key: "",
    value: "https://github.com/kristopherjafeth"
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    key: "",
    value: "https://www.linkedin.com/in/kristopherjafeth/"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "2020",
    position: "Desarrollador Web Full Stack",
    company: "Construtecz"
  },
  {
    di: 2,
    year: "2023",
    position: "Desarrollador Web",
    company: "Kunaisoft"
  },
]
export const finishes = [
  {
    id: 1,
    number: '2+',
    itemName: "Años de Experiencia"
  },
  {
    id: 2,
    number: "15+",
    itemName: "Clientes Satisfechos"
  },
  {
    id: 3,
    number: "29+",
    itemName: "Sitios Web"
  },
  {
    id: 4,
    number: "35+",
    itemName: "Proyectos"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "web"
  },

]


export const workNavs = [
  "All", "Web",
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "En el planeta Tierra"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "info@kristopherjafeth.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "Privado"
  }
]
