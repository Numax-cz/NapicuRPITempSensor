import sqlite3
import time
from flask import Flask, jsonify
from threading import Thread
from datetime import datetime
import random

app = Flask(__name__)

# databaze check
def initialize_database():
    conn = sqlite3.connect('temperature.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS temperature_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            temperature REAL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# pičo ulož_to 
def save_temperature_to_db(temperature):
    conn = sqlite3.connect('temperature.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO temperature_data (temperature) VALUES (?)", (temperature,))
    conn.commit()
    conn.close()


def sensor_reading():
    while True:
       
        temperature = round(random.uniform(20,35), 2)
        
        
        save_temperature_to_db(temperature)
        print(f"Teplota {temperature} °C, je to tam v databázi more")

    
        time.sleep(1)

@app.route('/api/temperature', methods=['GET'])
def get_latest_temperature():
    conn = sqlite3.connect('temperature.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM temperature_data ORDER BY timestamp DESC LIMIT 1")
    row = cursor.fetchone()
    conn.close()
    
    #
    if row:
        return jsonify({"temperature": row[1], "timestamp": row[2]})
    else:
        return jsonify({"error": "No data available"}), 404


def main():
    
    initialize_database()

    sensor_thread = Thread(target=sensor_reading)
    sensor_thread.start()

    ## API
    app.run(host='0.0.0.0', port=5000)
    save_temperature_to_db()

# main smyčka


if __name__ == '__main__':
    main()
    
