const Education = () => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-blue-500">
            Education
          </h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-blue-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">
        <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
          <div className="flex flex-col pb-4">
            <h3 className="text-xl font-bold">
              Bachelor's of Software Engineering
            </h3>
            <div className="flex items-center justify-center gap-x-2 md:justify-start">
              <span className="flex-1 text-sm font-medium italic sm:flex-none">
                Auburn University
              </span>
              <span>•</span>
              <span className="flex-1 text-sm sm:flex-none">May 2022</span>
            </div>
          </div>
          <p className="text-neutral-500">
            <strong className="text-neutral-700">Relevant coursework:</strong>{" "}
            Software Modeling and Design, Software Quality Assurance,
            Introduction to Algorithms, Software Process
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
