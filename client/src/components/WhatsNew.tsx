import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Mail } from "lucide-react";

const announcements = [
  {
    icon: Clock,
    title: "Expanded Business Hours",
    description: "We're now open earlier to serve you better. Our new hours allow us to accommodate more appointments and provide faster service to our valued clients.",
    date: "Recent Update",
  },
  {
    icon: Mail,
    title: "New Online Scheduling",
    description: "Now you can email us to schedule an appointment or get a quote. We've streamlined our communication process to make it easier than ever to connect with our team.",
    date: "New Feature",
  },
  {
    icon: Calendar,
    title: "Annual Safety Inspections",
    description: "Don't forget to schedule your annual fire safety inspections. Regular maintenance ensures your systems are always ready when you need them most.",
    date: "Reminder",
  },
];

export default function WhatsNew() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What's New
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with our latest announcements and service improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {announcements.map((announcement, index) => {
            const Icon = announcement.icon;
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {announcement.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{announcement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {announcement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
