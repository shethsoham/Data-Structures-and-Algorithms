const users =[
    {firstName: "Soham", lastName:"Sheth", age:24},
    {firstName: "Mathew", lastName:"Khan", age:52},
    {firstName: "Tulisdas", lastName:"patel", age:31},
    {firstName: "Akbar", lastName:"Joshi", age:24},
];


// array of users

//list of full names 
//["Soham Sheth", "Mathew Khan",...]
// We would be uisng math function here

const output = users.map(x=>x.firstName + " "+x.lastName)
console.log(output)
// [ 'SohamSheth', 'MathewKhan', 'Tulisdaspatel', 'AkbarJoshi' ]

// finding people with same age == uisng filter 

const output1 = users.filter(x=> x.age===24)
console.log(output1)

// returing number of peole whose age is equal to 24
 
const output2 = users.reduce(function(acc,curr){
    if (acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }else{
        acc[curr.age]=1
    }
    return acc;
}, {})

console.log(output2)