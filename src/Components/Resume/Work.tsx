const Work = () => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-neutral-800">Work</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">
        <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
          <div className="flex flex-col pb-4">
            <h2 className="text-xl font-bold">UDA Technologies</h2>
            <div className="flex items-center justify-center gap-x-2 md:justify-start">
              <span className="flex-1 text-sm font-medium italic sm:flex-none">
                Co-Op Software Engineer
              </span>
              <span>•</span>
              <span className="flex-1 text-sm sm:flex-none">
                August 2019 - May 2021
              </span>
            </div>
          </div>
          <ol
            style={{ listStyleType: "circle" }}
            className="grid grid-cols-1 gap-4"
          >
            <li className="text-neutral-500">
              Used HTML, CSS, and JavaScript to build new pages and content
              based on provided designs.
            </li>
            <li className="text-neutral-500">
              Worked on client issues / bugs reported through the company's
              online software.
            </li>
            <li className="text-neutral-500">
              Developed responsive mobile web UIs.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Work;
