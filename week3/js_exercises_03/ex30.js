// The following exercise contains the following subjects:
// ● callback functions
// Instructions
// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function

function isString(str, callback) {
    if (typeof str === 'string') {
        callback(str)
    }

}

function callbackFunction(str) {
    console.log(str)
}

isString("hey", callbackFunction)

function firstWordUpperCase(str, callback) {
    let words = str.split(" ");
    words[0] = words[0].toUpperCase();
    let newStr = words.join(" ");
    console.log(callback(newStr))
}

function createDashes(str) {
    let words = str.split(" ");
    return words.join("-")

}

firstWordUpperCase("fjfkfk kfkek skfj dkfk skfkdf", createDashes)