from flask import Flask, request, jsonify
from pymongo import Connection
from recs import get_recs
import json

app = Flask(__name__)

@app.route('/process_data', methods=['POST'])
def return_recs():
    info = request.form
    return jsonify(get_recs(info))

@app.route('/')
def start():
    return open("index.html").read()

if __name__ == '__main__':
    app.debug = True
    app.run()