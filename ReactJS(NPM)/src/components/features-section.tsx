import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your data with powerful visualization tools and real-time reporting."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance with industry standards."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with real-time updates and millisecond response times."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with shared dashboards and collaborative features."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've built everything you need to turn your data into your competitive advantage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-xl w-fit">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};