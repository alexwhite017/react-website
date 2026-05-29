const Skills = () => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-blue-500">
            skills
          </h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-blue-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-y-6 md:col-span-3">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="mb-3 text-xl font-bold">Languages</h2>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {["JavaScript", "TypeScript", "PHP", "Python", "HTML", "CSS"].map((skill) => (
              <span key={skill} className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h2 className="mb-3 text-xl font-bold">Frameworks & Tools</h2>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {["React", "Next.js", "Laravel", "WordPress", "Sage", "Blade", "Git"].map((skill) => (
              <span key={skill} className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h2 className="mb-3 text-xl font-bold">Databases</h2>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {["MySQL", "SQLite", "Postgres", "REST APIs"].map((skill) => (
              <span key={skill} className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
