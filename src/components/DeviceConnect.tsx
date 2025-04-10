
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UsbIcon, WifiIcon, BluetoothIcon, ScanIcon, PlusIcon, InfoIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Define connection methods with platform compatibility info
const connectionMethods = [
  { 
    id: "usb", 
    name: "USB", 
    icon: UsbIcon, 
    platforms: ["windows", "linux"]
  },
  { 
    id: "bluetooth", 
    name: "Bluetooth", 
    icon: BluetoothIcon, 
    platforms: ["windows", "linux"]  
  },
  { 
    id: "wifi", 
    name: "Wi-Fi", 
    icon: WifiIcon,
    platforms: ["windows", "linux"] 
  },
];

const DeviceConnect = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [platform, setPlatform] = useState<string>("unknown");
  const { toast } = useToast();

  // Detect platform on component mount
  useEffect(() => {
    const detectPlatform = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf("win") !== -1) return "windows";
      if (userAgent.indexOf("linux") !== -1) return "linux";
      return "unknown";
    };
    
    setPlatform(detectPlatform());
  }, []);

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
      description: `Looking for devices via ${selectedMethod} on ${platform}...`,
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

  // Get available connection methods for current platform
  const availableMethods = connectionMethods.filter(method => 
    method.platforms.includes(platform) || platform === "unknown"
  );

  return (
    <Card className="border-border/50 bg-card/95 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-xl gradient-text">Connect Device</CardTitle>
        <CardDescription>
          {platform !== "unknown" 
            ? `Select a connection method for ${platform.charAt(0).toUpperCase() + platform.slice(1)}`
            : "Select a connection method to get started"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {platform === "unknown" && (
          <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-md">
            <div className="flex items-start">
              <InfoIcon className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-300">
                Unable to detect your operating system. All connection methods are shown.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-2 mb-4">
          {availableMethods.map((method) => (
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
