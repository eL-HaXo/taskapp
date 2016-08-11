#  . taskapp/bin/activate
import logging
from random import random
from flask import Flask, send_file, request, jsonify

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

@app.route("/hello")
def hello():
    return "Hello World from My App"

@app.route("/task/status", methods=["POST"])
def task_status():
    if request.method == "POST":
        task_id = int(request.form["id"])
        status = int(request.form["status"])
        status = 1 if status == 0 else 0
    return jsonify({
        "id": task_id,
        "status": status
    })

@app.route("/task/save", methods=["POST"])
def save_task():
    if request.method == "POST":
        task_id = request.form["id"]
        status = request.form["status"]
        if task_id == "new":
            status = 0
            task_id = int(round(random() * 1000))
        else:
            logging.info("EDIT TASK ID ---- Task ID %s" % task_id)
            task_id = int(task_id)
        description = request.form["description"]
        target_date = request.form["targetDate"]
        priority = request.form["priority"]

    return jsonify({
        "id": task_id,
        "description": description,
        "targetDate": target_date,
        "priority": priority,
        "status": int(status)
    })


@app.route("/edit/<int:task_id>")
@app.route("/add")
@app.route("/")
def main(*args, **kwargs):
    return send_file('./static/index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=80)