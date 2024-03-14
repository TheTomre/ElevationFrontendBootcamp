// The following exercise contains the following subjects:
// ● for loop
// Instructions
// You are given two arrays:
// const food = ["Noodle", "Pasta", "Ice-cream",
// "Meat", "Cucumber", "Olives"];
// const food1 = ["Fries", "Ice-cream", "Pizza",
// "Olives", "Hamburgers"];
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

const food = ["Noodle", "Pasta", "Ice-cream","Meat", "Cucumber", "Olives"];

const food1 = ["Fries", "Ice-cream", "Pizza","Olives", "Hamburgers"];

function compare(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i])
            }
        }

    }
    return result.length > 0 ? result : false;
}

console.log(compare(food, food1))

