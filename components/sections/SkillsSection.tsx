export async function SkillsSection() {
  const categories = [
    {
      title: "Programming Languages",
      icon: "⌘",
      skills: ["Java", "Python", "JavaScript", "SQL", "C"],
    },
    {
      title: "Web Technologies",
      icon: "◎",
      skills: ["HTML", "CSS", "React.js"],
    },
    {
      title: "Backend",
      icon: "⚡",
      skills: ["Node.js", "Express.js", "Flask", "Django", "REST APIs"],
    },
    {
      title: "ML / Data Science / AI",
      icon: "◈",
      skills: ["PyTorch", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn", "LangChain", "OpenAI API", "Gemini API", "Mistral API"],
    },
    {
      title: "Databases",
      icon: "◉",
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & Platforms",
      icon: "◆",
      skills: ["Git", "GitHub", "Firebase", "Postman", "Linux", "Unix"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 nebula-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">
            Technical Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl p-6 stardust-hover bg-card/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg text-primary">{category.icon}</span>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 rounded-md text-xs font-mono cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
