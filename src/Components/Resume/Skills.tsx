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
      <div className="col-span-1 flex flex-col md:col-span-3">
        <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
          <div className="flex flex-col pb-4">
            <h2 className="text-xl font-bold">Languages Known</h2>
          </div>
          <ol
            style={{ listStyleType: "circle" }}
            className="grid grid-cols-1 gap-4"
          >
            <li className="text-neutral-500">HTML</li>
            <li className="text-neutral-500">CSS</li>
            <li className="text-neutral-500">JavaScript</li>
            <li className="text-neutral-500">Java</li>
            <li className="text-neutral-500">Python</li>
            <li className="text-neutral-500">React</li>
            <li className="text-neutral-500">TypeScript</li>
            <li className="text-neutral-500">Tailwind CSS</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Skills;
