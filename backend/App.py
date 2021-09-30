from flask import Flask
from flask import request
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/ecommerce'

db = SQLAlchemy(app)
CORS(app)

class category(db.Model):
    __tablename__ = 'category'

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    name = db.Column(db.VARCHAR(50), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    image = db.Column(db.Text(), nullable=False)

    def __init__(self, id, name, description, image):
        self.id = id
        self.name = name
        self.description = description
        self.image = image

    def json(self):
        return {"id": self.id, "name":self.name, "description": self.description, "image": self.image}

@app.route("/categories")
def get_all():
    #check if its only called by matching service then can call this service
    return jsonify([c.json() for c in category.query.all()])    

if __name__ == "__main__":
    app.run(port=5000,debug=True)