from flask import Flask
from .api import api as api_blueprint
app = Flask(__name__)

app.register_blueprint(api_blueprint)


@app.route('/')
def index_client():
    return "hello world", 200
