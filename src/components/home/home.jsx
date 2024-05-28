import './home.scss'
import About from '../about/about'
import Project from '../project/project'
import Contact from '../contact/contact'
import Skill from '../skill/skill'
import Header from '../header/Header'

export default function Home() {
  return (
   <div className='cont-home'>
    <Header/>
     <About/>
     <Skill/>
    <Project/>
    <Contact/>
   </div>
  )
}
