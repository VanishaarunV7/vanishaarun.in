import { SiPython, SiMysql, SiHtml5, SiCss, SiNumpy, SiPandas, SiScikitlearn, SiJupyter, SiGit, SiGithub, SiR } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BarChart3, Brain, LineChart, Sigma } from "lucide-react";
import type { CSSProperties, ComponentType } from "react";

type IconType = ComponentType<{ className?: string; style?: CSSProperties }>;

const skills: { name: string; level: number; icon: IconType; color: string }[] = [
  { name: "Python", level: 90, icon: SiPython, color: "#3776AB" },
  { name: "SQL", level: 85, icon: SiMysql, color: "#4479A1" },
  { name: "Machine Learning", level: 80, icon: Brain, color: "#FF6F00" },
  { name: "NumPy", level: 85, icon: SiNumpy, color: "#013243" },
  { name: "Pandas", level: 85, icon: SiPandas, color: "#150458" },
  { name: "Matplotlib", level: 80, icon: BarChart3, color: "#11557C" },
  { name: "Data Analysis", level: 85, icon: LineChart, color: "#0EA5E9" },
  { name: "Data Visualization", level: 80, icon: Sigma, color: "#8B5CF6" },
];

const skillCategories: { title: string; skills: { name: string; icon: IconType; color: string }[] }[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "R", icon: SiR, color: "#276DC3" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Machine Learning", icon: Brain, color: "#FF6F00" },
      { name: "Data Analysis", icon: LineChart, color: "#0EA5E9" },
      { name: "Statistical Modeling", icon: Sigma, color: "#8B5CF6" },
      { name: "Data Visualization", icon: BarChart3, color: "#11557C" },
    ],
  },
  {
    title: "Python Libraries",
    skills: [
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Matplotlib", icon: BarChart3, color: "#11557C" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Seaborn", icon: LineChart, color: "#4C72B0" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Jupyter Notebook", icon: SiJupyter, color: "#F37626" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
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
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="bg-card rounded-xl p-5 card-shadow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground flex items-center gap-2">
                      <Icon className="w-5 h-5" style={{ color: skill.color }} />
                      {skill.name}
                    </span>
                    <span className="text-sm text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
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
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      <Icon className="w-4 h-4" style={{ color: skill.color }} />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
