const PortfolioItem = ({ image, title, description, link, githubLink, tags }) => {
  return (
    <div className="relative mx-auto h-max max-w-screen-lg overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
      <img
        src={image}
        className="block h-full w-full rounded-lg object-cover object-center"
        alt={title}
      />
      <div className="absolute inset-0 flex h-full w-full flex-col gap-y-2 overflow-y-auto bg-gray-900 p-4 opacity-0 transition-all duration-300 hover:opacity-95">
        <h2 className="text-center font-bold text-white">{title}</h2>
        {tags && (
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="flex-1 text-xs text-white sm:text-sm">{description}</p>
        <div className="mt-auto flex justify-center gap-x-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white px-3 py-1 text-xs text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Live Demo
          </a>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-orange-400 px-3 py-1 text-xs text-orange-400 transition-colors hover:bg-orange-400 hover:text-gray-900"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
