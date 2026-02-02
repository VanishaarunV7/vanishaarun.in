import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Titanic Dataset Analysis",
    description:
      "Comprehensive data analysis and machine learning project based on the famous Titanic dataset. Applied data preprocessing, exploratory data analysis, and predictive modeling techniques.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/VanishaarunV7",
    color: "from-primary to-cyan-500",
  },
  {
    title: "AI-Based Exam Monitoring System",
    description:
      "An AI-powered system designed to monitor exams using intelligent surveillance techniques. Implements computer vision and machine learning for automated proctoring.",
    tech: ["Python", "OpenCV", "Machine Learning", "AI"],
    github: "https://github.com/VanishaarunV7",
    color: "from-accent to-orange-500",
  },
  {
    title: "Google Pay Expense Sharing System",
    description:
      "A practical project to manage and split expenses efficiently among groups. Features expense tracking, bill splitting, and balance calculations.",
    tech: ["Python", "Data Structures", "Algorithms"],
    github: "https://github.com/VanishaarunV7",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Event Management HTML Project",
    description:
      "A responsive front-end event management website built with modern HTML and CSS. Features clean design and intuitive user interface for managing events.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/VanishaarunV7",
    color: "from-violet-500 to-purple-500",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in
            data science, machine learning, and web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Header with gradient */}
              <div
                className={`h-2 bg-gradient-to-r ${project.color}`}
              />

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={18} />
                    View on GitHub
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://github.com/VanishaarunV7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
