
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Pin {
  number: number;
  type: string;
  mode: string;
}

interface PinsConfigurationProps {
  pins: Pin[];
}

const PinsConfiguration: React.FC<PinsConfigurationProps> = ({ pins }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pin Configuration</CardTitle>
        <CardDescription>View and control input/output pins</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            {pins.slice(0, 4).map((pin) => (
              <div key={pin.number} className="flex items-center justify-between p-2 bg-card rounded-md border border-border/50">
                <div>
                  <span className="text-sm font-medium">Pin {pin.number}</span>
                  <p className="text-xs text-muted-foreground">{pin.type}</p>
                </div>
                <Badge variant="outline">{pin.mode}</Badge>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {/* Additional pins would go here */}
            <div className="flex items-center justify-center h-full text-center p-4 border border-dashed border-border rounded-md">
              <p className="text-sm text-muted-foreground">
                More pins would be shown here in a fully implemented app
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PinsConfiguration;
