
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InfoIcon, HardDriveIcon, CpuIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Mock device data - in a real app, this would come from your device API
const mockDeviceData = {
  name: "Arduino Uno",
  type: "Microcontroller",
  status: "Ready",
  firmware: {
    version: "1.8.13",
    date: "2023-09-15",
  },
  hardware: {
    processor: "ATmega328P",
    flash: "32 KB",
    sram: "2 KB",
    eeprom: "1 KB",
  },
  interfaces: ["USB", "SPI", "I2C", "UART"],
};

interface DeviceInfoProps {
  demoMode?: boolean;
}

const DeviceInfo = ({ demoMode = true }: DeviceInfoProps) => {
  // In a real app, you'd fetch this data from the actual device
  const deviceData = mockDeviceData;

  return (
    <Card className="border-border/50 bg-card/95 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl">
            <span className="gradient-text">Device Information</span>
          </CardTitle>
          <CardDescription>
            View your connected device details
          </CardDescription>
        </div>
        {demoMode && (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500/20 bg-yellow-500/10">
            Demo Mode
          </Badge>
        )}
      </CardHeader>
      <CardContent className="pt-4">
        {!demoMode ? (
          <div className="flex flex-col items-center justify-center h-40 text-center">
            <InfoIcon className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-muted-foreground">No device connected</p>
            <p className="text-sm text-muted-foreground">Connect a device to view its information</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-medium">{deviceData.name}</h3>
                <p className="text-sm text-muted-foreground">{deviceData.type}</p>
              </div>
              <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">
                {deviceData.status}
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm font-medium">
                  <HardDriveIcon className="h-4 w-4 mr-2 text-primary" />
                  Firmware
                </div>
                <div className="grid grid-cols-2 gap-1 pl-6 text-sm">
                  <span className="text-muted-foreground">Version:</span>
                  <span>{deviceData.firmware.version}</span>
                  <span className="text-muted-foreground">Updated:</span>
                  <span>{deviceData.firmware.date}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm font-medium">
                  <CpuIcon className="h-4 w-4 mr-2 text-primary" />
                  Hardware
                </div>
                <div className="grid grid-cols-2 gap-1 pl-6 text-sm">
                  <span className="text-muted-foreground">CPU:</span>
                  <span>{deviceData.hardware.processor}</span>
                  <span className="text-muted-foreground">Flash:</span>
                  <span>{deviceData.hardware.flash}</span>
                  <span className="text-muted-foreground">SRAM:</span>
                  <span>{deviceData.hardware.sram}</span>
                </div>
              </div>
            </div>
            
            <Link 
              to="/device/details" 
              className="flex items-center justify-between w-full mt-4 py-2 px-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <span className="text-sm">View Full Device Details</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DeviceInfo;
