import "./Header.scss";
import { useContext } from "react";
import { ContextJsx } from "../../context/context";
import Menu from "../menu/menu";

export default function Header() {
  
  const {ScrollOut, ScrollTec, ScrollProject, ScrollCont, ScrollSkill} = useContext(ContextJsx)

  return (
    <ul className="cont-header" id="up-header">
       <Menu/>
      <li>
        <button onClick={ScrollOut}>INICIO</button>
      </li>
      <li>
        <button onClick={ScrollTec}>TECNOLOGIAS</button>
      </li>
      <li>
        <button onClick={ScrollSkill}>SOFT SKILLS</button>
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
