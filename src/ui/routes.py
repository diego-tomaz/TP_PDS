from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/')
def login():
    return render_template("login.html")

@app.route('/produtos')
def produtos():
    return render_template("produtos.html")

@app.route('/estoque')
def estoque():
    return render_template("estoque.html")

@app.route('/pedidos')
def peidos():
    return render_template("pedidos.html")

@app.route('/dashboard')
def dashboard():
    return render_template("dashboard.html")

@app.route('/cardapio')
def cardapio():
    return render_template("cardapio.html")