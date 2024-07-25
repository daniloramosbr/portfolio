
import { useContext } from "react";
import { ContextTsx } from "@/context/context";
import { Link } from "react-scroll";

export default function Menu() {

const {width, setWidth} = useContext(ContextTsx)

const exitMenu = () => {
  setWidth("0%");
}

  return (
    <div className="cont-menu">
      
        <div className="menu">
        <button
          onClick={() => {
            setWidth("30%");
          }}
        >
          <ion-icon name="menu"></ion-icon>
        </button>
      </div>
      <nav
        className="nav"
        style={{
          width: width
        }}
      >
        <li onClick={() => {
              setWidth("0%");
              
            }}>
        <button className="menu-one max-w-64" >
      <span className="menu-two"></span>
        <span className="menu-three  max-w-64">
          FECHAR
        </span>
      </button>

        </li>
        <li>
      <button className="menu-one">
      <span className="menu-two"></span>
        <Link to="header" smooth={true} duration={800} className="menu-three" onClick={exitMenu} >
          INICIO
        </Link>
      </button>
      </li>
       <li>
      <button className="menu-one">
      <span className="menu-two"></span>
        <Link to="tecno" smooth={true} duration={800} className="menu-three" onClick={exitMenu}>
          TECNOLOGIAS
        </Link>
      </button>
      </li>
      <li>
      <button className="menu-one">
      <span className="menu-two"></span>
      <Link to="skills" smooth={true} duration={800} className="menu-three" onClick={exitMenu}>
          SOFT SKILLS
        </Link>
      </button>
      </li>
      <li>
      <button className="menu-one">
      <span className="menu-two"></span>
      <Link to="project" smooth={true} duration={800} className="menu-three" onClick={exitMenu}>
          PROJETOS
        </Link>
      </button>
      </li>
      <li>
      <button className="menu-one">
      <span className="menu-two"></span>
      <Link to="contact" smooth={true} duration={800} className="menu-three" onClick={exitMenu}>
          CONTATO
        </Link>
      </button>
      </li>
      </nav>
    </div>
  );
}
