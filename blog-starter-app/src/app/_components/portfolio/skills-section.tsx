interface SkillsSectionProps {
  skills: Record<string, string[]>;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="py-16" id="skills">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="p-6 bg-gray-50 dark:bg-slate-800 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {category}
            </h3>
            <ul className="space-y-2">
              {skillList.map((skill, index) => (
                <li
                  key={index}
                  className="text-gray-700 dark:text-gray-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
