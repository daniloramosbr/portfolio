import './home.scss'
import Outset from '../outset/outset'
import Project from '../project/project'
import Contact from '../contact/contact'

export default function Home() {
  return (
   <div className='cont-home'>
     <Outset/>
    <Project/>
    <Contact/>
   </div>
  )
}
