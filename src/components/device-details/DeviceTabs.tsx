
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfoIcon, CpuIcon, ShieldIcon } from "lucide-react";
import InfoTab from "./InfoTab";
import PinsConfiguration from "./PinsConfiguration";
import SecurityFeatures from "./SecurityFeatures";

interface DeviceTabsProps {
  deviceData: {
    firmware: {
      version: string;
      date: string;
      bootloader: string;
      checksum: string;
    };
    hardware: {
      processor: string;
      architecture: string;
      clock: string;
      flash: string;
      sram: string;
      eeprom: string;
    };
    interfaces: string[];
    pins: {
      number: number;
      type: string;
      mode: string;
    }[];
  };
}

const DeviceTabs: React.FC<DeviceTabsProps> = ({ deviceData }) => {
  return (
    <Tabs defaultValue="info" className="space-y-4">
      <TabsList className="w-full md:w-auto">
        <TabsTrigger value="info" className="flex gap-2">
          <InfoIcon className="h-4 w-4" /> Information
        </TabsTrigger>
        <TabsTrigger value="pins" className="flex gap-2">
          <CpuIcon className="h-4 w-4" /> Pins & IO
        </TabsTrigger>
        <TabsTrigger value="security" className="flex gap-2">
          <ShieldIcon className="h-4 w-4" /> Security
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="info" className="space-y-4">
        <InfoTab 
          firmware={deviceData.firmware} 
          hardware={deviceData.hardware}
          interfaces={deviceData.interfaces}
        />
      </TabsContent>
      
      <TabsContent value="pins" className="space-y-4">
        <PinsConfiguration pins={deviceData.pins} />
      </TabsContent>
      
      <TabsContent value="security" className="space-y-4">
        <SecurityFeatures />
      </TabsContent>
    </Tabs>
  );
};

export default DeviceTabs;
