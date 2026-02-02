import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Database } from "lucide-react";
import vanishaAvatar from "@/assets/vanisha-avatar.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-accent/15 to-accent/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-2xl" />

        {/* Floating geometric shapes */}
        <div className="absolute top-[15%] left-[10%] w-20 h-20 border border-primary/20 rounded-2xl rotate-12 animate-float-slow" />
        <div className="absolute top-[25%] right-[15%] w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl rotate-45 animate-float" />
        <div className="absolute bottom-[30%] left-[15%] w-12 h-12 border border-accent/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-[20%] right-[20%] w-8 h-8 bg-primary/20 rounded-lg rotate-12 animate-float-slow" />
        
        {/* Small floating dots */}
        <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-[40%] right-[25%] w-2 h-2 bg-accent rounded-full animate-float-delayed opacity-80" />
        <div className="absolute bottom-[35%] left-[25%] w-2 h-2 bg-primary/60 rounded-full animate-float-slow" />
        <div className="absolute top-[60%] right-[35%] w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full animate-float opacity-50" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Open to Internship Opportunities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-4 animate-slide-up">
              Hello, I'm
              <br />
              <span className="relative">
                <span className="text-gradient-primary">Vanisha Arun</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 150 2 298 8" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-draw" style={{ strokeDasharray: 300, strokeDashoffset: 0 }} />
                </svg>
              </span>
            </h1>

            <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium mb-6 animate-slide-up">
              <span className="text-primary font-semibold">Data Science</span> & 
              <span className="text-accent font-semibold"> Machine Learning</span> Enthusiast
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 animate-slide-up leading-relaxed">
              A passionate 3rd-year CSE student transforming raw data into meaningful insights. 
              Building intelligent solutions with Python, ML, and a drive for innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 animate-slide-up">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <a href="#projects">
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-2 border-primary/30 text-foreground hover:border-primary hover:bg-primary/5 px-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <a href="#contact">
                  <span className="flex items-center gap-2">
                    Let's Connect
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </span>
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start animate-fade-in">
              {[
                { icon: Github, href: "https://github.com/VanishaarunV7", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/vanishaarun7105", label: "LinkedIn" },
                { icon: Mail, href: "mailto:vanishaaruncse23@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="group relative p-3.5 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                  <social.icon size={20} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 border-2 border-primary/10 rounded-full scale-[1.15] animate-pulse" />
              <div className="absolute inset-0 border border-dashed border-primary/20 rounded-full scale-[1.3] animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 border border-accent/10 rounded-full scale-[1.45]" />

              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 rounded-full blur-2xl scale-110 opacity-60" />
                
                {/* Main image */}
                <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-br from-primary via-primary/50 to-accent">
                  <img
                    src={vanishaAvatar}
                    alt="Vanisha Arun - Data Science Enthusiast"
                    className="w-full h-full object-cover rounded-full bg-background"
                  />
                </div>

                {/* Floating glassmorphism badges */}
                <div className="absolute -right-2 md:-right-4 top-[20%] bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl px-4 py-3 shadow-xl animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-foreground">4+</span>
                      <span className="text-xs text-muted-foreground block leading-tight">Projects</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-2 md:-left-4 bottom-[20%] bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl px-4 py-3 shadow-xl animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
                      <Database className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-foreground">2</span>
                      <span className="text-xs text-muted-foreground block leading-tight">Internships</span>
                    </div>
                  </div>
                </div>

                {/* Tech stack floating badge */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-card/90 backdrop-blur-md border border-border/50 rounded-full px-5 py-2 shadow-xl animate-float-slow">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">Python</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-semibold text-foreground">ML</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-semibold text-foreground">SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="group flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium tracking-wider uppercase mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
