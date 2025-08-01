import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { trackUserAction } from "@/lib/thrivestack-events";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Build Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Dream </span>
            Dashboard
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            Transform your data into actionable insights with our powerful, 
            intuitive dashboard platform. Get started in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                onClick={() => trackUserAction("cta_clicked", { 
                  button: "get_started_free",
                  location: "hero_section"
                })}
              >
                Get Started Free
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 hover:border-primary/40"
                onClick={() => trackUserAction("cta_clicked", { 
                  button: "view_demo",
                  location: "hero_section"
                })}
              >
                View Demo
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
          <img 
            src={heroImage} 
            alt="Dashboard Preview" 
            className="relative z-10 w-full h-auto rounded-2xl shadow-elegant transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};