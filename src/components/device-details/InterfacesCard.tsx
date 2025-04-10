
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UsbIcon } from "lucide-react";

interface InterfacesCardProps {
  interfaces: string[];
}

const InterfacesCard: React.FC<InterfacesCardProps> = ({ interfaces }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <UsbIcon className="h-4 w-4 text-primary" />
          <CardTitle>Interfaces</CardTitle>
        </div>
        <CardDescription>Available communication interfaces</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {interfaces.map((interface_) => (
            <Badge key={interface_} variant="outline">
              {interface_}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InterfacesCard;
