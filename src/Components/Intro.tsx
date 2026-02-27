import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import { Link } from "react-router-dom";
import resume from "/resources/Alex_White_Resume.pdf";
const Intro = () => {
  return (
    <div className="relative flex min-h-[60vh] w-full items-center justify-center">
      <div className="z-10 max-w-screen-lg px-4 lg:px-0">
        <div className="animate-fade-in-up flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
            Alex White
          </h1>
          <p className="prose-sm sm:prose-base lg:prose-lg text-stone-200">
            I'm a Birmingham based{" "}
            <strong className="text-stone-100">
              Front End Software Engineer
            </strong>
            , currently a{" "}
            <strong className="text-stone-100">Junior Developer</strong> at{" "}
            <strong className="text-stone-100">Kinetic Communications</strong>.
          </p>
          <div className="flex-col-2 flex gap-x-4">
            <SocialIcon url="https://github.com/alexwhite017" target="_blank" />
            <SocialIcon
              url="https://www.linkedin.com/in/alex-l-white/"
              target="_blank"
            />
            <Link
              className="m-auto flex gap-x-2 rounded-full border-2 border-blue-500 bg-none px-4 py-2 text-sm font-medium text-white ring-blue-500 ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base"
              to={resume}
              target="_blank"
              download
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
