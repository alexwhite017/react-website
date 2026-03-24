import fetch from "/resources/fetch.jpg";
import PortfolioItem from "./PortfolioItem";
import pokeapi from "/resources/PokeAPI-Home-Page.png";
import discGolf from "/resources/Disc-Golf-Tracker-Home-Page.png";
import planner from "/resources/Planner-App-Home-Page.png";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-y-8">
        <h2 className="text-center text-2xl font-bold text-white">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PortfolioItem
            image={planner}
            title="Planner App"
            description="A full-stack personal planner with calendar views, task management with priorities and tags, event scheduling with multi-day support, recurring tasks, filtering, and dark mode. Token-based authentication with Sanctum."
            link="https://planner-app-seven-psi.vercel.app/"
            githubLink="https://github.com/alexwhite017/planner-app"
            tags={["React", "TypeScript", "TailwindCSS", "Laravel", "PHP"]}
          />
          <PortfolioItem
            image={fetch}
            title="Fetch App"
            description="A dog adoption search app with multi-filter search and match generation. Fetches live data from an authenticated API, handles browser cookie restrictions across Chromium browsers, and provides a seamless flow from search to adoption match."
            link="https://fetch-final.vercel.app"
            githubLink="https://github.com/alexwhite017/fetch-final"
            tags={["React", "TypeScript", "TailwindCSS"]}
          />
          <PortfolioItem
            image={pokeapi}
            title="PokeAPI"
            description="A Pokémon search and discovery app that lets you look up any Pokémon and view their detailed stats, types, and abilities. Consumes the public PokéAPI to serve real-time data."
            link="https://pokeapiv2.vercel.app"
            githubLink="https://github.com/alexwhite017/pokeapiv2"
            tags={["React", "TailwindCSS"]}
          />
          <PortfolioItem
            image={discGolf}
            title="Disc Golf Tracker"
            description="A full-stack disc golf scoring app with multiplayer rounds, course management, a disc bag, leaderboards, and player stats. Built with a Laravel 12 REST API and a React frontend."
            link="https://disc-golf-app-flame.vercel.app/"
            githubLink="https://github.com/alexwhite017/disc-golf-app"
            githubLink2="https://github.com/alexwhite017/disc-golf-api"
            githubLink2Label="API Repo"
            tags={["React", "TypeScript", "TailwindCSS", "Laravel", "PHP"]}
          />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
