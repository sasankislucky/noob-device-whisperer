
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Microchip as MemoryIcon } from "lucide-react";

interface MemoryMapCardProps {
  hardware: {
    flash: string;
    sram: string;
    eeprom: string;
  };
}

const MemoryMapCard: React.FC<MemoryMapCardProps> = ({ hardware }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <MemoryIcon className="h-4 w-4 text-primary" />
          <CardTitle>Memory Map</CardTitle>
        </div>
        <CardDescription>Overview of memory allocation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Flash ({hardware.flash})</span>
              <span>78% used</span>
            </div>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: "78%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>SRAM ({hardware.sram})</span>
              <span>45% used</span>
            </div>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: "45%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>EEPROM ({hardware.eeprom})</span>
              <span>12% used</span>
            </div>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: "12%" }}></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemoryMapCard;
