import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import { Link } from "react-router-dom";
import resume from "/resources/resume-updated.pdf";
const Intro = () => {
  return (
    <div className="relative flex items-center justify-center h-screen w-full">
      <div className="z-10  max-w-screen-lg px-4 lg:px-0">
        <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
            Alex White
          </h1>
          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            I'm a Birmingham based{" "}
            <strong className="text-stone-100">
              Front End Software Engineer
            </strong>
            , new graduate from{" "}
            <strong className="text-stone-100">Auburn University</strong>{" "}
            looking for a full time position in the field.
          </p>
          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            In my free time time, I sing with the{" "}
            <strong className="text-stone-100">Iron City Singers</strong>,
            playing <strong className="text-stone-100">Disc Golf</strong>, or
            having a fun time playing{" "}
            <strong className="text-stone-100">Dungeons and Dragons</strong>.
          </p>{" "}
          <div className="flex flex-col-2 gap-x-4 ">
            <SocialIcon url="https://github.com/alexwhite017" target="_blank" />
            <SocialIcon
              url="https://www.linkedin.com/in/alex-l-white/"
              target="_blank"
            />
            <Link
              className="flex m-auto gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base
                    border-orange-500 ring-orange-500"
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
