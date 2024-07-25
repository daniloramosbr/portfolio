
import { Link } from "react-scroll";

export default function Header() {
  return (
    <ul data-aos="fade-left" id="header" className="cont-header mb-48 ">

    <li>
    <button className="header-one">
      <span className="header-two"></span>
      <Link to="tecno" smooth={true} duration={800} className="header-three">
        TECNOLOGIAS
      </Link>
    </button>
  </li>

      <li>
      <button className="header-one">
      <span className="header-two"></span>
      <Link to="skills" smooth={true} duration={800} className="header-three">
          SOFT SKILLS
        </Link>
      </button>
      </li>
      <li>
      <button className="header-one">
      <span className="header-two"></span>
      <Link to="project" smooth={true} duration={800} className="header-three">
          PROJETOS
        </Link>
      </button>
      </li>
      <li>
      <button className="header-one">
      <span className="header-two"></span>
      <Link to="contact" smooth={true} duration={800} className="header-three">
          CONTATO
        </Link>
      </button>
      </li>
    </ul>
  )
}
