/*
2. Custom Logger (Higher-Order Function)
Create a function logger that takes a log type (info, error, warn) and 
returns a function that logs messages in a formatted way.

*/

function logger(logType) {
    return function (message) { // Accept 'message' as a parameter
        console.log(`[${logType.toUpperCase()}]: ${message}`);
    };
}

// Create loggers
const infoLogger = logger("INFO");
const errorLogger = logger("ERROR");

// Using loggers
infoLogger("System is running fine.");  
// Output: [INFO]: System is running fine.

errorLogger("Something went wrong!");   
// Output: [ERROR]: Something went wrong!
