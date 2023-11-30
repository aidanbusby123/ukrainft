from flask import (Blueprint, flash, g, redirect, render_template, request, session, url_for)

bp = Blueprint('connect', __name__, url_prefix='/')

@bp.route('/connect', methods=('GET', 'POST'))
def connect():
    return render_template('/connect.html')
