import os
from ukrainft import main
from ukrainft.main import app 

from flask import (Flask, render_template)


@app.route('/')
def home():
    app.send_static_file('/index.html')

@app.route('/about')
def about():
    app.send_static_file('/about.html')