'''
Create a program capable of displaying questions to the user like KBC 
Use the List Data type to store the questions and their coreect answers
Display the fnal amount the person is taking home after playing the game 

'''
import random
questions = ["Who is the most time olympic winner ", " who amongst the following is crickter", 
             "Who is the indian singer amongst the following "]

choices = ["1. Micheal Phelps 2. Ryan Lotche","1.Ronaldo 2. Virat Kohli", "1.Lata Mangeshkar 2. Justin Bieber"]

solutions = ["1.Micheal Phelps", "2.Virat Kohli", "1.Lata Mangeshkar"]

print("Welcome to kaun banega karodpati")



count = 0
winning_amount = 0 
for j in range(0,len(questions)):
    
    if count == j :
        print (questions[j])
        count = count + 1
        print(choices[j])
        choosed =input("what is the answer you think is correct ")
        if choosed == solutions[j] :
            print("Correct answer ")
            winning_amount = winning_amount + 500*(j+1)
        else :
            print("Sorry you loosed the game ")
            break

print("winning amount is ",winning_amount)

    

    
    

