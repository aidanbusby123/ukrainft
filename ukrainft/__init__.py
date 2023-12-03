import os
import sys
from flask import (Flask, render_template)

def create_app(test_config=None):
    # Create, configure
    app = Flask(__name__, instance_relative_config=True)
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

app = create_app(host=sys.argv[1])

@app.route('/')
def home():
    return render_template('/index.html')

@app.route('/about')
def about():
    return render_template('/about.html')
