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
                Projeto criado com React, contém página pra ver os links salvos
                com LocalStorage.
              </p>
            </div>
            <a href="https://daniloramosbr.github.io/encurtador/" target="blank"><button>VER PROJETO</button></a>
          </ol>
          <ol>
            <div>
              <img src="calcc.png" alt="calculadora" />
            </div>
            <hr />
            <div>
              <h3>Calculadora</h3>
            </div>
            <div>
              <p>
                Calculadora  criada com JavaScript Puro, faz soma, multiplicação,
                divisão e subtração.
              </p>
            </div>
            <a href="https://daniloramosbr.github.io/calculadora-h.c.j/" target="blank"><button>VER PROJETO</button></a>
          </ol>
        </ul>
       
      </main>
   
    </div>
  );
}
