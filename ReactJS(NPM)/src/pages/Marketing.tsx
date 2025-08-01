import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { trackUserAction } from "@/lib/thrivestack-events";

const Marketing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our platform to make better decisions.
          </p>
          <Link to="/signup">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-all duration-300"
              onClick={() => trackUserAction("cta_clicked", { 
                button: "start_free_trial",
                location: "bottom_cta_section"
              })}
            >
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 SaasApp. Built with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Marketing;