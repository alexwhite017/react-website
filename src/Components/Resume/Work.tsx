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
              Build and maintain custom WordPress themes and full-stack web
              applications using Laravel, React, and PHP.
            </li>
            <li className="text-neutral-500">
              Develop and configure Sage-based WordPress builds, leveraging
              modern front-end tooling and Blade templating for scalable theme
              architecture.
            </li>
            <li className="text-neutral-500">
              Collaborate with designers and project managers using Git version
              control and agile development workflows to deliver projects on
              time.
            </li>
            <li className="text-neutral-500">
              Implement responsive, accessible front-end interfaces with HTML,
              CSS, JavaScript, and modern frameworks to enhance user experience.
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
              Contributed to a variety of WordPress sites and custom themes
              built with Laravel and React.
            </li>
            <li className="text-neutral-500">
              Gained hands-on experience with Git version control and agile
              workflows to support efficient project delivery.
            </li>
            <li className="text-neutral-500">
              Assisted in front-end development using HTML, CSS, JavaScript, and
              modern frameworks to enhance UI functionality.
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
              Built new pages and UI components using HTML, CSS, and JavaScript
              based on provided design specifications.
            </li>
            <li className="text-neutral-500">
              Investigated and resolved client-reported bugs in the company's
              cloud-based construction management software.
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
