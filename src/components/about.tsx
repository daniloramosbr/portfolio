import { Tooltip } from "@nextui-org/react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}
export default function About() {

  
  return (

     <span data-aos= "fade-up" className="cont-about cont-effect shadow__btn mb-72">
      <div className="cont-text">
        <h1 className="btn-shine">DANILO RAMOS</h1>
      </div>
      <h4>DESENVOLVEDOR FULL STACK</h4>
      <p className="about">
        Desenvolvedor full stack totalmente motivado com foco em
        <span> TypeScript, JavaScript, React, Node.js e PostgreSQL. </span> Com uma
        sólida compreensão dos princípios de programação sou capaz de criar
        Páginas responsivas, APIs RESTful e produzir código limpo.
      </p>
      <ul>
        <Tooltip placement="bottom" content="GitHub">
          <span>
            <a href="https://github.com/dancodebr" target="blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </span>
        </Tooltip>
        <Tooltip placement="bottom" content="Linkedin">
          <span>
            <a href="https://www.linkedin.com/in/daniloramosbr" target="blank">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </span>
        </Tooltip>
        <Tooltip placement="bottom" content="Email">
          <span>
            <a href="mailto:daniloramoscr1905@gmail.com" target="blank">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </span>
        </Tooltip>
      </ul>
      </span>
  );
}
