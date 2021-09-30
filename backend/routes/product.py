from typing import NoReturn
from flask import jsonify
from routes import app
from routes import db

class product(db.Model):
    __tablename__ = 'product'

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    title = db.Column(db.Text(), nullable=False)
    price = db.Column(db.Float(), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    category_id = db.Column(db.Integer(), nullable=False)
    image = db.Column(db.Text(), nullable=False)
    qty = db.Column(db.Integer(), nullable=False)

    def __init__(self, id, title, price, description, category_id, image, qty):
        self.id = None
        self.title = title
        self.price = price
        self.description = description
        self.category_id = category_id
        self.image = image
        self.qty = qty

    def json(self):
        return {"id": self.id, "title": self.title, "price":self.price, "description": self.description, "category_id": self.category_id, "image": self.image, "qty": self.qty}

@app.route("/products")
def get_all_products():
    return jsonify([c.json() for c in product.query.all()]) 