import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="AISH Fire Protection" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-foreground">AISH</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Fire Protection Co.</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:732-367-1444" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>732.367.1444</span>
            </a>
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
              <a href="tel:732-367-1444" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                <Phone className="h-4 w-4" />
                <span>732.367.1444</span>
              </a>
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
