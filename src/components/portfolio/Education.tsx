import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Academic Background
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 card-shadow hover:card-shadow-hover transition-all duration-300">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent rounded-l-3xl" />

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    Expected 2027
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent-foreground text-sm font-medium rounded-full">
                    <MapPin className="w-3.5 h-3.5" />
                    Namakkal, Tamil Nadu
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor of Engineering (B.E)
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-3">
                  Computer Science Engineering
                </h4>
                <p className="text-lg text-muted-foreground mb-4">
                  Excel Engineering College
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Currently in my 3rd year, focusing on core computer science fundamentals
                  while specializing in data science and machine learning. Actively
                  participating in hackathons, coding competitions, and collaborative
                  projects to enhance practical skills.
                </p>

                {/* Coursework Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "Data Structures",
                    "Algorithms",
                    "Machine Learning",
                    "Database Systems",
                    "Python Programming",
                    "Statistics",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
