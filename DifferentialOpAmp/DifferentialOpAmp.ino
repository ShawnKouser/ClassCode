/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/AnalogReadSerial
*/
int billy = 7;
int bobby = 9;
// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  pinMode(billy, INPUT);
  pinMode(bobby, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  // print out the value you read:
  if(digitalRead(billy) == 1){
    Serial.println(sensorValue*5);
    
  }
  else{
    Serial.println(sensorValue);
    if(sensorValue > 170){
      digitalWrite(bobby, HIGH);
  }
  else{
    digitalWrite(bobby,LOW);
    }
  }
  delay(1);        // delay in between reads for stability
}
