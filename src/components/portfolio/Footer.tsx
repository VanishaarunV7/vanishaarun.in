import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold mb-2 inline-block">
              Vanisha<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-background/70">
              © {currentYear} Vanisha Arun. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/VanishaarunV7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/vanishaarun7105"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:vanishaaruncse23@gmail.com"
              className="p-2.5 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-background/70">
            Made with <Heart size={14} className="text-destructive fill-current" /> using React
          </div>
        </div>
      </div>
    </footer>
  );
};
