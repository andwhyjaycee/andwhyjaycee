countries = []

counter = 0
while True:
    country = {}
    country['id']=input("Enter country Code: ")
    if country['id'] == "": break
    country['info']='This country has these indigenous languages: <i>'
    while True:
        inlang = input("Indigenous language: ")
        if inlang == "": 
            country['info'] = country['info'][:-2]
            break
        country['info']+=inlang+", "
    country['info']+=".</i>"
    countries+=[country]
            
import json
print(json.dumps(countries))
    
