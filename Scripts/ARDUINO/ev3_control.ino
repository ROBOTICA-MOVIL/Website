#include <Wire.h>

#define SLAVE_ADDRESS 0x04
void setup() 
{
    Serial.begin(9600);         // start serial for output
    Wire.begin(SLAVE_ADDRESS);
    Wire.onReceive(receiveData);
    Wire.onRequest(sendData);
    Serial.println("Ready!");
}
int val,flag=0,index=0, incomingByte=0,incomingByte2=0;
uint8_t c[]={0,0,0,0,0,0,25,50};
uint8_t msg = 100;
char buf[8];
void loop()
{
delay(500);
matlabSerialRecive();
c[6]= incomingByte;
c[7]= incomingByte2;
}

void receiveData(int byteCount)
{
    while(Wire.available()>0) 
    {
      val=Wire.read();
      Serial.print((char)val);
      flag=1;
    }
}

// callback for sending data
void sendData()
{
  Wire.write(c,8);
}



void matlabSerialRecive()
{
 if (Serial.available() > 0) {
    // lee el byte de entrada:
    incomingByte = Serial.read();
    incomingByte2 = Serial.read();
    // di lo que tienes:
    Serial.print("I received: ");
    Serial.print((char)incomingByte, DEC);
    Serial.print(" ");
    Serial.println((char)incomingByte2, DEC);
  }
}
