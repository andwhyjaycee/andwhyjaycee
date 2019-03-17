from flask import Flask, render_template, request
app = Flask(__name__)
import json

@app.route('/')
def index():
    return render_template('template.html',
                            content = render_template('main.html'))

@app.route('/why')
def why():
    return render_template('template.html',
                            content = render_template('why.html'))
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

words = [{"English":"one","Miwok":"lutti"},
         {"English":"two","Miwok":"otikko"},
         {"English":"one","Miwok":"lutti"},
        ]
        
languages = ["English", "Ainu"]

import phrases
words = phrases.phrases

@app.route('/phrases')#,methods=['GET']) 
def phrases():
    return render_template('template.html',
                content = render_template('phrases.html',
                words = words,
                languages = languages)
            )

@app.route('/map')#,methods=['GET']) 
def map():
    return render_template('template.html',
                content = render_template('map.html'))

        
@app.route('/api',methods=['POST', 'GET']) 
def api():
    return str(words)
@app.route('/api/languages',methods=['POST', 'GET']) 
def apiLang():
    return str(languages)

def findPhrase(givenPhrase, givenLanguage):
    givenPhrase = givenPhrase.lower()
    givenLanguage = givenLanguage.lower()
    if givenLanguage not in [l.lower() for l in languages]:
        return -1
    for group in words:
        for lang, phrase in group.items():
            lphrase = phrase.lower()
            if givenPhrase==lphrase:
                return group[givenLanguage[0].upper()+givenLanguage[1:]]
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
@app.route('/api/susi', methods=['POST', 'GET']) 
def apiSUSI():
    if request.method=='POST':
        givenPhrase = request.form['phrase']
        givenLanguage = request.form['language']
    if request.method=='GET':
        givenPhrase = request.args.get('phrase')
        givenLanguage = request.args.get('language')
    found =  findPhrase(givenPhrase, givenLanguage)
    if found == -1: return json.dumps({"ans":{"ans":"Sorry, I Currently do not support this language."}})
    elif found == -2: return json.dumps({"ans":{"ans":"Sorry, I currently do not know this phrase"}})
    else: return json.dumps({"ans":{"ans":"The phrase \""+givenPhrase+"\" in "+givenLanguage+" is \""+found+"\""}})

from random import randint
@app.route('/api/susi/random', methods=['POST', 'GET']) 
def apiRandom():
    index = randint(0,len(words)-1)
    lang = languages[randint(1,len(languages)-1)]
    
    return json.dumps({"ans":{"ans":\
    "Did you know that \""+words[index]["English"]+"\" in "+lang+" is \""+words[index][lang]+"\"?"}})

'''  
import sys
try:
    print(sys.argv[1])
    port = int(sys.argv[1])
except:port=5000
'''

if __name__ == '__main__':
    #port = int(os.environ.get('PORT'))
    app.run( debug=True, use_reloader=True)
#app.run()#debug=True, host='0.0.0.0')

