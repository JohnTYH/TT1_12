from flask import jsonify, request
from routes import app
from routes import db

class Customer(db.Model):
    __tablename__ = 'customer'

    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    username = db.Column(db.VARCHAR(255), nullable=False)
    password = db.Column(db.VARCHAR(255), nullable=False)
    first_name = db.Column(db.VARCHAR(255), nullable=False)
    last_name = db.Column(db.VARCHAR(255), nullable=False)
    postal_code = db.Column(db.VARCHAR(255), nullable=False)
    gender = db.Column(db.VARCHAR(255), nullable=False)
    created_at = db.Column(db.Date(), nullable=False)

    def __init__(self, id, username, password, first_name, last_name, postal_code, gender, created_at):
        self.id = id
        self.username = username
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        self.postal_code = postal_code
        self.created_at = created_at

    def json(self):
        return {"id": self.id, "username":self.username, "password":self.password, "first_name":self.first_name, "last_name":self.last_name, "postal_code": self.postal_code, "created_at": self.created_at}

@app.route("/login", methods=['POST'])
def login():
    data = request.get_json()
    username = data["username"]
    password = data["password"]
    if (Customer.query.filter_by(username=username).first()) == None:
        return jsonify({"message":"User with username '{}' does not exist.".format(username)}), 400
    
    customer_db = Customer.query.filter_by(username=username).first()
    if customer_db.password == password:
        return customer_db.json()

    return jsonify({"message":"username or password is wrong."}), 400