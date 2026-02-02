import { Code2, Database, Brain, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building intelligent models and algorithms",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Extracting insights from complex datasets",
  },
  {
    icon: Code2,
    title: "Python Development",
    description: "Writing clean, efficient code",
  },
  {
    icon: TrendingUp,
    title: "Data Visualization",
    description: "Creating impactful visual stories",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Passionate About Data Science
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Vanisha Arun</span>,
              a dedicated 3rd-year Computer Science Engineering student at Excel
              Engineering College, Namakkal. My journey into the world of data science
              began with a simple curiosity about how data can tell stories and drive
              decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through my academic journey and internships at Chennai Metro Rail Limited
              and Appin Technology, I've developed a strong foundation in Python, SQL,
              and machine learning. I love transforming raw data into meaningful insights
              that can solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As an aspiring Data Analyst, I'm actively seeking internship opportunities
              where I can apply my skills, learn from industry experts, and contribute
              to impactful projects. I believe in continuous learning and staying updated
              with the latest trends in data science and AI.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-card rounded-xl card-shadow">
                <div className="text-3xl font-bold text-primary mb-1">4+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl card-shadow">
                <div className="text-3xl font-bold text-primary mb-1">2</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl card-shadow">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Tech Skills</div>
              </div>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
