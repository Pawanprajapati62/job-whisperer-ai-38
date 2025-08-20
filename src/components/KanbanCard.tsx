import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

interface KanbanCardProps {
  id: string;
  title: string;
  company: string;
  status: string;
  date?: string;
  isDraggable?: boolean;
}

const KanbanCard = ({ title, company, status, date, isDraggable = true }: KanbanCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "to apply":
        return "bg-muted text-muted-foreground";
      case "applied":
        return "bg-info/10 text-info border-info/20";
      case "interview":
        return "bg-warning/10 text-warning border-warning/20";
      case "offer":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className={`kanban-card p-4 ${isDraggable ? 'cursor-grab' : ''}`}>
      <div className="space-y-3">
        <h4 className="text-sm font-medium line-clamp-2 text-foreground">
          {title}
        </h4>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <Building className="h-3 w-3 mr-1" />
          {company}
        </div>
        
        <div className="space-y-2">
          <Badge variant="outline" className={`text-xs ${getStatusColor(status)}`}>
            {status}
          </Badge>
          
          {date && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {date}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;