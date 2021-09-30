from flask import Flask
from flask import request
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from routes import app

if __name__ == "__main__":
    app.run(port=5000,debug=True)