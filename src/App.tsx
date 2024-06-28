/* eslint-disable no-unused-vars */
import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/about/about";
import Tech from "./components/tech/tech";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Skill from "./components/skill/skill";

export default function App() {
  return (
    <main className="home">
      <Header />
      <About />
      <Tech/>
      <Skill/>
      <Project />
      <Contact />
    </main>
  );
}
