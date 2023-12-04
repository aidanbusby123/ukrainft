import os
from flask import (Flask, render_template)
from ukrainft import create_app
from ukrainft import routes

app = create_app()
