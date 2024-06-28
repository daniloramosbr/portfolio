import "./contact.scss";
import Aos from "aos";

export default function Contact() {

  Aos.init()
  
  return (
   
      <ul className="cont-ul" id="up-contact" data-aos="fade-left"  data-aos-duration="1500">
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
          <a href="https://drive.google.com/file/d/17i_BH2k2XJhBCA1tpnYHAI8j3atDMf6_/view?usp=sharing" target="blank">
          <ion-icon name="albums-outline"></ion-icon> <span>CURRÍCULO</span>
          </a>
        </ol>
      </ul>
   
  );
}
