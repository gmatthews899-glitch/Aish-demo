import { Award, CheckCircle, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Leader",
    description: "Our attention to service and detail has made us an industry leader in fire protection.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified and trained technicians dedicated to providing the best possible service.",
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description: "Quick response times and flexible scheduling to meet your needs.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Dedication to quality and integrity at the forefront of every project.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Protecting Lives and Property Since 1985
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Aish Fire Protection, meeting your needs and expectations is our goal. We take tremendous 
              pride in ensuring the fire and life safety of commercial offices, manufacturing facilities, 
              schools, retirement centers, public buildings, residential homes, and more.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our dedication to quality and integrity is at the forefront of every project we undertake. 
              With decades of experience serving the New Jersey community, we've built a reputation for 
              reliability, expertise, and exceptional customer service.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/sprinkler-system.jpg"
                  alt="Fire Sprinkler System"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/emergency-lighting.jpg"
                  alt="Emergency Lighting"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/fire-extinguishers.jpg"
                  alt="Fire Extinguishers"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/technician-service.jpg"
                  alt="Technician Service"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
