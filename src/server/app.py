#  . taskapp/bin/activate
from __future__ import print_function # In python 2.7
import sys
from random import random
from flask import Flask, send_file, request, jsonify
app = Flask(__name__)

def plog(msg):
    print(msg, file=sys.stderr)

@app.route("/hello")
def hello():
    return "Hello World from My App"

@app.route("/task/save", methods=["POST"])
def save_task():
    if request.method == "POST":
        description = request.form["description"]
        target_date = request.form["targetDate"]
        priority = request.form["priority"]
        task_id = int(round(random() * 1000))
        plog("Form Inputs:")
        plog("task id = " + str(task_id))
        plog(description)
        plog(target_date)
        plog(priority)
    return jsonify({
        "id": task_id,
        "description": description,
        "targetDate": target_date,
        "priority": priority
    })


@app.route("/edit")
@app.route("/add")
@app.route("/")
def main():
    return send_file('./static/index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=80)