from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('template.html',
                            content = render_template('main.html'))

@app.route('/about')
def about():
    return render_template('template.html',
                            content = render_template('about.html'))
'''
# Naming and variables
@app.route('/name/<name>/<int:score>')
def hello(name,score):
    return render_template('name.html', name=name, marks=score)
'''

@app.route('/phrases')#,methods=['GET']) 
def phrases():
    return render_template('template.html',
                content = render_template('phrases.html',
                words = [["one","lutti"],["two","otikko"]])
            )

words = [{"English":"one","Miwok":"lutti"},
         {"English":"two","Miwok":"otikko"},
         {"English":"one","Miwok":"lutti"},
        ]
        
@app.route('/api',methods=['POST', 'GET']) 
def api():
    return str(words)

if __name__ == '__main__':
    app.run()#debug=True, host='0.0.0.0')
