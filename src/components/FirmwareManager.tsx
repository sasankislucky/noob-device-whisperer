
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Download, Upload, FileCode, RefreshCw, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const FirmwareManager = () => {
  const [activeTab, setActiveTab] = useState<"install" | "extract">("install");
  const [file, setFile] = useState<File | null>(null);
  const [installing, setInstalling] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const simulateInstallation = () => {
    if (!file) return;
    
    setInstalling(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setInstalling(false);
          toast({
            title: "Installation Complete",
            description: `Firmware ${file.name} has been successfully installed!`,
          });
          return 100;
        }
        
        return newProgress;
      });
    }, 300);
  };

  return (
    <Card className="border-border/50 bg-card/95 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-xl gradient-text">Firmware Manager</CardTitle>
        <CardDescription>Install or extract device firmware</CardDescription>
        
        <div className="flex mt-2 border rounded-lg overflow-hidden">
          <Button
            variant="ghost"
            className={`flex-1 rounded-none ${
              activeTab === "install" ? "bg-secondary" : ""
            }`}
            onClick={() => setActiveTab("install")}
          >
            <Upload className="h-4 w-4 mr-2" /> Install
          </Button>
          <Button
            variant="ghost"
            className={`flex-1 rounded-none ${
              activeTab === "extract" ? "bg-secondary" : ""
            }`}
            onClick={() => setActiveTab("extract")}
          >
            <Download className="h-4 w-4 mr-2" /> Extract
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {activeTab === "install" ? (
          <div className="space-y-4">
            <div className="border border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center">
              {file ? (
                <div className="space-y-2 w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileCode className="h-5 w-5 mr-2 text-primary" />
                      <div className="text-left">
                        <p className="text-sm font-medium truncate max-w-[180px]">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-400/20">
                      Ready
                    </Badge>
                  </div>
                  
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="w-full mt-2"
                    onClick={() => setFile(null)}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <>
                  <FileCode className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium">Drop firmware file here</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    or click to browse files
                  </p>
                  <input
                    type="file"
                    id="firmware-upload"
                    className="hidden"
                    accept=".bin,.hex,.ino,.elf"
                    onChange={handleFileChange}
                  />
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => document.getElementById("firmware-upload")?.click()}
                  >
                    Choose File
                  </Button>
                </>
              )}
            </div>

            {installing && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Installing firmware...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            <div className="space-y-1">
              <p className="text-sm font-medium">Installation Options</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Button variant="outline" size="sm" className="justify-start">
                  <RefreshCw className="h-3 w-3 mr-2" />
                  Verify after install
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <Check className="h-3 w-3 mr-2" />
                  Backup current firmware
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-48 text-center">
            <Download className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm font-medium">Extract Current Firmware</p>
            <p className="text-xs text-muted-foreground mb-4">
              Save your device's current firmware to your computer
            </p>
            <Button variant="outline" size="sm">
              Start Extraction
            </Button>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button 
          className={`w-full bg-gradient-device hover:opacity-90 transition-opacity ${
            !file && activeTab === "install" ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!file && activeTab === "install" || installing}
          onClick={activeTab === "install" ? simulateInstallation : undefined}
        >
          {installing ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Installing...
            </>
          ) : activeTab === "install" ? (
            "Install Firmware" 
          ) : (
            "Extract Firmware"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FirmwareManager;
