
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CodeIcon, FileBinaryIcon, PackageIcon, EyeIcon, DownloadIcon } from "lucide-react";

// Mock binary data for visualization
const generateMockBinary = () => {
  const bytes = [];
  for (let i = 0; i < 256; i++) {
    bytes.push(Math.floor(Math.random() * 256).toString(16).padStart(2, '0'));
  }
  return bytes;
};

const mockBinaryData = generateMockBinary();

const ReverseEngineer = () => {
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleStartAnalysis = () => {
    setAnalyzing(true);
    // Simulate analysis process
    setTimeout(() => {
      setAnalysisComplete(true);
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <Card className="border-border/50 bg-card/95 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-xl gradient-text">Reverse Engineer</CardTitle>
        <CardDescription>Analyze and understand device firmware</CardDescription>
      </CardHeader>
      <CardContent>
        {!analysisComplete ? (
          <div className="space-y-4">
            <div className="bg-device-dark rounded-lg p-4 flex items-center space-x-4">
              <div className="bg-secondary/50 p-3 rounded-lg">
                <FileBinaryIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Firmware Analysis</h3>
                <p className="text-xs text-muted-foreground">
                  Extract symbols, functions, and data structures
                </p>
              </div>
            </div>

            <div className="bg-device-dark rounded-lg p-4 flex items-center space-x-4">
              <div className="bg-secondary/50 p-3 rounded-lg">
                <PackageIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Module Extraction</h3>
                <p className="text-xs text-muted-foreground">
                  Identify and isolate firmware modules
                </p>
              </div>
            </div>

            <div className="bg-device-dark rounded-lg p-4 flex items-center space-x-4">
              <div className="bg-secondary/50 p-3 rounded-lg">
                <CodeIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Code Reconstruction</h3>
                <p className="text-xs text-muted-foreground">
                  Generate pseudocode from binary analysis
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Tabs defaultValue="hex" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="hex">Hex View</TabsTrigger>
              <TabsTrigger value="modules">Modules</TabsTrigger>
              <TabsTrigger value="decompiled">Decompiled</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hex">
              <ScrollArea className="h-64 w-full rounded-md border terminal">
                <div className="grid grid-cols-17 gap-x-2 gap-y-1 font-mono text-xs">
                  <div className="text-muted-foreground">Address</div>
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="text-muted-foreground text-center">
                      {i.toString(16).padStart(2, '0')}
                    </div>
                  ))}
                  
                  {[...Array(16)].map((_, row) => (
                    <React.Fragment key={row}>
                      <div className="text-blue-400">
                        {(row * 16).toString(16).padStart(8, '0')}:
                      </div>
                      {[...Array(16)].map((_, col) => {
                        const index = row * 16 + col;
                        return (
                          <div key={col} className="text-green-300 text-center">
                            {mockBinaryData[index]}
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="modules">
              <ScrollArea className="h-64 w-full rounded-md border terminal">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">+</span>
                    <span>bootloader/</span>
                    <span className="ml-2 text-muted-foreground text-xs">0x0000 - 0x1FFF</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">+</span>
                    <span>kernel/</span>
                    <span className="ml-2 text-muted-foreground text-xs">0x2000 - 0x4FFF</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">+</span>
                    <span>drivers/</span>
                    <span className="ml-2 text-muted-foreground text-xs">0x5000 - 0x6FFF</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">+</span>
                    <span>application/</span>
                    <span className="ml-2 text-muted-foreground text-xs">0x7000 - 0xFFFF</span>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="decompiled">
              <ScrollArea className="h-64 w-full rounded-md border terminal">
                <pre className="text-xs">
{`void setup() {
  // Initialize serial communication
  Serial.begin(9600);
  
  // Configure GPIO pins
  pinMode(13, OUTPUT);
  pinMode(12, INPUT_PULLUP);
  
  // Initial LED state
  digitalWrite(13, LOW);
  
  // Setup timer interrupt
  Timer1.initialize(1000000);
  Timer1.attachInterrupt(timerCallback);
}

void loop() {
  // Main program loop
  if (digitalRead(12) == LOW) {
    // Button pressed
    digitalWrite(13, HIGH);
    delay(100);
    digitalWrite(13, LOW);
  }
  
  // Read sensor data
  int sensorValue = analogRead(A0);
  Serial.println(sensorValue);
  
  delay(500);
}`}
                </pre>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        {analysisComplete ? (
          <>
            <Button variant="outline" className="w-full gap-2">
              <EyeIcon className="h-4 w-4" />
              Advanced Analysis
            </Button>
            <Button className="w-full bg-gradient-device hover:opacity-90 transition-opacity gap-2">
              <DownloadIcon className="h-4 w-4" />
              Save Results
            </Button>
          </>
        ) : (
          <Button 
            className="w-full bg-gradient-device hover:opacity-90 transition-opacity"
            onClick={handleStartAnalysis}
            disabled={analyzing}
          >
            {analyzing ? (
              <>
                <CodeIcon className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Start Reverse Engineering"
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ReverseEngineer;
