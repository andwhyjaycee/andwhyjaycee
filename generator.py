languages = ["English","Miwok"]
wordMap = []

counter = 0
run = True

while run:
    word = {}
    for l in languages:
        word[l]=input(l+" word?: ")
        if word[l]=="":
            run = False
            break
    if run:wordMap.append(word)
print(wordMap)
    
