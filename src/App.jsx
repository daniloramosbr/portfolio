/* eslint-disable no-unused-vars */
import './App.css'
import Outset from './components/outset/outset'
import Project from './components/project/project'
import Contact from './components/contact/contact'
import Arrow from './components/arrow/arrow'

export default function App() {
  return (
    <div>  
      <Outset/>
      <Arrow/>
      <Project/>
      <Arrow/>
      <Contact/>
    </div>
  )
}
