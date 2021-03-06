from flask import jsonify
from routes import app
from routes import db

class Category(db.Model):
    __tablename__ = 'category'

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    name = db.Column(db.VARCHAR(50), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    image = db.Column(db.Text(), nullable=False)

    def __init__(self, id, name, description, image):
        self.id = None
        self.name = name
        self.description = description
        self.image = image

    def json(self):
        return {"id": self.id, "name":self.name, "description": self.description, "image": self.image}

@app.route("/categories")
def get_all_categories():
    return jsonify([c.json() for c in Category.query.all()]) 