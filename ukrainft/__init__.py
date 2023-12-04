# todo: add https
import os
import sys
from flask import (Flask, render_template)

def create_app(test_config=None):
    # Create, configure
    app = Flask(__name__, instance_relative_config=True, static_folder='../frontend/public', static_url_path='/')
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'ukrainft.sqlite'),
    )

    if test_config is None:
        # load instance config
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load test config
        app.config.from_mapping(test_config)

    # Make sure instance directory exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    return app

app = create_app()

@app.route('/')
def home():
    return app.send_static_file('/index.html')

@app.route('/about')
def about():
    return render_template('/about.html')
