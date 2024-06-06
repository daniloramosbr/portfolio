import "./contact.scss";

export default function Contact() {
  
  return (
    <div className="cont-contact" id="up-contact">
      <ul className="cont-ul">
        <h1>CONTATE-ME</h1>
        <ol>
          <a href="mailto:daniloramoscr1905@gmail.com" target="blank">
            <ion-icon name="mail-outline"></ion-icon> <span>EMAIL</span>
          </a>
        </ol>
        <ol>
          <a href="https://www.linkedin.com/in/daniloramosbr" target="blank">
          <ion-icon name="logo-linkedin"></ion-icon><span>LINKEDIN</span>
          </a>
        </ol>
        <ol>
          <a href="https://github.com/daniloramosbr" target="blank">
          <ion-icon name="logo-github"></ion-icon> <span>GITHUB</span>
          </a>
        </ol>
        <ol>
          <a href="https://drive.google.com/file/d/1VVwXB4k5ogtechs1HSzfNBotqtdlLqSj/view?usp=sharing" target="blank">
          <ion-icon name="albums-outline"></ion-icon> <span>CURRÍCULO</span>
          </a>
        </ol>
      </ul>
    </div>
  );
}
