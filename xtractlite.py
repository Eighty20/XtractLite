from flask import Flask, render_template, request, send_from_directory, url_for

app = Flask(__name__)
app.config["BOOTSTRAP_DIRECTORY"] = "./node_modules/bootstrap/dist/"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/bootstrap/<folder>/<filename>')
def send_bootstrap(folder, filename):
    return send_from_directory(app.config["BOOTSTRAP_DIRECTORY"]+folder, filename)

@app.route('/images/<filename>')
def get_image(filename):
    return app.send_static_file('images/' + filename)
