from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  

@app.route('/services')
def route():
    return render_template('services.html')  

@app.route('/p1')
def p1():
    return render_template('p1.html')  

@app.route('/login')
def login():
    return render_template('login.html') 

@app.route('/contact')
def contact():
    return render_template('contact.html')  
@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)