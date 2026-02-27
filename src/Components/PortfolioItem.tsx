interface PortfolioItemProps {
  image: string;
  title: string;
  description: string;
  link: string;
  githubLink?: string;
  tags?: string[];
}

const PortfolioItem = ({ image, title, description, link, githubLink, tags }: PortfolioItemProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-lg shadow-black/30 lg:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
          alt={title}
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-3 p-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {tags && (
          <div className="flex flex-wrap gap-2">
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
        <p className="flex-1 text-sm text-gray-300">{description}</p>
        <div className="mt-auto flex gap-x-3 pt-2">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white px-4 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-white hover:text-gray-900"
          >
            Live Demo
          </a>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-orange-400 px-4 py-1.5 text-xs font-medium text-orange-400 transition-colors duration-200 hover:bg-orange-400 hover:text-gray-900"
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
