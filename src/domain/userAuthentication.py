# from ..server.db_connection import getUser
from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/loginFunctions')
def checkUserExist():
    # TO DO 
    print("login")
    restaurant_user = "teste"
    if not restaurant_user:
        return "Usuário não encontrado"

    return restaurant_user

if __name__ == "__main__":
    app.run(debug=True)