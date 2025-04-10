
import React from "react";
import Header from "@/components/Header";
import DeviceConnect from "@/components/DeviceConnect";
import DeviceInfo from "@/components/DeviceInfo";
import FirmwareManager from "@/components/FirmwareManager";
import ReverseEngineer from "@/components/ReverseEngineer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Device Whisperer</h1>
        <p className="text-muted-foreground mb-6">
          The ultimate interface for device management and reverse engineering
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DeviceConnect />
          <DeviceInfo />
          <FirmwareManager />
          <ReverseEngineer />
        </div>
      </main>
    </div>
  );
};

export default Index;
