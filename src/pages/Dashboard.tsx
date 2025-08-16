import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import KanbanCard from "@/components/KanbanCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Briefcase, Calendar, CheckCircle, Clock } from "lucide-react";

const Dashboard = () => {
  const [applications] = useState({
    toApply: [
      { id: "1", title: "Software Engineer", company: "Tech Solutions Inc.", status: "To Apply", date: "Not Applied Yet" },
      { id: "2", title: "Frontend Developer", company: "WebCorp", status: "To Apply", date: "Not Applied Yet" }
    ],
    applied: [
      { id: "3", title: "Backend Developer", company: "ServerTech", status: "Applied", date: "2024-07-10" },
      { id: "4", title: "Full Stack Developer", company: "CodeBase", status: "Applied", date: "2024-07-08" },
      { id: "5", title: "React Developer", company: "FrontendPro", status: "Applied", date: "2024-07-05" }
    ],
    interview: [
      { id: "6", title: "Senior Developer", company: "Innovation Labs", status: "Interview", date: "2024-07-15" },
      { id: "7", title: "Lead Engineer", company: "TechStart", status: "Interview", date: "2024-07-12" }
    ],
    offer: [
      { id: "8", title: "Principal Engineer", company: "BigTech Corp", status: "Offer", date: "2024-07-18" }
    ]
  });

  const stats = [
    {
      title: "Total Applications",
      value: "7",
      icon: Briefcase,
      color: "text-info"
    },
    {
      title: "Total Interviews",
      value: "3",
      icon: Calendar,
      color: "text-warning"
    },
    {
      title: "Offers Received",
      value: "1",
      icon: CheckCircle,
      color: "text-success"
    }
  ];

  const chartData = [
    { name: "To Apply", count: applications.toApply.length, fill: "hsl(var(--muted-foreground))" },
    { name: "Applied", count: applications.applied.length, fill: "hsl(var(--info))" },
    { name: "Interview", count: applications.interview.length, fill: "hsl(var(--warning))" },
    { name: "Offer", count: applications.offer.length, fill: "hsl(var(--success))" }
  ];

  return (
    <div className="min-h-screen dashboard-theme bg-background">
      <Navigation isAuthenticated={true} isDashboard={true} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">Track your job applications and progress</p>
        </div>

        {/* Analytics Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Analytics Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-card border-border">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-card-foreground">
                      {stat.title}
                    </CardTitle>
                    <IconComponent className={`h-5 w-5 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Application Status Distribution Chart */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Application Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, count }) => `${name}: ${count}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Kanban Board */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Application Kanban Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* To Apply Column */}
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-card-foreground">To Apply</h3>
                <Badge variant="secondary" className="bg-muted text-muted-foreground">
                  {applications.toApply.length}
                </Badge>
              </div>
              <div className="space-y-3">
                {applications.toApply.map((app) => (
                  <KanbanCard
                    key={app.id}
                    id={app.id}
                    title={app.title}
                    company={app.company}
                    status={app.status}
                    date={app.date}
                  />
                ))}
              </div>
            </div>

            {/* Applied Column */}
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-card-foreground">Applied</h3>
                <Badge variant="secondary" className="bg-info/10 text-info border-info/20">
                  {applications.applied.length}
                </Badge>
              </div>
              <div className="space-y-3">
                {applications.applied.map((app) => (
                  <KanbanCard
                    key={app.id}
                    id={app.id}
                    title={app.title}
                    company={app.company}
                    status={app.status}
                    date={app.date}
                  />
                ))}
              </div>
            </div>

            {/* Interview Column */}
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-card-foreground">Interview</h3>
                <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
                  {applications.interview.length}
                </Badge>
              </div>
              <div className="space-y-3">
                {applications.interview.map((app) => (
                  <KanbanCard
                    key={app.id}
                    id={app.id}
                    title={app.title}
                    company={app.company}
                    status={app.status}
                    date={app.date}
                  />
                ))}
              </div>
            </div>

            {/* Offer Column */}
            <div className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-card-foreground">Offer</h3>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  {applications.offer.length}
                </Badge>
              </div>
              <div className="space-y-3">
                {applications.offer.map((app) => (
                  <KanbanCard
                    key={app.id}
                    id={app.id}
                    title={app.title}
                    company={app.company}
                    status={app.status}
                    date={app.date}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;