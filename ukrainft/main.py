from flask import (Blueprint, flash, g, redirect, render_template, request, session, url_for)

bp = Blueprint('index', __name__, url_prefix='/')

@bp.route('/', methods=('GET', 'POST'))
def home():
    return render_template('/index.html')

@bp.route('/about', methods=('GET', 'POST'))
def about():
    return render_template('/about.html')
