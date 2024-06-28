import './skill.scss'
import Aos from "aos";
export default function Skill() {

  Aos.init()
  return (
        <div className='skill-out' id='up-skill' data-aos="fade-down">
        <h1>SOFT SKILLS</h1>
        <ul className='list-skill'>
        <div>
          <h2>
            CODE REVIEW
          </h2>
          <p>Capaz de colaborar nas revisões de código para garantir a qualidade do software.</p>
        </div>

        <div>
          <h2>
            COLABORAÇÃO
          </h2>
          <p>Capaz de trabalhar em estreita colaboração com a equipe e outros stakeholders.</p>
        </div>
        <div>
          <h2>
            MANUTENÇÃO
          </h2>
          <p>Capaz de auxiliar na manutenção e melhoria contínua do código.</p>
        </div>
        <div>
          <h2>
          APRENDIZADO 
          </h2>
          <p>Capaz de se esforçar e continuar estudando novos assuntos continuamente.</p>
        </div>
        <div>
          <h2>
            TRABALHO EM EQUIPE
          </h2>
          <p>Capaz de colaborar com colegas de equipe em projetos. comunicar suas ideias e a ouvir os outros.</p>
        </div>
        <div>
          <h2>
            CLEAN CODE
          </h2>
          <p>Capaz de manter código limpo nas aplicações e código comentado.</p>
        </div>
        </ul>
    </div>
  )
}
