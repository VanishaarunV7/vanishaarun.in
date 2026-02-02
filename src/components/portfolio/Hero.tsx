import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import vanishaAvatar from "@/assets/vanisha-avatar.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/60 rounded-full animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
              👋 Welcome to my portfolio
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-slide-up">
              Hello, I'm
              <br />
              <span className="text-gradient-primary">Vanisha Arun</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4 animate-slide-up">
              Data Science & Machine Learning Enthusiast
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-slide-up">
              A 3rd-year Computer Science Engineering student passionate about
              data science and machine learning, with hands-on experience in
              data-driven projects and internships. Aspiring Data Analyst ready
              for real-world opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-slide-up">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in">
              <a
                href="https://github.com/VanishaarunV7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card card-shadow rounded-full text-muted-foreground hover:text-primary hover:card-shadow-hover transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vanishaarun7105"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card card-shadow rounded-full text-muted-foreground hover:text-primary hover:card-shadow-hover transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:vanishaaruncse23@gmail.com"
                className="p-3 bg-card card-shadow rounded-full text-muted-foreground hover:text-primary hover:card-shadow-hover transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-110 animate-pulse" />
              <div className="absolute inset-0 border border-accent/30 rounded-full scale-125" />

              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl" />
                <img
                  src={vanishaAvatar}
                  alt="Vanisha Arun"
                  className="relative w-full h-full object-cover rounded-full border-4 border-card shadow-2xl"
                />

                {/* Floating badge */}
                <div className="absolute -right-4 top-1/4 bg-card card-shadow rounded-xl px-4 py-2 animate-float">
                  <span className="text-2xl font-bold text-primary">3+</span>
                  <span className="text-xs text-muted-foreground block">
                    Projects
                  </span>
                </div>

                {/* Another floating badge */}
                <div className="absolute -left-4 bottom-1/4 bg-card card-shadow rounded-xl px-4 py-2 animate-float-delayed">
                  <span className="text-2xl font-bold text-accent">2+</span>
                  <span className="text-xs text-muted-foreground block">
                    Internships
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
