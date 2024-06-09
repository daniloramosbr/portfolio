/* eslint-disable no-unused-vars */
import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/about/about";
import Skill from "./components/skill/skill";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";

export default function App() {
  return (
    <main className="home">
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}
