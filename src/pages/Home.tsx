import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import JobCard from "@/components/JobCard";
import { Filter, Search } from "lucide-react";
import { locationData, getCurrencySymbol } from "@/hooks/useLocationData";

const Home = () => {
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

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
    setCountry("");
    setState("");
  };

  const handleApplyFilters = () => {
    // Implementation for filtering would go here
    console.log("Applying filters:", { jobType, salaryRange, country, state });
  };

  const selectedCountryData = country ? locationData.countries[country] : null;
  const currencySymbol = selectedCountryData ? getCurrencySymbol(selectedCountryData.currency) : "$";

  return (
    <div className="clean-container">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover opportunities that match your skills and ambitions
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="search-bar max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger className="border-border">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={salaryRange} onValueChange={setSalaryRange}>
                <SelectTrigger className="border-border">
                  <SelectValue placeholder="Salary Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="40k-60k">{currencySymbol}40k - {currencySymbol}60k</SelectItem>
                  <SelectItem value="60k-80k">{currencySymbol}60k - {currencySymbol}80k</SelectItem>
                  <SelectItem value="80k-100k">{currencySymbol}80k - {currencySymbol}100k</SelectItem>
                  <SelectItem value="100k-150k">{currencySymbol}100k - {currencySymbol}150k</SelectItem>
                  <SelectItem value="150k+">{currencySymbol}150k+</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={country} onValueChange={(value) => { setCountry(value); setState(""); }}>
                <SelectTrigger className="border-border">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(locationData.countries).map(([key, countryData]) => (
                    <SelectItem key={key} value={key}>
                      {countryData.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={state} onValueChange={setState} disabled={!country || !selectedCountryData?.states}>
                <SelectTrigger className="border-border">
                  <SelectValue placeholder={country ? "State/Region" : "Select country first"} />
                </SelectTrigger>
                <SelectContent>
                  {selectedCountryData?.states?.map((stateName) => (
                    <SelectItem key={stateName} value={stateName}>
                      {stateName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline" onClick={handleClearFilters} size="sm" className="border-border">
                Clear
              </Button>
              <Button onClick={handleApplyFilters} size="sm" className="btn-modern">
                Apply now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Recent Job Openings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <footer className="bg-card border-t border-border py-12 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 WorkWarden. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;