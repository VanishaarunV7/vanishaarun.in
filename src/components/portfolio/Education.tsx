import { GraduationCap, Calendar, MapPin } from "lucide-react";
import collegeImage from "@/assets/excel-engineering-college.png.asset.json";

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
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-card rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Featured Image */}
              <div className="relative h-64 md:h-auto overflow-hidden group">
                <img
                  src={collegeImage.url}
                  alt="Excel Engineering College campus, Namakkal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/20" />
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                  <span className="inline-block px-3 py-1 bg-card/90 backdrop-blur-sm text-foreground text-sm font-semibold rounded-full">
                    Excel Engineering College
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-10">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent md:block hidden" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      Final Year · Expected 2027
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent-foreground text-sm font-medium rounded-full">
                      <MapPin className="w-3.5 h-3.5" />
                      Namakkal, Tamil Nadu
                    </span>
                  </div>
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
                  I am currently in my final year. Throughout my academic journey, I
                  have developed strong foundations in programming, web development,
                  database management, software engineering, and problem-solving. I
                  actively participate in projects and internships to gain practical
                  industry experience and enhance my technical skills.
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
