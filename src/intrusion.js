// let inputString = "1'; DROP TABLE users; --";
// let inputString = "DROP sampletable;-- ";

// console.log("Testing SQL Injection detection with input string: " + inputString);
// console.log("Result: " + (intrusionDetectionSystem(inputString) ? "Safe" : "Unsafe"));

function detectSqlInjection(inputString) {
    let sqlInjectionPattern = /(%27)|(')|(--)|(%23)|(#)/i;
    const sqlInjectionPattern1 = /(\bSELECT\b|\bINSERT\b|\bUPDATE\b|\bDELETE\b|\bDROP\b)/i;
    return sqlInjectionPattern.test(inputString) | sqlInjectionPattern1.test(inputString) ;
}

// This function takes a user input and checks it for SQL injection attacks using the detectSqlInjection() function.
function intrusionDetectionSystem(userInput) {
    if (detectSqlInjection(userInput)) {
        return false;
    }
    
    return true;
}

export {intrusionDetectionSystem}