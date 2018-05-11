# coding: utf-8

from flask import Flask, render_template, request, jsonify
import os
from bson.json_util import dumps
from werkzeug.routing import BaseConverter
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

class ListConverter(BaseConverter):

    def to_python(self, value):
        return value.split('+')

    def to_url(self, values):
        return '+'.join(BaseConverter.to_url(value)
                        for value in values)
app.url_map.converters['list'] = ListConverter

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

@app.route('/occasions/<list:occasions>/citations', methods=['GET'])
def get_citations_for_occasion(occasions):
    occasionsStr = '|'.join('{0}'.format(e) for e in occasions)
    print(occasionsStr)
    citation = db.citations.find({'ארועים': {'$regex': occasionsStr}})
    output = []
    for c in citation:
        print(c)
        output.append(c)
    return dumps(output)

@app.route('/emotions/<list:emotions>/citations', methods=['GET'])
def get_citations_for_emotion(emotions):
    emotionsStr = '|'.join('{0}'.format(e) for e in emotions)
    citation = db.citations.find({'רגשות': {'$regex': emotionsStr}})
    output = []
    for c in citation:
        print(c)
        output.append(c)
    return dumps(output)

@app.route('/themes/<list:themes>/citations', methods=['GET'])
def get_citations_for_theme(themes):
    themesStr = '|'.join('{0}'.format(e) for e in themes)
    citation = db.citations.find({'תמות': {'$regex': themesStr}})
    output = []
    for c in citation:
        print(c)
        output.append(c)
    return dumps(output)


if __name__ == '__main__':
    app.debug = APP_STAGE == "Development"
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

