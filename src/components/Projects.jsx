import React from "react";
import coolors from "../assets/coolors.png";
import countries from "../assets/countries.png";
import landingPageSports from "../assets/landingPageSports.jpg";
import jogoDoGalo from "../assets/jogoDoGalo.png";
import jamboree from "../assets/jamboree.png";
import tasklist from "../assets/tasklist.png";
import joker from "../assets/joker.png";
import spacex from "../assets/spacex.jpg";
import { ProjectComponent } from "./ProjectComponent";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-corFundo1 w-full pt-[10vh] pb-3 flex flex-col items-center gap-5 min-[2560px]:pb-3"
    >
      <h2 className=" text-blue-500 font-bold text-[2rem] 2xl:mb-[5vh]">
        PROJECTS
      </h2>
      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <ProjectComponent
          src={coolors}
          alt={"coolors cunha"}
          title={"Projeto front-end Cores Aleatórias:"}
          description={
            "2 tipos de forma para alterar as cores (tecla espaço e clique no botão), bloquear uma ou mais cores para que essas não alterem, copiar o código hexadecimal da cor."
          }
          site={
            "https://bytes4future-coolors-q1ds0hcii-claudiocunhadev.vercel.app/"
          }
          github={"https://github.com/ClaudioCunhaDev/bytes4futureCoolors"}
        />
        <ProjectComponent
          src={countries}
          alt={"fetch countries cunha"}
          title={"Projeto front-end países e localização:"}
          description={
            "requisição a uma API publica com localização de cada país"
          }
          site={"https://fetch-countries-mu.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/fetchCountries"}
        />
        <ProjectComponent
          src={jogoDoGalo}
          alt={"jogo do galo"}
          title={"Projeto front-end Jogo do Galo:"}
          description={
            "Lógica do jogo do galo, um gatinho e uma cama ao invés de X e O. Ganha quem fizer 3 gatinhos ou 3 camas"
          }
          site={"https://cunha-jogo-do-galo.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/cunhaJogoDoGalo"}
        />
        <ProjectComponent
          src={spacex}
          alt={"site spacex"}
          title={"Projeto front-end spacex:"}
          description={"Projeto para treinar o uso de bootstrap e sass."}
          site={"https://cunhaspacex.vercel.app/index.html"}
          github={"https://github.com/ClaudioCunhaDev/cunhaspacex"}
        />
        <ProjectComponent
          src={joker}
          alt={"jogo do joker"}
          title={"Projeto front-end Jogo do Joker:"}
          description={
            "Lógica do jogo do joker do Vasco Palmeirim. À medida que for respondendo às perguntas ganha ou perde pontos."
          }
          site={"https://cunha-jogo-joker.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/cunhaJogoJoker"}
        />
        <ProjectComponent
          src={landingPageSports}
          alt={"Landing Page de Desportos"}
          title={"Projeto front-end"}
          description={
            "Projeto para treinar e melhorar no css, com flexbox e grid"
          }
          site={"https://landing-page-sports.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/landingPageSports"}
        />
        <ProjectComponent
          src={jamboree}
          alt={"jamboree cunha"}
          title={"Projeto fullstack feito apenas para Iphone 12 Pro:"}
          description={
            "Sistema de loggin, 2 tipos de conta (user e parceiro), criar eventos (so o parceiro), adicionar e remover eventos aos favoritos, ver lista de favoritos, adicionar dinheiro à carteira, comprar bilhetes, ver bilhetes comprados, devolver bilhete (reembolso para a carteira), apagar conta."
          }
          github={"https://github.com/ClaudioCunhaDev/jamboree"}
        />
        <ProjectComponent
          src={tasklist}
          alt={"tasklist cunha"}
          title={"Projeto front-end tasklist:"}
          description={
            "Adicionar item à lista, editar item, remover item, ao marcar uma tarefa como concluída o item é riscado."
          }
          site={"https://cunha-task-list.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/cunhaTaskList"}
        />
      </div>
    </div>
  );
};
