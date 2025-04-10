
import React from "react";
import { CodeIcon, Binary as FileBinaryIcon, PackageIcon } from "lucide-react";

const AnalysisOptions = () => {
  return (
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
  );
};

export default AnalysisOptions;
