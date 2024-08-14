import profile from "/resources/profile.jpg";
const About = () => {
  return (
    <div id="About" className="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-4">
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <img
                className="h-full w-full object-cover"
                src={profile}
                alt="Logo"
              />
              ;
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-y-6 md:col-span-3">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-white">About me</h2>
              <p className="max-w-prose text-gray-400 sm:leading-7">
                My name is Alex White and I am a Software Engineer recently
                graduated from Auburn University. I have a passion for creating
                something new and innovative. I have the most experince working
                as a Front-End Developer. I'm an outgoing personality and easy
                to work with in a team setting.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li className="col-span-1 flex  items-start gap-x-2" key="key">
                <span className="text-sm font-bold text-white">Location:</span>
                <span className=" text-sm text-gray-400">Birmingham, AL</span>
              </li>
              <li className="col-span-1 flex  items-start gap-x-2" key="key">
                <span className="text-sm font-bold text-white">Age:</span>
                <span className=" text-sm text-gray-400">25</span>
              </li>
              <li className="col-span-1 flex  items-start gap-x-2" key="key">
                <span className="text-sm font-bold text-white">Study:</span>
                <span className=" text-sm text-gray-400">
                  Auburn University
                </span>
              </li>
              <li className="col-span-1 flex  items-start gap-x-2" key="key">
                <span className="text-sm font-bold text-white">Interests:</span>
                <span className=" text-sm text-gray-400">
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
