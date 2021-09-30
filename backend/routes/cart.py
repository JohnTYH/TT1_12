from flask import json, jsonify
from routes import app
from routes import db
from routes.category import category
from routes.product import product
from flask import request, jsonify
from sqlalchemy.sql import func

class Order_Item(db.Model):
    __tablename__ = 'order_item'

    product_id = db.Column(db.Integer(), primary_key=True)
    order_id = db.Column(db.Integer(), primary_key=True)
    total_price = db.Column(db.Float())
    product_qty = db.Column(db.Integer())

    def __init__(self, product_id, order_id, total_price, product_qty):
        self.product_id = product_id
        self.order_id = order_id
        self.total_price = total_price
        self.product_qty = product_qty

    def json(self):
        return {"product_id": self.product_id, "order_id": self.order_id, "total_price": self.total_price, "product_qty": self.product_qty}

class Order(db.Model):
    __tablename__ = 'order'

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    customer_id = db.Column(db.Integer(), nullable=False)
    status = db.Column(db.Integer(), nullable=False)
    created_at = db.Column(db.Date(), nullable=False, server_default=func.now())

    def __init__(self, customer_id, status, id=None, created_at=None):
        self.id = id
        self.customer_id = customer_id
        self.status = status
        self.created_at = created_at

    def json(self):
        return {"id":self.id, "customer_id": self.customer_id, "status": self.status, "created_at": self.created_at}

@app.route("/order", methods=['POST'])
def add_order():
    data = request.get_json()

    # For order
    customer_id = data["customer_id"]
    status = data["status"]
    # created_at

    # Add order to db
    order = Order(**data)
    try: 
        db.session.add(order)
        db.session.commit()
    except Exception as e:
        print(e)
        return jsonify({f"message": "An error {error} occured creating the order item."}), 500

    return jsonify(order.json())

@app.route("/checkout", methods=['POST'])
def cart_checkout():
    data = request.get_json()

    # For order
    customer_id = data["customer_id"]
    status = data["status"]
    # created_at

    # Add order to db
    order = Order(customer_id=customer_id, status=status)
    try: 
        db.session.add(order)
        db.session.commit()
    except Exception as e:
        print(e)
        return jsonify({f"message": "An error {error} occured creating the order item."}), 500

    order_id = order.id

    products = data["products"]
    print(products)
    for product in products:
        product = Order_Item(order_id=order_id, **product)

        try:
            db.session.add(product)
            db.session.commit()
        except Exception as e:
            print(e)
            return jsonify({f"message": "An error {error} occured creating the order item."}), 500

    return jsonify(order.json())

@app.route("/orderitems")
def get_all_order_items():
    return jsonify([c.json() for c in Order_Item.query.all()]) 