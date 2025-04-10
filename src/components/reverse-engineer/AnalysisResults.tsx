
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BinaryViewer from "./BinaryViewer";
import ModulesViewer from "./ModulesViewer";
import DecompiledView from "./DecompiledView";

interface AnalysisResultsProps {
  binaryData: string[];
}

const AnalysisResults = ({ binaryData }: AnalysisResultsProps) => {
  return (
    <Tabs defaultValue="hex" className="w-full">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="hex">Hex View</TabsTrigger>
        <TabsTrigger value="modules">Modules</TabsTrigger>
        <TabsTrigger value="decompiled">Decompiled</TabsTrigger>
      </TabsList>
      
      <TabsContent value="hex">
        <BinaryViewer binaryData={binaryData} />
      </TabsContent>
      
      <TabsContent value="modules">
        <ModulesViewer />
      </TabsContent>
      
      <TabsContent value="decompiled">
        <DecompiledView />
      </TabsContent>
    </Tabs>
  );
};

export default AnalysisResults;
