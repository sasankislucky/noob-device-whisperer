
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const DecompiledView = () => {
  return (
    <ScrollArea className="h-64 w-full rounded-md border terminal">
      <pre className="text-xs">
{`void setup() {
  // Initialize serial communication
  Serial.begin(9600);
  
  // Configure GPIO pins
  pinMode(13, OUTPUT);
  pinMode(12, INPUT_PULLUP);
  
  // Initial LED state
  digitalWrite(13, LOW);
  
  // Setup timer interrupt
  Timer1.initialize(1000000);
  Timer1.attachInterrupt(timerCallback);
}

void loop() {
  // Main program loop
  if (digitalRead(12) == LOW) {
    // Button pressed
    digitalWrite(13, HIGH);
    delay(100);
    digitalWrite(13, LOW);
  }
  
  // Read sensor data
  int sensorValue = analogRead(A0);
  Serial.println(sensorValue);
  
  delay(500);
}`}
      </pre>
    </ScrollArea>
  );
};

export default DecompiledView;
