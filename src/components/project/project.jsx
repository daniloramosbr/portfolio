import "./project.scss";


export default function Project() {
  return (
    <div className="cont-project" id="up-project">
      <main>
        <h1>PROJETOS EM DESTAQUE</h1>
        <ul>
        <ol>
            <img src="chat.png" alt="chat" />
            <hr />
            <h3>WEBCHAT</h3>
            <p>
              Um Chat para web, contém login e autenticação, aba de usuários, criação de
              mensagens e outras funções.
            </p>
            <a href="https://daniloramosbr.github.io/webchat/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <img src="notas.png" alt="bloco" />
            <hr />
            <h3>BLOCO DE NOTAS</h3>
            <p>
              um bloco de notas com autenticação e login, criação de notas, edição, remoção e outras funcionalidades.
            </p>
            <a href="https://daniloramosbr.github.io/notes/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <img src="reserva.png" alt="reserva" />
            <hr />
            <h3>RESERVA DE HORÁRIO</h3>
            <p>
              Um sistema de reserva, contém login com o google, criação de
              reserva com apiRest e banco de dados.
            </p>
            <a href="https://daniloramosbr.github.io/reserva/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <img src="filmes.png" alt="filmes" />
            <hr />
            <h3>INFO FILMES</h3>
            <p>
              um projeto que mostra todas as informações de filmes, contém consumo de Api, aba de pesquisa etc...
            </p>
            <a href="https://daniloramosbr.github.io/filmes/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <img src="loja.png" alt="loja" />
            <hr />
            <h3>LOJA VIRTUAL</h3>
            <p>
            uma loja virtual que contém carrinho de compras, apiRest, aba de
              menu, aba de pesquisa e outras funcionalidades
            </p>
            <a href="https://daniloramosbr.github.io/store/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <img src="clima.png" alt="clima" />
            <hr />
            <h3>CLIMA TEMPO</h3>
            <p>
              Um projeto de clima tempo para ver a temperatura e clima de determinada cidade
            </p>
            <a href="https://daniloramosbr.github.io/climaa/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
        </ul>
      </main>
    </div>
  );
}
