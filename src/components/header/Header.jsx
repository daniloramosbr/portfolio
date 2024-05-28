import "./Header.scss";
import { useContext } from "react";
import { ContextJsx } from "../../context/context";

export default function Header() {
  
  const {ScrollOut, ScrollTec, ScrollProject, ScrollCont} = useContext(ContextJsx)

  return (
    <ul className="cont-header" id="up-header">
      <li>
        <button onClick={ScrollOut}>INICIO</button>
      </li>
      <li>
        <button onClick={ScrollTec}>TECNOLOGIAS</button>
      </li>
      <li>
        <button onClick={ScrollProject}>PROJETOS</button>
      </li>
      <li>
        <button onClick={ScrollCont}>CONTATO</button>
      </li>
    </ul>
  );
}
