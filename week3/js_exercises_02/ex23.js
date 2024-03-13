// The following exercise contains the following subjects:
// ● arrays
// ● indexOf
// Instructions
// Create a function that received an array of integers as a
// parameter.
// Return a new array without any duplicates inside. You
// indexOf as part of your solution.
// Example:
// [3,4,4,3,6,3] --→ [3,4,6]

function tramsform(arr = []) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
            result.push(arr[i]);
        }
    }
    return result;
}
