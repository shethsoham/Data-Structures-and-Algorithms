// Objects are e=defined with curly braces at starting and ending 

// Building Javascript objects

// Objects are similar to arrays
// instead of using indexes you use properties

var ourDogs = {
    "name": "Camper",
    "legs": 4,
    "tails":1,
    "friends":["everthings!"]
};

// only change the code below this line 

var myDog = {
    "name" : "tom",
    "legs" : 3,
    "tails":2,
    "friends": []
};

// this is how we create our own objects

//There are 2 ways in which we can access object notations 
// Accesing Object properties with dot notation
// Accesing object proeperties with curly brace notations 

// object setup 

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Accessing Object properties with Dot notation

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


console.log(testObj)
console.log("hat value is",hatValue)
// Accessing Object value with Bracket Notation
// [You can also use anytime but IT IS REQUIRED TO USE WHEN] 
// THERE IS A SPACE IN THE NAME.

// seting up an Object
var testObj1 ={
    "an entree" : "Hamburger",
    "my Side" : "Veggies",
    "the drink" : "water"
};

// using bracket notation

var entreeValue = testObj1["an entree"];
var drinkValue = testObj1["the drink"];
var mysideValue = testObj1["Nonveg"]
console.log(testObj1)
console.log("entreeValue is",entreeValue)
console.log("drinkValue is", drinkValue)


// accessing object proeprties with variables

var testObj2 ={
    12 : "Soham",
    16 : "John",
    19 : "Tom"
};

var playerNumber = 16;
var player = testObj2[playerNumber];

console.log(testObj2)
console.log(playerNumber)
console.log(player)

// Updating Object Properties
// WE CAN USE DOT NOTATION to update object properties
ourDogs.name ="Tommy";
console.log(ourDogs)

myDog.name= "Happy"
console.log(myDog)

// Adding a new property to objects 

ourDogs.bark = "bow-wow"
console.log(ourDogs)

myDog.bark = "Bhau-bhau"
console.log(myDog)

// Deleting properties from an Object
// Objects can be looked up as a key value pir
delete myDog.bark
console.log(myDog)

// Using Objects for Lookups

var mycar = {

    "color": "red",
    "tyres": 4,
    
};

console.log("cars color is", mycar.color)
console.log(Object.keys(mycar))

// Testing Objects for properties 

var myObj ={
    "gift" :"pony",
    "pet" : "kitten",
    "bed" : "sleigh"
};


function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else{
        return "Not found"
    }
}


console.log(checkObj("gift"))

// Accesing nested objects

var myStorage ={
    "car":{
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"        }
    },
    "outside":{
        "trunk":"jack"
    }
};

var gloveBoxContents =myStorage.car.inside["passenger seat"];
console.log(gloveBoxContents)


// accesing nested arrays

var myPlants =[
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "sunflower"
        ]

    },
    {
        type: "trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }

];

var secondTree = myPlants[1].list[1]
console.log(secondTree)