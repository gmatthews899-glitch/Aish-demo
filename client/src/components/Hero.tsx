import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-fire-protection.jpg"
          alt="Fire Protection Equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Keeping You Safe Since 1985
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Professional Fire Protection Services
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Comprehensive fire safety solutions for commercial offices, manufacturing facilities, schools, 
            and residential properties throughout New Jersey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollToSection("contact")} className="text-lg px-8">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="text-lg px-8"
            >
              Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">35+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Certified Technicians</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
