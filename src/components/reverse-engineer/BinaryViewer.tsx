
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BinaryViewerProps {
  binaryData: string[];
}

const BinaryViewer = ({ binaryData }: BinaryViewerProps) => {
  return (
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
                  {binaryData[index]}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
};

export default BinaryViewer;
