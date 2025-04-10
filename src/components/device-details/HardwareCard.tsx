
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CpuIcon } from "lucide-react";

interface HardwareCardProps {
  hardware: {
    processor: string;
    architecture: string;
    clock: string;
    flash: string;
    sram: string;
    eeprom: string;
  };
}

const HardwareCard: React.FC<HardwareCardProps> = ({ hardware }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <CpuIcon className="h-4 w-4 text-primary" />
          <CardTitle>Hardware</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-y-2">
          <span className="text-sm text-muted-foreground">Processor</span>
          <span className="text-sm col-span-2">{hardware.processor}</span>
          
          <span className="text-sm text-muted-foreground">Architecture</span>
          <span className="text-sm col-span-2">{hardware.architecture}</span>
          
          <span className="text-sm text-muted-foreground">Clock</span>
          <span className="text-sm col-span-2">{hardware.clock}</span>
          
          <span className="text-sm text-muted-foreground">Flash</span>
          <span className="text-sm col-span-2">{hardware.flash}</span>
          
          <span className="text-sm text-muted-foreground">SRAM</span>
          <span className="text-sm col-span-2">{hardware.sram}</span>
          
          <span className="text-sm text-muted-foreground">EEPROM</span>
          <span className="text-sm col-span-2">{hardware.eeprom}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default HardwareCard;
