import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-bold text-foreground">
              Vanisha<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="outline" className="group border-primary/30 hover:border-primary hover:bg-primary/5">
              <a href="/assets/Vanisha_Arun_Resume.pdf" download="Vanisha_Arun_Resume.pdf">
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                Resume
              </a>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2 space-y-2">
                <Button asChild variant="outline" className="w-full group border-primary/30 hover:border-primary hover:bg-primary/5">
                  <a href="/assets/Vanisha_Arun_Resume.pdf" download="Vanisha_Arun_Resume.pdf">
                    <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
