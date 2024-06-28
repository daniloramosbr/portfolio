/* eslint-disable no-undef */
import "./about.scss";
import Aos from "aos";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}

export default function Outset() {

Aos.init()


  return (
        <div style={{ color: "white" }} data-aos="fade-up" className="text-out" >
        
          <h1>DANILO RAMOS</h1>
          <h4>DESENVOLVEDOR FULL STACK</h4>
          <p className="about">
            Desenvolvedor full stack totalmente motivado com experiência em <span>TypeScript, React, Next.js, Node.js e PostgreSQL. </span> Com
            uma sólida compreensão dos princípios de programação sou capaz de
            criar Páginas responsivas, APIs RESTful e produzir código limpo.
          </p>
          <ul className="icons">
            <span>
              <a href="https://github.com/daniloramosbr" target="blank"><ion-icon name="logo-github"></ion-icon> </a>
          </span>
            <span>
              <a href="https://www.linkedin.com/in/daniloramosbr" target="blank"><ion-icon name="logo-linkedin"></ion-icon></a>
            </span>
            <span>
              <a href="mailto:daniloramoscr1905@gmail.com" target="blank"><ion-icon name="mail-outline"></ion-icon> </a>
            </span>
          </ul>
    </div>
  );
}
