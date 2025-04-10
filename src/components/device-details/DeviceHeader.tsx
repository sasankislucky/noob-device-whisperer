
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, SettingsIcon } from "lucide-react";

interface DeviceHeaderProps {
  name: string;
  type: string;
  status: string;
}

const DeviceHeader: React.FC<DeviceHeaderProps> = ({ name, type, status }) => {
  return (
    <div className="mb-6">
      <Link to="/">
        <Button variant="ghost" className="p-0 mb-4 hover:bg-transparent">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Dashboard
        </Button>
      </Link>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold gradient-text">{name}</h1>
          <p className="text-muted-foreground">{type} • Connected via USB</p>
        </div>
        
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">
            {status}
          </Badge>
          <Button variant="outline" size="icon">
            <SettingsIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeviceHeader;
