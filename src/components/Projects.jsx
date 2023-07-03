import React from "react";
import coolors from "../assets/coolors.png";
import countries from "../assets/countries.png";
import landingPageSports from "../assets/landingPageSports.jpg";
import jogoDoGalo from "../assets/jogoDoGalo.png";
import jamboree from "../assets/jamboree.png";
import tasklist from "../assets/tasklist.png";
import joker from "../assets/joker.png";
import spacex from "../assets/spacex.jpg";
import bibliotecaDeJogos from "../assets/bibliotecaDeJogos.png";
import pokemons from "../assets/pokemons.png";
import passwordGenerator from "../assets/passwordGenerator.png";
import comments from "../assets/comments.png";
import policeDepartment from "../assets/policeDepartment.png";
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
          title={"Front-End Random Colors Project:"}
          description={
            "2 types of ways to change the colors (pressing the spacebar and clicking the button), lock one or more colors so that they don't change, copy the hexadecimal color code."
          }
          site={
            "https://bytes4future-coolors-q1ds0hcii-claudiocunhadev.vercel.app/"
          }
          github={"https://github.com/ClaudioCunhaDev/bytes4futureCoolors"}
        />
        <ProjectComponent
          src={policeDepartment}
          alt={"police Department GTA RP - cunha"}
          title={"Front-End Police Department GTA RP Project:"}
          description={
            "Police department of a GTA RP server. Built with: React, TypeScript, and Tailwind."
          }
          site={""}
          github={"https://github.com/ClaudioCunhaDev/gtaRpPoliceDepartment"}
        />
        <ProjectComponent
          src={bibliotecaDeJogos}
          alt={"Biblioteca de jogos - cunha"}
          title={"Front-End Game Library Project:"}
          description={
            "We input the name and an image, and it is automatically saved in LocalStorage. Whenever we refresh the page, we retrieve the data from LocalStorage."
          }
          site={"https://cunha-some-library.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/someLibrary"}
        />
        <ProjectComponent
          src={pokemons}
          alt={"Pokemons - cunha"}
          title={"Front-End Pokémon Project:"}
          description={
            "Using the Pokémon API to fetch data, and extra information is displayed when clicking the button."
          }
          site={"https://cunha-pokemons.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/cunhaPokemons"}
        />
        <ProjectComponent
          src={countries}
          alt={"fetch countries cunha"}
          title={"Front-End Countries and Location Project:"}
          description={
            "Requesting a public API with the location of each country."
          }
          site={"https://fetch-countries-mu.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/fetchCountries"}
        />
        <ProjectComponent
          src={passwordGenerator}
          alt={"password Generator cunha"}
          title={"Front-End Password Generator Project:"}
          description={
            "We can generate a password which, by default, has 12 characters. We can also define the number of characters (by checking the input) and copy the generated password."
          }
          site={"https://password-generator-three-rosy.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/PasswordGenerator"}
        />
        <ProjectComponent
          src={jogoDoGalo}
          alt={"jogo do galo"}
          title={"Front-End Tic Tac Toe Game Project:"}
          description={
            "Logic of the tic-tac-toe game, with a kitten and a bed instead of X and O. The winner is the one who gets 3 kittens or 3 beds in a row."
          }
          site={"https://cunha-jogo-do-galo.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/cunhaJogoDoGalo"}
        />
        <ProjectComponent
          src={spacex}
          alt={"site spacex"}
          title={"Front-End SpaceX Project:"}
          description={"Project to practice using Bootstrap and Sass."}
          site={"https://cunhaspacex.vercel.app/index.html"}
          github={"https://github.com/ClaudioCunhaDev/cunhaspacex"}
        />
        <ProjectComponent
          src={joker}
          alt={"jogo do joker"}
          title={"Front-End Joker Game Project:"}
          description={
            "Logic of joker game. As you answer the questions, you gain or lose points."
          }
          site={"https://cunha-jogo-joker.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/cunhaJogoJoker"}
        />
        <ProjectComponent
          src={comments}
          alt={"Página de Comentários"}
          title={"Front-End Comment Page Project:"}
          description={
            "We can leave a comment that is saved in LocalStorage along with the date it was made. When refreshing the page, we retrieve the data from LocalStorage."
          }
          site={"https://cunha-comments.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/cunha-comments"}
        />
        <ProjectComponent
          src={landingPageSports}
          alt={"Landing Page de Desportos"}
          title={"Front-End Project Landing Page"}
          description={
            "A project to practice and improve CSS, using flexbox and grid."
          }
          site={"https://landing-page-sports.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/landingPageSports"}
        />
        <ProjectComponent
          src={jamboree}
          alt={"jamboree cunha"}
          title={"Full-Stack Project Designed for iPhone 12 Pro:"}
          description={
            "Login system, 2 types of accounts (user and partner), create events (partner only), add and remove events from favorites, view list of favorites, add money to wallet, purchase tickets, view purchased tickets, return tickets (refund to wallet), delete account."
          }
          site={""}
          github={"https://github.com/ClaudioCunhaDev/jamboree"}
        />
        <ProjectComponent
          src={tasklist}
          alt={"tasklist cunha"}
          title={"Front-End Task List Project:"}
          description={
            "Add item to the list, edit item, remove item, when marking a task as completed, the item is crossed out."
          }
          site={"https://cunha-task-list.vercel.app/"}
          github={"https://github.com/ClaudioCunhaDev/cunhaTaskList"}
        />
      </div>
    </div>
  );
};
