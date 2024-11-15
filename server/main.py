import sqlite3
import time
from flask import Flask, jsonify
from flask_cors import CORS
from threading import Thread
from datetime import datetime
import random
import board
import adafruit_dht

sensor = adafruit_dht.DHT11(board.D18)

app = Flask(__name__)
CORS(app)
# databaze check
def initialize_database():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS temperature_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            temperature REAL,
            humidity REAL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# pičo ulož_to 

def save_to_db(temperature, humidity):
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO temperature_data (temperature, humidity) VALUES (?, ?)", (temperature, humidity))
    conn.commit()
    conn.close()


def sensor_reading():
    while True:
       
        temperature = sensor.temperature
        humidity = sensor.humidity
        
        save_to_db(temperature, humidity)
        print(f"Teplota {temperature} °C, je to tam v databázi more")
        print(f"Vlhkost {humidity} ")


        time.sleep(1)


@app.route('/api/temperature', methods=['GET'])
def get_latest_temperatures():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    
    # Získání posledních 24 hodnot
    cursor.execute(SELECT * FROM temperature_data ORDER BY timestamp DESC LIMIT 24;)
    rows = cursor.fetchall()
    conn.close()
    
    # Kontrola, zda byly nalezeny nějaké výsledky
    if rows:
        data = [{"teplota": row[1],"vlhkost":row[2],"cas": row[3]} for row in rows]
        return jsonify(data)
    else:
        return jsonify({"error": "No data available"}), 404
    



def main():
    
    
    initialize_database()

    sensor_thread = Thread(target=sensor_reading)
    sensor_thread.start()

    ## API
    app.run(host='0.0.0.0', port=5000)
    save_to_db()


# main smyčka


if __name__ == '__main__':
    main()
    
