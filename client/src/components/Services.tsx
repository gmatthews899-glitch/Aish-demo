import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Droplets,
  Flame,
  Lightbulb,
  Package,
  ShieldCheck,
  Sprout,
  TestTube2,
  Wind,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Fire Sprinkler Systems",
    description: "Complete inspections, service, and repairs for all types of fire sprinkler systems to ensure optimal performance and compliance.",
  },
  {
    icon: TestTube2,
    title: "Backflow Preventer Testing",
    description: "Professional testing and certification of backflow prevention devices to protect your water supply and meet regulatory requirements.",
  },
  {
    icon: Flame,
    title: "Fire Extinguisher Service",
    description: "Sales, installation, inspection, and maintenance of fire extinguishers for all classes of fires and facility types.",
  },
  {
    icon: ShieldCheck,
    title: "Kitchen Fire Systems",
    description: "Specialized inspections, service, and repairs for commercial kitchen fire suppression systems to keep your kitchen safe.",
  },
  {
    icon: Wind,
    title: "Kitchen Exhaust Hoods",
    description: "Professional sales, installation, and service of commercial kitchen exhaust hood systems for proper ventilation and fire safety.",
  },
  {
    icon: Lightbulb,
    title: "Emergency Lighting",
    description: "Installation, testing, and maintenance of emergency lighting systems to ensure safe evacuation during power outages.",
  },
  {
    icon: Package,
    title: "Fire & Safety Supplies",
    description: "Complete range of fire safety equipment and supplies including signage, alarms, and personal protective equipment.",
  },
  {
    icon: Sprout,
    title: "Fire Extinguisher Cabinets",
    description: "Quality fire extinguisher cabinets and mounting solutions for easy access and protection of your fire safety equipment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Fire Protection Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Our wide variety of service offerings provide our clients with a single source for service, 
            sales, installation, and maintenance on a wide variety of products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Our experienced technicians are certified and trained to provide the best possible service on every job.
          </p>
        </div>
      </div>
    </section>
  );
}
