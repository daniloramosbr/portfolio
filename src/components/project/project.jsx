import "./project.css";

export default function Project() {

  return (
    <div className="cont-project" id="up-project">
      <h1>PROJETOS EM DESTAQUE</h1>
      <main>
        <ul>
          <ol>
            <div>
              <img src="webchat.png" alt="loja" />
            </div>
            <hr />
            <div>
              <h3>WebChat</h3>
            </div>
            <div>
              <p>
                Projeto full stack de um chat feito com React, Node, MongoDb. contém criação de conta, mensagem, etc...
              </p>
            </div>
            <a href="https://daniloramosbr.github.io/webchat/" target="blank"><button>VER PROJETO</button></a>
          </ol>
          <ol>
            <div>
              <img src="bloco.png" alt="encurtador" />
            </div>
            <hr />
            <div>
              <h3>Bloco de Notas</h3>
            </div>
            <div>
              <p>
                Projeto Full Stack, criado com React e Node, contém autenticação e login, criação, edição e deleção de notas.
              </p>
            </div>
            <a href="https://daniloramosbr.github.io/notes/" target="blank"><button>VER PROJETO</button></a>
          </ol>
          <ol>
            <div>
              <img src="filmes.png" alt="Filmes" />
            </div>
            <hr />
            <div>
              <h3>Info Filmes</h3>
            </div>
            <div>
              <p>
                Criado com React, Api, JavaScript e outras tecnologias, mostra informações de filmes.
              </p>
            </div>
            <a href="https://daniloramosbr.github.io/filmes/" target="blank"><button>VER PROJETO</button></a>
          </ol>
        </ul>
       
      </main>
   
    </div>
  );
}
