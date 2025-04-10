
import React from "react";
import DeviceHeader from "@/components/device-details/DeviceHeader";
import DeviceTabs from "@/components/device-details/DeviceTabs";
import { deviceData } from "@/utils/mockData";

const DeviceDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <DeviceHeader 
          name={deviceData.name}
          type={deviceData.type}
          status={deviceData.status}
        />
        
        <DeviceTabs deviceData={deviceData} />
      </div>
    </div>
  );
};

export default DeviceDetails;
