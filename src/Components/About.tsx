import profile2 from "/resources/IMG_2817.jpeg";
const About = () => {
  return (
    <div id="About" className="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-4">
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-36 w-36 overflow-hidden rounded-xl md:h-44 md:w-44">
              <img
                className="h-full w-full object-cover"
                src={profile2}
                alt="Alex White"
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-y-6 md:col-span-3">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-white">About me</h2>
              <p className="max-w-prose text-gray-400 sm:leading-7">
                I'm a Front End Software Engineer based in Birmingham, AL with a
                focus on building clean, responsive web experiences. At Kinetic
                Communications I develop custom WordPress themes and full-stack
                applications using Laravel and PHP. Outside of work I build
                projects with React and TypeScript. I'm a 2022 Auburn University
                graduate who enjoys turning complex problems into intuitive
                interfaces.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li
                className="col-span-1 flex items-start gap-x-2"
                key="location"
              >
                <span className="text-sm font-bold text-white">Location:</span>
                <span className="text-sm text-gray-400">Birmingham, AL</span>
              </li>
              <li className="col-span-1 flex items-start gap-x-2" key="study">
                <span className="text-sm font-bold text-white">
                  Place of Study:
                </span>
                <span className="text-sm text-gray-400">Auburn University</span>
              </li>
              <li
                className="col-span-1 flex items-start gap-x-2"
                key="interests"
              >
                <span className="text-sm font-bold text-white">Interests:</span>
                <span className="text-sm text-gray-400">
                  Singing, Disc Golf, Table Top Games
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
