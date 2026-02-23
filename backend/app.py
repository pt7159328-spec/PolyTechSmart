from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from config import MONGO_URI, DB_NAME

app = Flask(__name__)
CORS(app)

# MongoDB Connection
try:
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    users = db["users"]
    print("✅ MongoDB Connected Successfully")
except Exception as e:
    print("❌ MongoDB Connection Error:", e)


@app.route("/")
def home():
    return "Backend is running"


@app.route("/register", methods=["POST"])
def register():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"message": "No data received"}), 400

        name = data.get("name")
        email = data.get("email")
        password = data.get("password")

        if not name or not email or not password:
            return jsonify({"message": "All fields are required"}), 400

        # Check if user already exists
        if users.find_one({"email": email}):
            return jsonify({"message": "User already exists"}), 400

        # Insert new user
        users.insert_one({
            "name": name,
            "email": email,
            "password": password
        })

        return jsonify({"message": "Registration successful"}), 201

    except Exception as e:
        print("❌ Error:", e)
        return jsonify({"message": "Server error"}), 500


if __name__ == "__main__":
 app.run(host="0.0.0.0", port=5000, debug=True)