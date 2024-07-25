import Header from "@/components/header";
import About from "@/components/about";
import Tecno from "@/components/tecno";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Up from "@/components/up";
import Menu from "@/components/menu";
import Projects from "@/components/projects";

export default function Home() {

  return (
    <>
      <Menu/>
      <Header />
      <About />
      <Tecno />
      <Skills />
      <Projects/>
      <Contact />
      <Up/>
    </>
  );
}
