# skript na čtení data ze senzoru
import time
import Adafruit_DHT

class DHTsensor:
    def __init__(self,sensor_type, pin):
        self.sensor = sensor_type
        self.pin = pin
    
    def read_temperature(self):
        humidity, temperature = Adafruit_DHT.read_retry(self.sensor, self.pin)

        if humidity is not None and temperature is not None:
            return round(temperature, 2) 
        else:
            print("senzor je na piču")
            return None
        

