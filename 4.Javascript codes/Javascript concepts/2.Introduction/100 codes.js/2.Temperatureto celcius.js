/*
Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9.
*/

const prompt = require('prompt-sync')();

function temptoCelcius(){
    let temp_Fahremheit = prompt("what is the current tempoearture in degree celcius");
    let temp_celsius = (temp_Fahremheit -32)*5/9;
    console.log("The value of fshrenheit to celcilus is ", temp_celsius);
}

temptoCelcius()


