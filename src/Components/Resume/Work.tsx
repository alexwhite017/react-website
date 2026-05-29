const Work = () => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-blue-500">Work</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-blue-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">
        <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
          <div className="flex flex-col pb-4">
            <h2 className="text-xl font-bold">Kinetic Communications</h2>
            <div className="flex items-center justify-center gap-x-2 md:justify-start">
              <span className="flex-1 text-sm font-medium italic sm:flex-none">
                Junior Developer
              </span>
              <span>•</span>
              <span className="flex-1 text-sm sm:flex-none">
                November 2025 – Present
              </span>
            </div>
          </div>
          <ol
            style={{ listStyleType: "circle" }}
            className="grid grid-cols-1 gap-4"
          >
            <li className="text-neutral-500">
              Build and maintain custom WordPress themes and full-stack
              applications for agency clients using Laravel, React, and PHP.
            </li>
            <li className="text-neutral-500">
              Develop Sage-based WordPress themes with Blade templating and
              modern front-end build tooling.
            </li>
            <li className="text-neutral-500">
              Diagnose and resolve production issues on live client sites,
              including security scanner failures and hosting and CDN
              configuration on managed WordPress hosts.
            </li>
            <li className="text-neutral-500">
              Work directly with designers and project managers in an agile
              workflow, using Git to ship features on deadline.
            </li>
          </ol>
        </div>

        <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
          <div className="flex flex-col pb-4">
            <h2 className="text-xl font-bold">Kinetic Communications</h2>
            <div className="flex items-center justify-center gap-x-2 md:justify-start">
              <span className="flex-1 text-sm font-medium italic sm:flex-none">
                Developer Intern
              </span>
              <span>•</span>
              <span className="flex-1 text-sm sm:flex-none">
                August 2025 – November 2025
              </span>
            </div>
          </div>
          <ol
            style={{ listStyleType: "circle" }}
            className="grid grid-cols-1 gap-4"
          >
            <li className="text-neutral-500">
              Contributed front-end and theme work to client WordPress sites
              built with Kadence blocks.
            </li>
            <li className="text-neutral-500">
              Learned the team's Git and agile workflow and began taking on
              feature work independently.
            </li>
          </ol>
        </div>

        <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
          <div className="flex flex-col pb-4">
            <h2 className="text-xl font-bold">UDA Technologies</h2>
            <div className="flex items-center justify-center gap-x-2 md:justify-start">
              <span className="flex-1 text-sm font-medium italic sm:flex-none">
                Co-op Software Engineer
              </span>
              <span>•</span>
              <span className="flex-1 text-sm sm:flex-none">
                August 2019 – May 2021
              </span>
            </div>
          </div>
          <ol
            style={{ listStyleType: "circle" }}
            className="grid grid-cols-1 gap-4"
          >
            <li className="text-neutral-500">
              Built new pages and UI components in HTML, CSS, and JavaScript
              from design specs.
            </li>
            <li className="text-neutral-500">
              Investigated and fixed client-reported bugs in a cloud-based
              construction management platform.
            </li>
            <li className="text-neutral-500">
              Developed responsive mobile web interfaces to improve usability
              across devices.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Work;
