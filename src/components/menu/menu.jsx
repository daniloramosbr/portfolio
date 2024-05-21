/* eslint-disable no-unused-vars */
import "./menu.scss";
import { useContext, useState } from "react";

export default function Menu() {

  const [width, setWidth] = useState("0%");

  const ScrollOut = () => {
    const element = document.getElementById('up-outset');
    element.scrollIntoView({ behavior: 'smooth' });
    setWidth("0%")
  };
  const ScrollTec= () => {
    const element = document.getElementById('up-skill');
    element.scrollIntoView({ behavior: 'smooth' });
    setWidth("0%")
  };

  const ScrollProject = () => {
    const element = document.getElementById('up-project');
    element.scrollIntoView({ behavior: 'smooth' });
    setWidth("0%")
  };

  const ScrollCont= () => {
    const element = document.getElementById('up-contact');
    element.scrollIntoView({ behavior: 'smooth' });
    setWidth("0%")
  };

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
          <button onClick={ScrollProject}>PROJETOS</button>
        </div>
        <div>
          <button onClick={ScrollCont}>CONTATO</button>
        </div>
      </nav>
    </div>
  );
}
