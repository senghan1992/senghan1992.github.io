interface AboutSectionProps {
  description: string;
  highlights: string[];
}

export function AboutSection({ description, highlights }: AboutSectionProps) {
  return (
    <section className="py-16" id="about">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {description}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
          <ul className="space-y-3">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2 text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
