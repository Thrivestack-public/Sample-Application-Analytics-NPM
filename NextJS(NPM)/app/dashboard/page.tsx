"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Activity, 
  Plus, 
  Settings, 
  Bell,
  Search,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';
import Navigation from '@/components/ui/navigation';

const statsCards = [
  {
    title: "Total Projects",
    value: "12",
    change: "+2.5%",
    changeType: "positive" as const,
    icon: BarChart3,
    description: "Active projects"
  },
  {
    title: "Team Members",
    value: "8",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
    description: "Across all projects"
  },
  {
    title: "Completion Rate",
    value: "94%",
    change: "+5.2%",
    changeType: "positive" as const,
    icon: TrendingUp,
    description: "This month"
  },
  {
    title: "Active Tasks",
    value: "23",
    change: "-3%",
    changeType: "negative" as const,
    icon: Activity,
    description: "Due this week"
  }
];

const recentActivities = [
  { id: 1, action: "Project Alpha milestone completed", time: "2 hours ago", type: "success" },
  { id: 2, action: "New team member added to Beta project", time: "4 hours ago", type: "info" },
  { id: 3, action: "Task deadline approaching", time: "6 hours ago", type: "warning" },
  { id: 4, action: "Weekly report generated", time: "1 day ago", type: "info" },
  { id: 5, action: "Client feedback received", time: "2 days ago", type: "success" }
];

const projects = [
  { 
    id: 1, 
    name: "Project Alpha", 
    progress: 85, 
    status: "On Track", 
    team: 4, 
    deadline: "Dec 15, 2024",
    priority: "high"
  },
  { 
    id: 2, 
    name: "Beta Launch", 
    progress: 62, 
    status: "In Progress", 
    team: 6, 
    deadline: "Jan 20, 2025",
    priority: "medium"
  },
  { 
    id: 3, 
    name: "Mobile App", 
    progress: 31, 
    status: "Planning", 
    team: 3, 
    deadline: "Mar 10, 2025",
    priority: "low"
  }
];

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("overview");

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default: return <Activity className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your projects.</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Bell className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-gray-900 hover:bg-gray-800 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>New Project</span>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <div className="flex items-center space-x-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        stat.changeType === 'positive' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-gray-500">{stat.description}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <Card className="lg:col-span-2 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Activity</span>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                  <CardDescription>Latest updates from your projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="mt-1">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900 font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks you might want to do</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Project
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    Invite Team Member
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Project Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <Badge className={getPriorityColor(project.priority)}>
                        {project.priority}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{project.team} members</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{project.deadline}</span>
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm text-gray-500">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {project.status}
                        </Badge>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                          <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Project Completion Trends</CardTitle>
                  <CardDescription>Monthly completion rates over the past 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                      <p>Chart visualization would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Team Performance</CardTitle>
                  <CardDescription>Individual and team metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Alex Johnson', 'Sarah Wilson', 'Mike Chen', 'Emma Davis'].map((name, index) => (
                      <div key={name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-white">{name.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <span className="font-medium text-gray-900">{name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium">{(4.8 - index * 0.1).toFixed(1)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}