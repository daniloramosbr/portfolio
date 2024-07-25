import Carrousel from "./Carrousel";
export default function Projects() {
  return (
    <span data-aos= "fade-up"
      id="project"
      className="block cont-project cont-effect shadow__btn flex-col text-center"
    >
      <h1 className="flex p-5 justify-center">PROJETOS EM DESTAQUE</h1>

      <Carrousel />
    </span>
  );
}
