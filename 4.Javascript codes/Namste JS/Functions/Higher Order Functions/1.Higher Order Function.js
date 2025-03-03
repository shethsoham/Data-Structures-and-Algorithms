const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI *radius *radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}

const diameter = function(radius){
    return radius+radius
}

const calculate = function (radius, logic){
    const output =[];
    for (let i =0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
};

console.log("area is",calculate(radius, area));
console.log("circumference is",calculate(radius,circumference));
console.log("diamter is",calculate(radius, diameter ))
