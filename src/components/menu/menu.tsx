/* eslint-disable no-unused-vars */
import { ContextJsx } from "../../context/context";
import "./menu.scss";
import { useContext } from "react";

export default function Menu() {

const {width, setWidth, ScrollOut, ScrollTec, ScrollProject, ScrollCont, ScrollSkill} = useContext(ContextJsx)

  return (
    <div className="cont-menu">
      
        <div className="menu">
        <button
          onClick={() => {
            setWidth("40%");
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
        <div className="butt">
          <button
            className="button-none"
            onClick={() => {
              setWidth("0%");
              
            }}
          >
            <ion-icon name="close"></ion-icon>
          </button>
        </div>
        <div>
          <button onClick={ScrollOut}>INÍCIO</button>
        </div>
        <div>
          <button onClick={ScrollTec}>TECNOLOGIAS</button>
        </div>
        <div>
          <button onClick={ScrollSkill}>SOFT SKILLS</button>
        </div>
        <div>
          <button onClick={ScrollProject}>PROJETOS</button>
        </div>
        <div>
          <button onClick={ScrollCont}>CONTATO</button>
        </div>
      </nav>
    </div>
  );
}
