import { APP_LOGO } from "@/const";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={APP_LOGO} alt="AISH Fire Protection" className="h-10 w-auto" />
              <div>
                <div className="text-lg font-bold text-foreground">AISH</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Fire Protection Co.</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional fire protection services for commercial and residential properties throughout New Jersey.
            </p>
            <p className="text-xs text-muted-foreground">
              Keeping You Safe Since 1985
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Fire Sprinkler Systems</li>
              <li>Backflow Testing</li>
              <li>Fire Extinguishers</li>
              <li>Kitchen Fire Systems</li>
              <li>Emergency Lighting</li>
              <li>Fire Safety Supplies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  1889 Route 9, Unit 111<br />
                  Toms River, NJ 08755
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:732-367-1444" className="text-muted-foreground hover:text-primary transition-colors">
                  732.367.1444
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  P.O. Box 15<br />
                  Lakewood, NJ 08701
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Aish Fire Protection Co. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">Privacy Policy</button>
              <button className="hover:text-primary transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
