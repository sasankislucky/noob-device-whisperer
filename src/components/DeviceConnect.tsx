
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UsbIcon, WifiIcon, BluetoothIcon, ScanIcon, PlusIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const connectionMethods = [
  { id: "usb", name: "USB", icon: UsbIcon },
  { id: "bluetooth", name: "Bluetooth", icon: BluetoothIcon },
  { id: "wifi", name: "Wi-Fi", icon: WifiIcon },
];

const DeviceConnect = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const { toast } = useToast();

  const handleConnect = () => {
    if (!selectedMethod) {
      toast({
        title: "Connection Method Required",
        description: "Please select a connection method first.",
        variant: "destructive",
      });
      return;
    }

    setScanning(true);
    toast({
      title: "Scanning for devices...",
      description: "This may take a few moments.",
    });

    // Simulate scanning delay
    setTimeout(() => {
      setScanning(false);
      toast({
        title: "No Devices Found",
        description: "Please ensure your device is powered on and in range.",
      });
    }, 3000);
  };

  return (
    <Card className="border-border/50 bg-card/95 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-xl gradient-text">Connect Device</CardTitle>
        <CardDescription>Select a connection method to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {connectionMethods.map((method) => (
            <Button
              key={method.id}
              variant={selectedMethod === method.id ? "default" : "outline"}
              className={`flex flex-col h-20 justify-center items-center gap-2 ${
                selectedMethod === method.id ? "border-primary" : "hover:border-primary/50"
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <method.icon className={`w-5 h-5 ${selectedMethod === method.id ? "text-primary-foreground" : ""}`} />
              <span className="text-xs">{method.name}</span>
            </Button>
          ))}
        </div>
        <div className="space-y-2 mt-4">
          <Button 
            variant="outline" 
            className="w-full justify-start text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <PlusIcon className="mr-2 h-4 w-4" />
            Manual Connection
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-gradient-device hover:opacity-90 transition-opacity" 
          onClick={handleConnect}
          disabled={scanning}
        >
          {scanning ? (
            <>
              <ScanIcon className="mr-2 h-4 w-4 animate-spin" />
              Scanning...
            </>
          ) : (
            "Scan for Devices"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DeviceConnect;
