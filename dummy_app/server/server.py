from flask import Flask, render_template, request, jsonify
import os
from bson.json_util import dumps
from pymongo import MongoClient


# static folder contains the js/css/img files to be distributed to client
# template folder contains the html templates to be rendered by Flask
app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

#app.config["MONGO_DBNAME"] = "tsatetota_db"
#db = PyMongo(app, config_prefix='MONGO')
#APP_URL = "http:#127.0.0.1:5000"
uri = os.environ.get('MONGODB_URI')
#if not uri:
#    MONGO_URL = "dbdb:#localhost:27017/rest";
client = MongoClient(uri)
#db = client['heroku_21cnp0sm']
db = client['heroku_21cnp0sm']

APP_STAGE = os.environ['APP_STAGE']

@app.route('/')
def index():
    return render_template('index.html', pyvar='hello', server=APP_STAGE)

@app.route('/data', methods=['GET'])
def data():
    # print(request.args)
    resp = 'Server ACKs : {}'.format(request.args.get('data'))
    return jsonify({'response': resp})

@app.route('/citations', methods=['GET'])
def get_all_citations():
    return dumps(db.citations.find())

@app.route('/occasions/<occasion>/citations', methods=['GET'])
def get_citations_for_tag(occasion):
    citation = db.citations.find({'ארועים': {'ארועים':{'$regex':'.*%d.*'}}}) % occasion
    output = []
    for c in citation:
        print(c)
        output.append(c)
    return dumps(citation)


if __name__ == '__main__':
    app.debug = APP_STAGE == "Development"
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
