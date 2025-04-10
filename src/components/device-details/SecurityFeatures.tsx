
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShieldIcon } from "lucide-react";

const SecurityFeatures: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Features</CardTitle>
        <CardDescription>Device protection and secure access</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
            <p className="text-yellow-500 text-sm">
              Security analysis for this device is limited in demo mode. Connect a real device to access full security features.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShieldIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Bootloader Protection</span>
              </div>
              <Badge variant="outline" className="text-red-500">Disabled</Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShieldIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Fuse Protection</span>
              </div>
              <Badge variant="outline" className="text-green-500">Enabled</Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShieldIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Memory Lock</span>
              </div>
              <Badge variant="outline" className="text-red-500">Disabled</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityFeatures;
