// The following exercise contains the following subjects:
// ● Array
// ● Objects
// Instructions
// Create a function that takes one argument, an array.
// Use this array:
// const array = ["Hello", "Good Day", "Your
// Welcome", "hotdog", "hamburgers"];
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive
// Extra:
// return the letter with the most occurrences as well

function countLetterts(arr) {
    let result = {};
    let mostCommonLetter = "";
    let counter = 0;
    for (let word of arr) {
        word = word.toLowerCase();
        for (let letter of word) {
            if (letter >= "a" && letter <= "z") {
                if (result[letter] === undefined) {
                    result[letter] = 0;
                }
                result[letter]++;
                if (result[letter] > counter) {
                    counter = result[letter];
                    mostCommonLetter = letter;
                }
            }
        }
    }
    return { result, mostCommonLetter };
}

console.log(
    countLetterts(["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"])
);
