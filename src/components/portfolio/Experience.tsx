import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Intern",
    company: "Chennai Metro Rail Limited",
    location: "Chennai",
    period: "Internship",
    description:
      "Gained exposure to real-world applications of technology in transportation systems. Learned about data management practices and operational efficiency in a large-scale public infrastructure project.",
    skills: ["Data Management", "Technical Documentation", "Process Analysis"],
  },
  {
    title: "Intern",
    company: "Appin Technology",
    location: "Coimbatore",
    period: "Internship",
    description:
      "Developed practical experience in technology applications and software development. Enhanced programming skills and gained insights into industry-standard development practices.",
    skills: ["Software Development", "Programming", "Technical Training"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex shrink-0 w-16 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-background z-10" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-card rounded-2xl p-6 md:p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-primary font-semibold">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-accent/10 text-accent-foreground text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
