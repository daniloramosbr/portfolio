import './skill.scss'
import Aos from "aos";
export default function Skill() {

  Aos.init()
  return (
        <div className='skill-out' id='up-skill' data-aos="fade-down">
        <h1>TECNOLOGIAS</h1>
        <ul className='list-skill'>
         <li>
          <img src="tsc.png" alt="typescript" />
          <p>TYPESCRIPT</p>
         </li>
         <li>
          <img src="javascript.svg" alt="javascript" />
          <p>JAVASCRIPT</p>
         </li>
         <li>
          <img src="react.png" alt="react" />
          <p>REACT</p>
         </li>
         <li>
          <img src="nextjs.png" alt="next" />
          <p>NEXT JS</p>
         </li>
         <li>
          <img src="node.svg" alt="node" />
          <p>NODE JS</p>
         </li>
         <li>
          <img src="express.png" alt="express" />
          <p>EXPRESS JS</p>
         </li>
         <li>
          <img src="postgre.png" alt="postgre" />
          <p>POSTGRE
            SQL
          </p>
         </li>
         <li>
          <img src="mongo.svg" alt="mongodb" />
          <p>MONGODB</p>
         </li>
         <li>
          <img src="typeorm.png" alt="typeorm" />
          <p>TYPEORM</p>
         </li>
         <li>
          <img src="Jest.png" alt="jest" />
          <p>JEST</p>
         </li>
         <li>
          <img src="tailwind.png" alt="tailwind" />
          <p>TAILWIND</p>
         </li>
         <li>
          <img src="sass.svg" alt="sass" />
          <p>SASS</p>
         </li>
         <li>
          <img src="nextui.png" alt="nextui" />
          <p>NEXT UI</p>
         </li>
         <li>
          <img src="css.svg" alt="css" />
          <p>CSS3</p>
         </li>
         <li>
          <img src="html.svg" alt="html" />
          <p>HTML5</p>
         </li>
         <li>
          <img src="git.svg" alt="git" />
          <p>GIT/GITHUB</p>
         </li>
        </ul>
    </div>
  )
}
