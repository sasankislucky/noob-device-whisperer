
import React from "react";
import FirmwareCard from "./FirmwareCard";
import HardwareCard from "./HardwareCard";
import InterfacesCard from "./InterfacesCard";
import MemoryMapCard from "./MemoryMapCard";

interface InfoTabProps {
  firmware: {
    version: string;
    date: string;
    bootloader: string;
    checksum: string;
  };
  hardware: {
    processor: string;
    architecture: string;
    clock: string;
    flash: string;
    sram: string;
    eeprom: string;
  };
  interfaces: string[];
}

const InfoTab: React.FC<InfoTabProps> = ({ firmware, hardware, interfaces }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FirmwareCard firmware={firmware} />
      <HardwareCard hardware={hardware} />
      <InterfacesCard interfaces={interfaces} />
      <MemoryMapCard hardware={hardware} />
    </div>
  );
};

export default InfoTab;
