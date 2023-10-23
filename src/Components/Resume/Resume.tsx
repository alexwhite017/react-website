import Education from "./Education";
import Skills from "./Skills";
import Work from "./Work";

const Resume = () => {
  return (
    <div id="Resume" className="bg-neutral-100 px-4 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          <Education />
          <Work />
          <Skills />
        </div>
      </div>
    </div>
  );
};
export default Resume;
