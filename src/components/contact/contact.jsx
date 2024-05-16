import "./contact.scss";

export default function Contact() {
  return (
    <div className="cont-contact" id="up-contact">
     
      <ul className="cont-ul">
      <h1>CONTATE-ME</h1>
        <ol>
          <b>
            <ion-icon name="call-outline"></ion-icon> <span>Telefone:</span>
          </b>
          <span> 43 99172-7409</span>
        </ol>
        <ol>
          <b>
            <ion-icon name="mail-outline"></ion-icon> <span>E-mail:</span>
          </b>
          <span> daniloramoscr1905@gmail.com</span>
        </ol>
        <ol>
     <a href="https://www.linkedin.com/in/daniloramosbr" target="blank"><button> <div> <ion-icon name="logo-linkedin"></ion-icon></div> <span>Linkedin</span></button></a>
        </ol>
        <ol>
      <a href="https://github.com/daniloramosbr" target="blank"><button> <ion-icon name="logo-github"></ion-icon> <span>GitHub</span></button></a>
        </ol>
      </ul>
    </div>
  );
}
