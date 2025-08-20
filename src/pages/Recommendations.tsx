import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import JobCard from "@/components/JobCard";
import { Upload, X, Plus, Sparkles, Filter } from "lucide-react";

const Recommendations = () => {
  const [skills, setSkills] = useState(["Python", "JavaScript", "React", "AWS"]);
  const [newSkill, setNewSkill] = useState("");
  const [relevance, setRelevance] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [location, setLocation] = useState("");

  const recommendedJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechForward Inc.",
      location: "Remote, USA",
      description: "Lead development of cutting-edge React applications with TypeScript, focusing on performance optimization and user experience.",
      type: "Full-time",
      salary: "$110k-$140k",
      postedDate: "1 day ago",
      isRecommended: true
    },
    {
      id: 2,
      title: "Full Stack Python Developer",
      company: "DataFlow Solutions",
      location: "San Francisco, CA",
      description: "Build and maintain scalable web applications using Python, Django, and modern frontend frameworks.",
      type: "Full-time",
      salary: "$120k-$160k",
      postedDate: "2 days ago",
      isRecommended: true
    },
    {
      id: 3,
      title: "Cloud Engineer (AWS)",
      company: "CloudTech Innovations",
      location: "Austin, TX",
      description: "Design and implement cloud infrastructure solutions using AWS services, focusing on scalability and security.",
      type: "Full-time",
      salary: "$100k-$130k",
      postedDate: "3 days ago",
      isRecommended: true
    },
    {
      id: 4,
      title: "JavaScript Developer",
      company: "WebDev Pro",
      location: "Remote, Global",
      description: "Develop interactive web applications using modern JavaScript frameworks and libraries.",
      type: "Contract",
      salary: "$80k-$110k",
      postedDate: "1 day ago",
      isRecommended: true
    },
    {
      id: 5,
      title: "Frontend Engineer (React)",
      company: "NextGen Apps",
      location: "New York, NY",
      description: "Create responsive and accessible user interfaces using React, Redux, and modern CSS frameworks.",
      type: "Full-time",
      salary: "$95k-$125k",
      postedDate: "4 days ago",
      isRecommended: true
    },
    {
      id: 6,
      title: "Python Backend Developer",
      company: "ServerCraft Systems",
      location: "Seattle, WA",
      description: "Build robust APIs and microservices using Python, FastAPI, and cloud technologies.",
      type: "Full-time",
      salary: "$105k-$135k",
      postedDate: "2 days ago",
      isRecommended: true
    }
  ];

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addSkill();
    }
  };

  const handleGenerateRecommendations = () => {
    console.log("Generating recommendations with skills:", skills);
  };

  const handleClearFilters = () => {
    setRelevance("");
    setSalaryRange("");
    setLocation("");
  };

  return (
    <div className="clean-container">
      <Navigation isAuthenticated={true} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center">
            <Sparkles className="h-8 w-8 mr-3 text-primary" />
            AI Job Recommendations
          </h1>
          <p className="text-muted-foreground">Get personalized job recommendations based on your skills and resume</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Personalization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Skills Section */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Skills</label>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a skill and press Enter"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="text-sm"
                      />
                      <Button size="sm" onClick={addSkill} variant="outline">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="flex items-center gap-1 px-2 py-1"
                        >
                          {skill}
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-1 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Resume Analyzer</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drop your resume here or click to upload
                    </p>
                    <Button variant="outline" size="sm">
                      Upload Resume
                    </Button>
                  </div>
                </div>

                {/* Filters */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Filter By</label>
                  <div className="space-y-3">
                    <Select value={relevance} onValueChange={setRelevance}>
                      <SelectTrigger>
                        <SelectValue placeholder="Relevance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High Relevance</SelectItem>
                        <SelectItem value="medium">Medium Relevance</SelectItem>
                        <SelectItem value="all">All Jobs</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={salaryRange} onValueChange={setSalaryRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Salary Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="60k-80k">$60k - $80k</SelectItem>
                        <SelectItem value="80k-100k">$80k - $100k</SelectItem>
                        <SelectItem value="100k-120k">$100k - $120k</SelectItem>
                        <SelectItem value="120k+">$120k+</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                        <SelectItem value="new-york">New York, NY</SelectItem>
                        <SelectItem value="austin">Austin, TX</SelectItem>
                        <SelectItem value="seattle">Seattle, WA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button 
                    onClick={handleGenerateRecommendations}
                    className="w-full btn-modern"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Recommendations
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleClearFilters}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Job Recommendations */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">Jobs Recommended for You</h2>
              <p className="text-sm text-muted-foreground">
                Based on your skills: {skills.join(", ")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedJobs.map((job) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  description={job.description}
                  type={job.type}
                  salary={job.salary}
                  postedDate={job.postedDate}
                  isRecommended={job.isRecommended}
                  onApply={() => console.log(`Applied to ${job.title}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recommendations;