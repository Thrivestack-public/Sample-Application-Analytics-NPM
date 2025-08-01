import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, DollarSign, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { title: "Total Revenue", value: "$48,329", change: "+12.5%", icon: DollarSign, positive: true },
    { title: "Active Users", value: "2,847", change: "+8.2%", icon: Users, positive: true },
    { title: "Conversion Rate", value: "3.24%", change: "-2.1%", icon: TrendingUp, positive: false },
    { title: "Analytics Views", value: "12,456", change: "+15.3%", icon: BarChart3, positive: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border shadow-card">
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            SaasApp
          </h1>
        </div>
        
        <nav className="px-4 space-y-2">
          <Button variant="secondary" className="w-full justify-start bg-primary/10 text-primary">
            <BarChart3 className="mr-3 h-5 w-5" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-3 h-5 w-5" />
            Users
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <TrendingUp className="mr-3 h-5 w-5" />
            Analytics
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Button>
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <Link to="/">
            <Button variant="outline" className="w-full justify-start">
              <LogOut className="mr-3 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground text-lg">
            Here's what's happening with your business today.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardDescription className="text-sm font-medium">
                    {stat.title}
                  </CardDescription>
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">
                    {stat.value}
                  </CardTitle>
                  <Badge 
                    variant={stat.positive ? "default" : "destructive"}
                    className={stat.positive ? "bg-green-100 text-green-800" : ""}
                  >
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Main Dashboard Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Recent Activity</CardTitle>
              <CardDescription>Latest updates from your dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                <div className="h-3 w-3 bg-primary rounded-full"></div>
                <div>
                  <p className="font-medium">New user registration</p>
                  <p className="text-sm text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                <div className="h-3 w-3 bg-accent rounded-full"></div>
                <div>
                  <p className="font-medium">Revenue milestone reached</p>
                  <p className="text-sm text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                <div className="h-3 w-3 bg-secondary rounded-full"></div>
                <div>
                  <p className="font-medium">System update completed</p>
                  <p className="text-sm text-muted-foreground">3 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Users className="mr-3 h-5 w-5" />
                Add New User
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="mr-3 h-5 w-5" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-3 h-5 w-5" />
                Update Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;