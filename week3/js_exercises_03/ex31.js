// The following exercise contains the following subjects:
// ● reduce method
// Instructions
// Write the following functions using the reduce built-in function.
// 1. max
// 2. the sum of even numbers
// 3. average

const arr = [11, 4, 31, 128, 3, 5, 9, 87];

console.log(arr.reduce((prev, curr) => {
    return Math.max(prev, curr);
}, -Infinity));

console.log(arr.reduce((sum , curr) => {
    if (curr % 2 === 0) {
    return sum + curr
} else {
    return sum
}
}, 0));

console.log(arr.reduce((sum, curr) => sum + curr, 0)/arr.length)