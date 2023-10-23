const Education = () => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-neutral-800">
            Education
          </h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">
        <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
          <div className="flex flex-col pb-4">
            <h2 className="text-xl font-bold">
              Bachelors of Software Engineering
            </h2>
            <div className="flex items-center justify-center gap-x-2 md:justify-start">
              <span className="flex-1 text-sm font-medium italic sm:flex-none">
                Auburn University
              </span>
              <span>•</span>
              <span className="flex-1 text-sm sm:flex-none">May 2022</span>
            </div>
          </div>
          <h1 className="font-bold">Relevant classwork:</h1>
          <ul className="grid grid-cols-1 gap-4">
            <li className="col-span-1 flex  items-start gap-x-2 " key="key">
              <div>
                <h1 className="font-bold">Software Modeling and Design:</h1>
                <p className="text-neutral-500">
                  In this class I learned about ways to model and create user
                  friendly software design. I was tasked with creating a stimple
                  store check-out system in java that was linked with a local
                  SQL Database.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1 className="font-bold">Software Quality Assurance:</h1>
                <p className="text-neutral-500">
                  Learned about different processes, methods, and tools
                  associated with the production of robust, high-quality
                  software.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1 className="font-bold">Introduction to Algorithms:</h1>
                <p className="text-neutral-500">
                  Learned about many different sorting algorithms as well as
                  space and time complexity.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1 className="font-bold">Software Process:</h1>
                <p className="text-neutral-500">
                  Learned about the cycle of creating clean and efficient code.
                  Used Test Driven Developement with Unit testing as we
                  implemented every new section of a project.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
