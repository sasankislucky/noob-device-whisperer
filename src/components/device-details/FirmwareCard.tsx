
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HardDriveIcon } from "lucide-react";

interface FirmwareCardProps {
  firmware: {
    version: string;
    date: string;
    bootloader: string;
    checksum: string;
  };
}

const FirmwareCard: React.FC<FirmwareCardProps> = ({ firmware }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <HardDriveIcon className="h-4 w-4 text-primary" />
          <CardTitle>Firmware</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-y-2">
          <span className="text-sm text-muted-foreground">Version</span>
          <span className="text-sm col-span-2">{firmware.version}</span>
          
          <span className="text-sm text-muted-foreground">Date</span>
          <span className="text-sm col-span-2">{firmware.date}</span>
          
          <span className="text-sm text-muted-foreground">Bootloader</span>
          <span className="text-sm col-span-2">{firmware.bootloader}</span>
          
          <span className="text-sm text-muted-foreground">Checksum</span>
          <span className="text-sm font-mono text-xs col-span-2">{firmware.checksum}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FirmwareCard;
