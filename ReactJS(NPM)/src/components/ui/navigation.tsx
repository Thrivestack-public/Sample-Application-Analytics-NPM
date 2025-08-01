import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  const isMarketingPage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          SaasApp
        </Link>
        
        {isMarketingPage ? (
          <div className="flex items-center gap-4">
            <Link to="/signup">
              <Button variant="outline">Sign Up</Button>
            </Link>
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>
        ) : (
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};