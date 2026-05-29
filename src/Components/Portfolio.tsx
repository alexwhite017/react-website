import fetch from "/resources/fetch.jpg";
import PortfolioItem from "./PortfolioItem";
import pokeapi from "/resources/PokeAPI-Home-Page.png";
import discGolf from "/resources/Disc-Golf-Tracker-Home-Page.png";
import planner from "/resources/Planner-App-Home-Page.png";
import cocktail from "/resources/homebar-home.png";
import pokequiz from "/resources/pokequiz-home.png";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-y-8">
        <h2 className="text-center text-2xl font-bold text-white">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PortfolioItem
            image={pokequiz}
            title="PokeQuiz"
            description="Full-stack Pokémon quiz app where players identify Pokémon in a hangman-style game with hints that reveal stats, typing, generation, and silhouette. Built with a Laravel REST API backend and a React frontend."
            link="https://pokequiz-brown.vercel.app"
            githubLink="https://github.com/alexwhite017/pokequiz"
            tags={["React", "TailwindCSS", "Laravel", "PHP"]}
          />
          <PortfolioItem
            image={cocktail}
            title="Homebar"
            description="Cocktail recipe browser and home bar inventory manager. The cocktail list is decided by what the user has in their bar. Built with Next.js, TypeScript, and Drizzle ORM, seeding data from TheCocktailDB."
            link="https://homebar.xyz"
            githubLink="https://github.com/alexwhite017/Home-Bar"
            tags={["React", "TypeScript", "TailwindCSS", "Next.js", "Drizzle"]}
          />
          <PortfolioItem
            image={discGolf}
            title="Disc Golf Tracker"
            description="Full-stack disc golf scoring app with multiplayer rounds, course management, a disc bag, leaderboards, and player stats. Built with a Laravel 12 REST API and a React frontend."
            link="https://disc-golf-app-flame.vercel.app/"
            githubLink="https://github.com/alexwhite017/disc-golf-app"
            githubLink2="https://github.com/alexwhite017/disc-golf-api"
            githubLink2Label="API Repo"
            tags={["React", "TypeScript", "TailwindCSS", "Laravel", "PHP"]}
          />
          <PortfolioItem
            image={planner}
            title="Planner App"
            description="Full-stack personal planner with calendar views, tasks with priorities and tags, multi-day event scheduling, recurring tasks, filtering, and dark mode. Uses Sanctum for token-based auth."
            link="https://planner-app-seven-psi.vercel.app/"
            githubLink="https://github.com/alexwhite017/planner-app"
            tags={["React", "TypeScript", "TailwindCSS", "Laravel", "PHP"]}
          />
          <PortfolioItem
            image={fetch}
            title="Fetch App"
            description="Dog adoption search app with multi-filter search and match generation. Pulls live data from an authenticated API and handles browser cookie quirks across Chromium browsers."
            link="https://fetch-final.vercel.app"
            githubLink="https://github.com/alexwhite017/fetch-final"
            tags={["React", "TypeScript", "TailwindCSS"]}
          />
          <PortfolioItem
            image={pokeapi}
            title="PokeAPI"
            description="Pokémon search app that looks up any Pokémon and shows their stats, types, and abilities. Pulls live data from the public PokéAPI."
            link="https://pokeapiv2.vercel.app"
            githubLink="https://github.com/alexwhite017/pokeapiv2"
            tags={["React", "TailwindCSS"]}
          />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
