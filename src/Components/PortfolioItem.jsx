const PortfolioItem = (props) => {
  return (
    <div className="relative mx-auto h-max max-w-screen-lg overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
      <img
        src={props.image}
        className="block h-full w-full rounded-lg object-cover object-center"
        alt={props.title}
      />
      <a
        target="_blank"
        className="absolute inset-0 h-full w-full opacity-0 hover:opacity-80 bg-gray-900 transition-all duration-300"
        href={props.link}
      >
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white opacity-100">
              {props.title}
            </h2>
            <p className="text-xs text-white opacity-100 sm:text-sm">
              {props.description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PortfolioItem;
