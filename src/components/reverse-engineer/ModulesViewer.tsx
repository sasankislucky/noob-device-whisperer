
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const ModulesViewer = () => {
  return (
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
  );
};

export default ModulesViewer;
