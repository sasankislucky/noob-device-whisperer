
// Generate mock binary data for visualization
export const generateMockBinary = () => {
  const bytes = [];
  for (let i = 0; i < 256; i++) {
    bytes.push(Math.floor(Math.random() * 256).toString(16).padStart(2, '0'));
  }
  return bytes;
};

// Mock device data
export const deviceData = {
  name: "Arduino Uno",
  type: "Microcontroller",
  status: "Ready",
  firmware: {
    version: "1.8.13",
    date: "2023-09-15",
    bootloader: "ATMEGA328P",
    checksum: "8a7b6c5d4e3f2g1h",
  },
  hardware: {
    processor: "ATmega328P",
    architecture: "AVR",
    clock: "16 MHz",
    flash: "32 KB",
    sram: "2 KB",
    eeprom: "1 KB",
  },
  interfaces: ["USB", "SPI", "I2C", "UART"],
  pins: [
    { number: 0, type: "Digital/RX", mode: "Serial" },
    { number: 1, type: "Digital/TX", mode: "Serial" },
    { number: 2, type: "Digital", mode: "INPUT" },
    { number: 3, type: "Digital/PWM", mode: "OUTPUT" },
    // ...more pins
  ],
};
