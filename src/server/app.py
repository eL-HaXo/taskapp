#  . taskapp/bin/activate
from flask import Flask, send_file, request, jsonify
app = Flask(__name__)

@app.route("/hello")
def hello():
    return "Hello World from My App"

@app.route("/task/save", methods=["POST"])
def save_task():
    if request.method == "POST":
        print "It's a post!"
        print request.POST
    return jsonify(**request.POST)


@app.route("/edit")
@app.route("/add")
@app.route("/")
def main():
    return send_file('./static/index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=80)