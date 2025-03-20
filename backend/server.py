from flask import Flask, request, jsonify

app = Flask(__name__)

# Test route to check if server is running
@app.route('/')
def home():
    return "Server is running!"

# API endpoint to receive data from the agent
@app.route('/report', methods=['POST'])
def receive_report():
    data = request.json  # Receive JSON data from agent
    print("Received data:", data)
    return jsonify({"message": "Data received successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')  # Allows access from other devices
