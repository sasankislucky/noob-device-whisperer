
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeIcon, EyeIcon, DownloadIcon } from "lucide-react";
import AnalysisOptions from "./reverse-engineer/AnalysisOptions";
import AnalysisResults from "./reverse-engineer/AnalysisResults";
import { generateMockBinary } from "@/utils/mockData";

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
          <AnalysisOptions />
        ) : (
          <AnalysisResults binaryData={mockBinaryData} />
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
