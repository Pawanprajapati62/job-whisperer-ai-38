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
    <div className="job-card group">
      <div className="space-y-4">
        {isRecommended && (
          <Badge className="bg-primary text-primary-foreground">
            Recommended for You
          </Badge>
        )}
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Building className="h-4 w-4" />
              <span>{company}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs bg-muted">
            {type}
          </Badge>
          {salary && (
            <Badge variant="secondary" className="text-xs bg-accent">
              <DollarSign className="h-3 w-3 mr-1" />
              {salary}
            </Badge>
          )}
        </div>
        
        {postedDate && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>Posted: {postedDate}</span>
          </div>
        )}
        
        <Button 
          onClick={onApply}
          className="w-full btn-modern"
        >
          Apply now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;