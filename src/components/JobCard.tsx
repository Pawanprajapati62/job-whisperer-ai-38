import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, Clock, DollarSign } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
  salary?: string;
  postedDate?: string;
  isRecommended?: boolean;
  onApply?: () => void;
}

const JobCard = ({
  title,
  company,
  location,
  description,
  type,
  salary,
  postedDate,
  isRecommended = false,
  onApply
}: JobCardProps) => {
  return (
    <Card className="job-card group h-full flex flex-col">
      <CardHeader className="pb-3">
        {isRecommended && (
          <Badge variant="secondary" className="w-fit mb-2 bg-primary/10 text-primary border-primary/20">
            Recommended for You
          </Badge>
        )}
        <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="flex items-center text-muted-foreground">
          <Building className="h-4 w-4 mr-1" />
          {company}
          <span className="mx-2">•</span>
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 pb-3">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className="text-xs">
            {type}
          </Badge>
          {salary && (
            <Badge variant="outline" className="text-xs">
              <DollarSign className="h-3 w-3 mr-1" />
              {salary}
            </Badge>
          )}
        </div>
        
        {postedDate && (
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            Posted: {postedDate}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          onClick={onApply}
          className="w-full btn-glow group-hover:shadow-lg transition-all duration-300"
          size="sm"
        >
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;