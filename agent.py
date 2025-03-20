import psutil
import requests
import time

# Set the API endpoint (change this if your server runs on a different IP)
API_URL = "http://127.0.0.1:5000/report"

def get_process_info():
    """
    Collects CPU and memory usage of all running processes.
    """
    process_data = []
    for process in psutil.process_iter(['pid', 'name', 'cpu_percent', 'memory_info']):
        try:
            process_data.append({
                "pid": process.info['pid'],
                "process_name": process.info['name'],
                "cpu_usage": process.info['cpu_percent'],
                "memory_usage": process.info['memory_info'].rss // (1024 * 1024)  # Convert to MB
            })
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            continue
    return process_data

def monitor_processes():
    """
    Continuously monitors and sends process data to the server.
    """
    while True:
        process_list = get_process_info()
        
        if process_list:
            try:
                response = requests.post(API_URL, json=process_list)
                print(f"Sent data to server. Response: {response.json()}")
            except requests.exceptions.RequestException as e:
                print(f"Error sending data: {e}")
        
        time.sleep(5)  # Send data every 5 seconds

if __name__ == "__main__":
    print("Agent started. Monitoring processes...")
    monitor_processes()
