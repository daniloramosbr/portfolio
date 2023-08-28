import "./project.css";

export default function Project() {

  return (
    <div className="cont-project" id="up-project">
      <h1>PROJETOS EM DESTAQUE</h1>
      <main>
        <ul>
          <ol>
            <div>
              <img src="project1.png" alt="loja" />
            </div>
            <hr />
            <div>
              <h3>Loja Virtual</h3>
            </div>
            <div>
              <p>
                Criada com React, contém Api, carrinho de compras, input de
                pesquisa, tema dark e outras funções.
              </p>
            </div>
            <a href="https://daniloramosbr.github.io/store/" target="blank"><button>VER PROJETO</button></a>
          </ol>
          <ol>
            <div>
              <img src="encurtaofc.png" alt="encurtador" />
            </div>
            <hr />
            <div>
              <h3>Encurtador de Link</h3>
            </div>
            <div>
              <p>
                Projeto criado com React, Api, contém página pra ver os links salvos
                com LocalStorage.
              </p>
            </div>
            <a href="https://daniloramosbr.github.io/encurtador/" target="blank"><button>VER PROJETO</button></a>
          </ol>
          <ol>
            <div>
              <img src="clima.png" alt="clima tempo" />
            </div>
            <hr />
            <div>
              <h3>Clima Tempo</h3>
            </div>
            <div>
              <p>
                Clima Tempo criado com JavaScript Puro, faz requesição á uma api, funcionando perfeitamente.
              </p>
            </div>
            <a href="https://daniloramosbr.github.io/climaa/" target="blank"><button>VER PROJETO</button></a>
          </ol>
        </ul>
       
      </main>
   
    </div>
  );
}
