import "./contact.css";

export default function Contact() {
  return (
    <div className="cont-contact" id="up-contact">
      <h1>CONTATE-ME</h1>
      <ul className="cont-ul">
        <ol>
          <b>
            <ion-icon name="call-outline"></ion-icon> <span>Telefone:</span>
          </b>
          <span>43 99172-7409</span>
        </ol>
        <ol>
          <b>
            <ion-icon name="mail-outline"></ion-icon> <span>E-mail:</span>
          </b>
          <span>daniloramoscr1905@gmail.com</span>
        </ol>
        <ol>
          <b>
            <ion-icon name="logo-linkedin"></ion-icon> <span>Linkedin:</span>
          </b>
          <span>@daniloramosbr</span>
        </ol>
      </ul>
    </div>
  );
}
