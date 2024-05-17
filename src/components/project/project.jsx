import "./project.scss";

export default function Project() {
  return (
    <div className="cont-project" id="up-project">
      <main>
        <h1>PROJETOS EM DESTAQUE</h1>
        <ul>
          <ol>
            <div>
              <img src="reserva.png" alt="loja" />
            </div>
            <hr />
            <div>
              <h3>Reserva de Horário</h3>
            </div>
            <p>
              Um sistema de reserva, contém login com o google, criação de reserva com apiRest e banco de dados
            </p>
            <a href="https://daniloramosbr.github.io/reserva/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <div>
              <img src="webchat.png" alt="encurtador" />
            </div>
            <hr />
            <div>
              <h3>WebChat</h3>
            </div>
              <p>
              Um Chat para web/desktop, contém login e autenticação, criação de mensagens e outras funções
              </p>
            <a href="https://daniloramosbr.github.io/webchat/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <div>
              <img src="loja.png" alt="Filmes" />
            </div>
            <hr />
            <div>
              <h3>Loja Virtual</h3>
            </div>
              <p>
              uma loja virtual que contém carrinho de compras, apiRest, aba de menu e outras funções
              </p>
            <a href="https://daniloramosbr.github.io/loja/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
        </ul>
      </main>
    </div>
  );
}
