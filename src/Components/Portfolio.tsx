import fetch from "/resources/fetch.jpg";
import interiorscapes from "/resources/interiorscapes.png";
import PortfolioItem from "./PortfolioItem";
import pokeapi from "/resources/pokeapi.png";
const Portfolio = () => {
  return (
    <div id="Portfolio" className="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8">
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">
          Check out some of my work
        </h2>

        <PortfolioItem
          image={fetch}
          title="Fetch App"
          description="This is a simple app that allows you to search for dogs based on a variety of different filters. You can select dogs from the list to choose which ones to adopt! It was built using React, TypeScript, and TailwindCSS. Due to Chromium cookie changes, the app may have limited functionality in some browsers."
          link="https://fetch-final.vercel.app"
        />
        <PortfolioItem
          image={pokeapi}
          title="PokeAPI"
          description="This is a simple app that allows you to search for Pokemon and view their details. It was built using React and TailwindCSS and interacts with the Pokemon API."
          link="https://pokeapiv2.vercel.app"
        />
      </div>
    </div>
  );
};
export default Portfolio;
