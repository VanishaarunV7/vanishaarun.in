const skills = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "SQL", level: 85, category: "Programming" },
  { name: "Machine Learning", level: 80, category: "Data Science" },
  { name: "NumPy", level: 85, category: "Libraries" },
  { name: "Pandas", level: 85, category: "Libraries" },
  { name: "Matplotlib", level: 80, category: "Libraries" },
  { name: "Data Analysis", level: 85, category: "Data Science" },
  { name: "Data Visualization", level: 80, category: "Data Science" },
];

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "HTML/CSS"],
  },
  {
    title: "Data Science & ML",
    skills: ["Machine Learning", "Data Analysis", "Statistical Modeling", "Data Visualization"],
  },
  {
    title: "Python Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Seaborn"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Jupyter Notebook", "Git", "GitHub", "VS Code"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills with Progress Bars */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-card rounded-xl p-5 card-shadow">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-foreground mb-4 pb-3 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
};
