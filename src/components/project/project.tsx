import "./project.scss";
import Aos from "aos";


export default function Project() {

  Aos.init()
  return (
      <main className="cont-project" id="up-project" data-aos="fade-right" data-aos-duration="1500">
        <h1>PROJETOS EM DESTAQUE</h1> 
        <ul>
          <ol>
            <img src="notas.png" alt="bloco" />
            <h3>BLOCO DE NOTAS</h3>
            <p>
              Projeto Full Stack com autenticação e login, criação de notas, edição, remoção e outras funcionalidades.
            </p>
            <a href="https://daniloramosbr.github.io/notes/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <img src="chat.png" alt="chat" />
       
            <h3>WEBCHAT</h3>
            <p>
              Projeto Full Stack que contém login e autenticação, aba de usuários, criação de
              mensagens e outras funções.
            </p>
            <a href="https://daniloramosbr.github.io/webchat/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <img src="reserva.png" alt="reserva" />
          
            <h3>RESERVA DE HORÁRIO</h3>
            <p>
              Projeto Full Stack de um sistema de reserva, contém login com o google, criação de
              reserva com apiRest e banco de dados.
            </p>
            <a href="https://daniloramosbr.github.io/reserva/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <img src="filmes.png" alt="filmes" />
           
            <h3>INFO FILMES</h3>
            <p>
              Projeto Front-End que mostra todas as informações de filmes, contém consumo de Api, aba de pesquisa etc...
            </p>
            <a href="https://daniloramosbr.github.io/filmes/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <img src="loja.png" alt="loja" />
           
            <h3>LOJA VIRTUAL</h3>
            <p>
            Projeto Full Stack que contém carrinho de compras, apiRest, aba de
              menu, aba de pesquisa e outras funcionalidades
            </p>
            <a href="https://daniloramosbr.github.io/store/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
          <ol>
            <img src="galeria.png" alt="galeria" />

            <h3>GALERIA DE FOTOS</h3>
            <p>
              Projeto Front End de uma galeria de fotos, contém requisição a ApiRest, aba de pesquisa, visualização de imagem
            </p>
            <a href="https://daniloramosbr.github.io/galeria/" target="blank">
              <button>VER PROJETO</button>
            </a>
          </ol>
        </ul>
      </main>
   
  );
}
