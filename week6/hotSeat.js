const numbers = [2, 6, 4, 5, 1, 2, 9, 7];

function sumArr(numArr) {
    return numArr.reduce((acc, num) => acc + num, 0)

}

console.log(sumArr(numbers))

function getSum2(numArr) {
    let result = 0;
    for (let index = 0; index < numArr.length; index++) {
        const currentNum = numArr[index];
        result += currentNum;
    }
}

console.log(getSum2())