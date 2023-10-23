const Portfolio = () => {
  return (
    <div id="Portfolio" className="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8">
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">
          Check out some of my work
        </h2>
        <div className="relative mx-auto h-max max-w-screen-lg overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
          <img
            src="/resources/fetch.png"
            className="block h-full w-full rounded-lg object-cover object-center"
            alt="Fetch"
          />
          <a
            target="_blank"
            className="absolute inset-0 h-full w-full opacity-0 hover:opacity-80 bg-gray-900 transition-all duration-300"
            href="https://fetch-final.vercel.app"
          >
            <div className="relative h-full w-full p-4">
              <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
                <h2 className="text-center font-bold text-white opacity-100">
                  Fetch App
                </h2>
                <p className="text-xs text-white opacity-100 sm:text-sm">
                  This is a simple app that allows you to search for dogs based
                  on a variety of different filters. You can select dogs from
                  the list to choose which ones to adopt! It was built using
                  React, TypeScript, and TailwindCSS.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
