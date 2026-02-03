import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "The Joy of Computing Using Python",
    issuer: "NPTEL",
    icon: "🐍",
  },
  {
    title: "SQL (Basic) & R (Basic)",
    issuer: "HackerRank",
    icon: "💻",
  },
  {
    title: "Introduction to Big Data Engineering",
    issuer: "GUVI",
    icon: "📊",
  },
  {
    title: "Building and Deploying Applications",
    issuer: "Google AI Studio",
    icon: "🤖",
  },
  {
    title: "Legacy to Modern: Authentication Techniques in Cyber Security",
    issuer: "Kongunadu Engineering College (Seminar)",
    icon: "🔐",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    icon: "📈",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Award size={18} />
            <span className="text-sm font-medium">Achievements</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that showcase my commitment to continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <span className="truncate">{cert.issuer}</span>
                    </p>
                  </div>
                </div>

                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
