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

@app.route('/map')#,methods=['GET']) 
def map():
    return render_template('template.html',
                content = render_template('map.html'))

words = [{"English":"one","Miwok":"lutti"},
         {"English":"two","Miwok":"otikko"},
         {"English":"one","Miwok":"lutti"},
        ]
        
@app.route('/api',methods=['POST', 'GET']) 
def api():
    return str(words)
languages = ["English", "Miwok"]

def findPhrase(givenPhrase, givenLanguage):
    if givenLanguage not in languages:
        return -1
    for group in words:
        for lang, phrase in group.items():
            if givenPhrase==phrase:
                return group[givenLanguage]
    return -2

@app.route('/search',methods=['POST']) 
def searchQuery():
    if request.method=='POST':
        givenPhrase = request.form['phrase']
        givenLanguage = request.form['language']
    found =  findPhrase(givenPhrase, givenLanguage)
    if found == -1: 
        content =  "Sorry, I Currently do not support this language."
        word = "Language not supported"
    elif found == -2:
        content = "We currently do not know the correct phrase in "+givenLanguage
        word = "Phrase not avaliable"
    else: 
        content =  "The phrase "+givenPhrase+" in "+givenLanguage+" is "+found
        word = found
    return render_template('template.html',
                content = render_template('search.html',
                word = word, content=content))


#curl -d "language=Miwok&phrase=two" -X POST localhost:5000/api/susi
@app.route('/api/susi',methods=['POST']) 
def apiSUSI():
    if request.method=='POST':
        givenPhrase = request.form['phrase']
        givenLanguage = request.form['language']
    found =  findPhrase(givenPhrase, givenLanguage)
    if found == -1: return "Sorry, I Currently do not support this language."
    elif found == -2: return "Sorry, I currently do not know this phrase"
    else: return "The phrase "+givenPhrase+" in "+givenLanguage+" is "+found
            
import sys
try:
    print(sys.argv[1])
    port = int(sys.argv[1])
except:port=5000

if __name__ == '__main__':
    #port = int(os.environ.get('PORT'))
    app.run( port=port, debug=True, use_reloader=True)
#app.run()#debug=True, host='0.0.0.0')
