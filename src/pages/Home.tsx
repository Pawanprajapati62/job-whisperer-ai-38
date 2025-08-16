import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import JobCard from "@/components/JobCard";
import { Filter, Search } from "lucide-react";

const Home = () => {
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [location, setLocation] = useState("");

  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Innovate Solutions",
      location: "Remote, Global",
      description: "Develop and maintain visual user interfaces using React, TypeScript, and modern web technologies.",
      type: "Full-time",
      salary: "$80k-$120k",
      postedDate: "2 days ago"
    },
    {
      id: 2,
      title: "Backend Engineer (Python)",
      company: "DataStream Analytics",
      location: "Austin, TX",
      description: "Design, build, and manage scalable backend services and APIs for our data analytics platform.",
      type: "Full-time",
      salary: "$90k-$140k",
      postedDate: "1 day ago"
    },
    {
      id: 3,
      title: "Product Designer (UI/UX)",
      company: "Creative Minds Studio",
      location: "New York, NY",
      description: "Lead the design process from concept to execution, creating intuitive and beautiful user experiences.",
      type: "Full-time",
      salary: "$70k-$100k",
      postedDate: "3 days ago"
    },
    {
      id: 4,
      title: "DevOps Specialist",
      company: "CloudTech Infrastructure",
      location: "Seattle, WA",
      description: "Automate and streamline our operations and processes, deploy and monitor infrastructure innovations.",
      type: "Full-time",
      salary: "$95k-$130k",
      postedDate: "1 day ago"
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "AI Insights Corp",
      location: "Boston, MA",
      description: "Analyze large datasets to extract insights and build predictive models using machine learning techniques.",
      type: "Full-time",
      salary: "$100k-$150k",
      postedDate: "4 days ago"
    },
    {
      id: 6,
      title: "Quality Assurance Engineer",
      company: "TestFirst Solutions",
      location: "Dallas, TX",
      description: "Design, develop, and execute comprehensive test cases. Build testing automation framework for web applications.",
      type: "Full-time",
      salary: "$65k-$90k",
      postedDate: "2 days ago"
    },
    {
      id: 7,
      title: "Marketing Manager",
      company: "GrowthHack Agency",
      location: "Los Angeles, CA",
      description: "Develop and execute integrated marketing campaigns across multiple channels to drive brand awareness.",
      type: "Full-time",
      salary: "$70k-$95k",
      postedDate: "5 days ago"
    },
    {
      id: 8,
      title: "Technical Writer",
      company: "DocuTech Inc",
      location: "San Jose, CA",
      description: "Create clear, concise, and comprehensive documentation for software products and technical processes.",
      type: "Contract",
      salary: "$50k-$75k",
      postedDate: "1 day ago"
    }
  ];

  const handleClearFilters = () => {
    setJobType("");
    setSalaryRange("");
    setLocation("");
  };

  const handleApplyFilters = () => {
    // Implementation for filtering would go here
    console.log("Applying filters:", { jobType, salaryRange, location });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Find Your Dream Job
          </h1>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger>
                  <SelectValue placeholder="Full-time, Part-time..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={salaryRange} onValueChange={setSalaryRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Any salary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="40k-60k">$40k - $60k</SelectItem>
                  <SelectItem value="60k-80k">$60k - $80k</SelectItem>
                  <SelectItem value="80k-100k">$80k - $100k</SelectItem>
                  <SelectItem value="100k+">$100k+</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="new-york">New York, NY</SelectItem>
                  <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                  <SelectItem value="austin">Austin, TX</SelectItem>
                  <SelectItem value="seattle">Seattle, WA</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleClearFilters} className="flex-1">
                  Clear Filters
                </Button>
                <Button onClick={handleApplyFilters} className="flex-1 btn-glow">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Recent Job Openings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobListings.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                description={job.description}
                type={job.type}
                salary={job.salary}
                postedDate={job.postedDate}
                onApply={() => console.log(`Applied to ${job.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ by WorkWarden
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;