import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, HardDriveIcon, CpuIcon, Microchip as MemoryIcon, InfoIcon, SettingsIcon, ShieldIcon, UsbIcon } from "lucide-react";

const DeviceDetails = () => {
  // Mock device data
  const deviceData = {
    name: "Arduino Uno",
    type: "Microcontroller",
    status: "Ready",
    firmware: {
      version: "1.8.13",
      date: "2023-09-15",
      bootloader: "ATMEGA328P",
      checksum: "8a7b6c5d4e3f2g1h",
    },
    hardware: {
      processor: "ATmega328P",
      architecture: "AVR",
      clock: "16 MHz",
      flash: "32 KB",
      sram: "2 KB",
      eeprom: "1 KB",
    },
    interfaces: ["USB", "SPI", "I2C", "UART"],
    pins: [
      { number: 0, type: "Digital/RX", mode: "Serial" },
      { number: 1, type: "Digital/TX", mode: "Serial" },
      { number: 2, type: "Digital", mode: "INPUT" },
      { number: 3, type: "Digital/PWM", mode: "OUTPUT" },
      // ...more pins
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="p-0 mb-4 hover:bg-transparent">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Dashboard
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold gradient-text">{deviceData.name}</h1>
              <p className="text-muted-foreground">{deviceData.type} • Connected via USB</p>
            </div>
            
            <div className="flex items-center gap-2 mt-3 md:mt-0">
              <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">
                {deviceData.status}
              </Badge>
              <Button variant="outline" size="icon">
                <SettingsIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
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
            <div className="grid gap-4 md:grid-cols-2">
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
                    <span className="text-sm col-span-2">{deviceData.firmware.version}</span>
                    
                    <span className="text-sm text-muted-foreground">Date</span>
                    <span className="text-sm col-span-2">{deviceData.firmware.date}</span>
                    
                    <span className="text-sm text-muted-foreground">Bootloader</span>
                    <span className="text-sm col-span-2">{deviceData.firmware.bootloader}</span>
                    
                    <span className="text-sm text-muted-foreground">Checksum</span>
                    <span className="text-sm font-mono text-xs col-span-2">{deviceData.firmware.checksum}</span>
                  </div>
                </CardContent>
              </Card>
              
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
                    <span className="text-sm col-span-2">{deviceData.hardware.processor}</span>
                    
                    <span className="text-sm text-muted-foreground">Architecture</span>
                    <span className="text-sm col-span-2">{deviceData.hardware.architecture}</span>
                    
                    <span className="text-sm text-muted-foreground">Clock</span>
                    <span className="text-sm col-span-2">{deviceData.hardware.clock}</span>
                    
                    <span className="text-sm text-muted-foreground">Flash</span>
                    <span className="text-sm col-span-2">{deviceData.hardware.flash}</span>
                    
                    <span className="text-sm text-muted-foreground">SRAM</span>
                    <span className="text-sm col-span-2">{deviceData.hardware.sram}</span>
                    
                    <span className="text-sm text-muted-foreground">EEPROM</span>
                    <span className="text-sm col-span-2">{deviceData.hardware.eeprom}</span>
                  </div>
                </CardContent>
              </Card>
              
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
                    {deviceData.interfaces.map((interface_) => (
                      <Badge key={interface_} variant="outline">
                        {interface_}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
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
                        <span>Flash (32KB)</span>
                        <span>78% used</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>SRAM (2KB)</span>
                        <span>45% used</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>EEPROM (1KB)</span>
                        <span>12% used</span>
                      </div>
                      <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="pins" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pin Configuration</CardTitle>
                <CardDescription>View and control input/output pins</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {deviceData.pins.slice(0, 4).map((pin) => (
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
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4">
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DeviceDetails;
