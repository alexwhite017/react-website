const Skills = () => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-neutral-800">
            skills
          </h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-y-6 md:col-span-3">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="mb-2 text-xl font-bold">Languages</h2>
          <ol style={{ listStyleType: "circle" }} className="grid grid-cols-2 gap-2">
            <li className="text-neutral-500">HTML</li>
            <li className="text-neutral-500">CSS</li>
            <li className="text-neutral-500">JavaScript</li>
            <li className="text-neutral-500">TypeScript</li>
            <li className="text-neutral-500">Java</li>
            <li className="text-neutral-500">Python</li>
            <li className="text-neutral-500">PHP</li>
            <li className="text-neutral-500">SQL</li>
          </ol>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h2 className="mb-2 text-xl font-bold">Frameworks & Libraries</h2>
          <ol style={{ listStyleType: "circle" }} className="grid grid-cols-2 gap-2">
            <li className="text-neutral-500">React</li>
            <li className="text-neutral-500">Tailwind CSS</li>
            <li className="text-neutral-500">Laravel</li>
          </ol>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h2 className="mb-2 text-xl font-bold">Tools & Platforms</h2>
          <ol style={{ listStyleType: "circle" }} className="grid grid-cols-2 gap-2">
            <li className="text-neutral-500">Git</li>
            <li className="text-neutral-500">WordPress</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Skills;
