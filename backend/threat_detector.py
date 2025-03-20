import requests

# Dummy IP blacklisting system
BLACKLISTED_IPS = ["192.168.1.100", "45.33.23.21"]

def check_login_attempt(ip):
    if ip in BLACKLISTED_IPS:
        print(f"ALERT: Suspicious login detected from {ip}")
        # Notify API
        requests.post("http://localhost:5000/api/threats", json={"ip": ip})

# Simulating login attempt
check_login_attempt("192.168.1.100")
