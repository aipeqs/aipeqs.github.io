import os
import requests

from flask import Flask, jsonify, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

ulb_info = {}

@app.route("/", methods=['GET', 'POST'])
def index():
    return render_template("front.html")

@app.route("/simulation", methods=['GET', 'POST'])
def simulation():
    return render_template("index.html", ulb_name = ulb_info["name"], ulb_grade = ulb_info["grade"])


@socketio.on("submit data")  # when the socket detects this event
def ulb(data):
    ulb_info["name"] = data["ulb"]  # extracts the data passed in
    ulb_info["grade"] = data["grade"]
    # emit("announce data", {"ulb": ulb, "grade": grade},
    #      broadcast=True)  # broadcast to everyone
