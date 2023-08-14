/* eslint-disable no-undef */
import "./outset.css";
import Menu from "./menu/menu";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


export default function Outset() {

  useEffect(()=>{
    function Reveal() {
      ScrollReveal({ reset: true });
    ScrollReveal().reveal('.cont-outset main',{
      delay: 300,
      rotate: {
        x: 100,
       
      }
    })
    ScrollReveal().reveal('.cont-project main',{
      delay: 300,
      rotate: {
        x: 100,
      
      
      }
    })
    ScrollReveal().reveal('.cont-contact ul',{
      delay: 300,
      rotate: {
        x: 100,
      
       
      }
    })



    }
    Reveal()
  },[])


  return (
    <div className="cont-outset" id="up-outset">
      <Menu />
      <main>
        <div style={{ color: "white" }} className="text-out">
          <h1>DANILO RAMOS</h1>
          <h4>Desenvolvedor Front End</h4>
          <div>
            Crio aplicações web usando React e JavaScript, estudando para
            cada vez mais aperfeiçoar minhas habilidades, pois acho que com
            esforço todos nós podemos chegar ao nosso objetivo. No futuro
            planejo me aprofundar também no back end para me tornar um
            desenvolvedor mais completo.
          </div>
        </div>
        <ul className="icons">
          <ol>
            <ion-icon name="logo-github"></ion-icon>
          </ol>
          <ol>
            <ion-icon name="logo-html5"></ion-icon>
          </ol>
          <ol>
            <ion-icon name="logo-css3"></ion-icon>
          </ol>
          <ol>
            <ion-icon name="logo-javascript"></ion-icon>
          </ol>
          <ol>
            <ion-icon name="logo-react"></ion-icon>
          </ol>
          <ol>
            <ion-icon name="logo-nodejs"></ion-icon>
          </ol>
        </ul>
      </main>
      <div className="photo-pro">
        <img src="profileofc.png" alt="perfil" id="photo" />
      </div>
    </div>
  );
}
