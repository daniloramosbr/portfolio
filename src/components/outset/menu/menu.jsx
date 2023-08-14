/* eslint-disable no-unused-vars */
import "./menu.css";
import { useContext, useState } from "react";
import { ContextJsx } from "../../context/context";

export default function Menu() {
  const [width, setWidth] = useState("0%");
  const [heigth, setHeigth] = useState("0px");
  const { ScrollOut } = useContext(ContextJsx);
  const { ScrollProject } = useContext(ContextJsx);
  const { ScrollCont } = useContext(ContextJsx);

  return (
    <div className="cont-menu">
      <nav
        className="nav"
        style={{
          width: width,
          height: heigth,
        }}
      >
        <div className="butt">
          <button
            className="button-none"
            onClick={() => {
              setWidth("0%");
              setHeigth("0px");
            }}
          >
            <ion-icon name="close"></ion-icon>
          </button>
        </div>
        <div>
          <button onClick={ScrollOut}>INÍCIO</button>
        </div>
        <div>
          <button onClick={ScrollProject}>PROJETOS</button>
        </div>
        <div>
          <button onClick={ScrollCont}>CONTATO</button>
        </div>
      </nav>
      <div className="menu">
        <button
          onClick={() => {
            setWidth("100%");
            setHeigth("100vh");
          }}
        >
          <ion-icon name="menu"></ion-icon>
        </button>
      </div>
    </div>
  );
}
