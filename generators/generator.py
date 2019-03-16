languages = ["English","Ainu"]
wordMap = []

counter = 0
run = True

while run:
    word = {}
    for l in languages:
        word[l]=input(l+" word?: ")
        if word[l]=="":
            break
        if word[l]=="-1":
            run = False
            break
    if run:wordMap.append(word)
    if word[l] == "":del wordMap[-1]
    
print(wordMap)
    
